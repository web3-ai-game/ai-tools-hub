import { NextRequest, NextResponse } from 'next/server';
import { geminiClient } from '@/lib/gemini';
import { dbHelpers } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, userId, options } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Generate image using Gemini
    const result = await geminiClient.generateImage(prompt, options);

    // Calculate cost
    const cost = 0.5; // $0.50 per image

    // Save generation to database
    const generationId = await dbHelpers.addDocument('generations', {
      type: 'image',
      userId,
      prompt,
      result: result.url,
      cost,
      metadata: {
        description: result.description,
        width: options?.width || 1024,
        height: options?.height || 1024,
        quality: options?.quality || 'standard',
      },
    });

    // Update user balance
    await dbHelpers.updateDocument('users', userId, {
      balance: -cost, // This should be done with a transaction in production
      totalSpent: cost,
    });

    return NextResponse.json({
      id: generationId,
      imageUrl: result.url,
      description: result.description,
      cost,
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}
