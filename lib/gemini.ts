import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('Missing GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(apiKey);

export const geminiClient = {
  // Generate image using Gemini
  async generateImage(prompt: string) {
    try {
      // Note: Gemini doesn't directly generate images yet
      // This is a placeholder for when image generation is available
      // You might want to use a different API like Stable Diffusion or DALL-E
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      
      const imagePrompt = `Generate a detailed description for an image based on this prompt: "${prompt}". 
        Describe what the image should look like in detail, including colors, composition, style, and mood.`;
      
      const result = await model.generateContent(imagePrompt);
      const response = await result.response;
      const text = response.text();
      
      // For now, return a placeholder or integrate with an actual image generation API
      return {
        description: text,
        url: '/api/placeholder-image', // You'll need to implement actual image generation
        prompt: prompt,
      };
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  },

  // Generate video description (placeholder for video generation)
  async generateVideo(description: string, duration: number = 30) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      
      const videoPrompt = `Create a detailed storyboard for a ${duration}-second video based on this description: "${description}". 
        Include scene descriptions, camera movements, transitions, and audio suggestions.`;
      
      const result = await model.generateContent(videoPrompt);
      const response = await result.response;
      const text = response.text();
      
      return {
        storyboard: text,
        url: '/api/placeholder-video', // You'll need to implement actual video generation
        description: description,
        duration: duration,
      };
    } catch (error) {
      console.error('Error generating video:', error);
      throw error;
    }
  },

  // Generate content using Gemini
  async generateContent(topic: string, wordCount: number = 500, style?: string) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      
      const contentPrompt = `Write a ${wordCount}-word article about "${topic}". 
        ${style ? `Writing style: ${style}.` : ''}
        Make it engaging, informative, and well-structured with clear sections.
        Include an introduction, main points, and a conclusion.`;
      
      const result = await model.generateContent(contentPrompt);
      const response = await result.response;
      const text = response.text();
      
      // Count actual words
      const actualWordCount = text.split(/\s+/).length;
      
      return {
        content: text,
        wordCount: actualWordCount,
        topic: topic,
      };
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;
    }
  },

  // Chat with Gemini
  async chat(messages: { role: string; content: string }[]) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      
      // Convert messages to Gemini format
      const history = messages.slice(0, -1).map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));
      
      const chat = model.startChat({ history });
      const lastMessage = messages[messages.length - 1];
      const result = await chat.sendMessage(lastMessage.content);
      const response = await result.response;
      
      return response.text();
    } catch (error) {
      console.error('Error in chat:', error);
      throw error;
    }
  },

  // Analyze image with Gemini Vision
  async analyzeImage(imageBase64: string, prompt: string = 'Describe this image') {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      
      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageBase64,
          },
        },
      ]);
      
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw error;
    }
  },
};
