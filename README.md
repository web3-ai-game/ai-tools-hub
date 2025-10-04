# AI Tools Hub - Professional AI Content Creation Platform

A modern, full-stack SaaS application for AI-powered content generation including images, videos, and written content. Built with Next.js 15, TypeScript, and integrated with Gemini AI, Firebase, and Stripe.

## 🚀 Features

- **AI Image Generation**: Create stunning images from text descriptions
- **AI Video Generation**: Generate short videos from prompts
- **Content Writing**: AI-powered content writing assistant
- **Pay-as-you-go**: Flexible pricing without subscriptions
- **User Authentication**: Secure login with Firebase Auth
- **Payment Integration**: Stripe for secure payments
- **Modern UI**: Beautiful, responsive design with Tailwind CSS and shadcn/ui

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.0 (App Router)
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+ with shadcn/ui
- **Animations**: Framer Motion 11.5+
- **State Management**: Zustand 5.0+
- **Forms**: React Hook Form + Zod validation

### Backend
- **API**: Next.js API Routes
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Cloud Storage

### AI Services
- **Image/Video/Content**: Gemini API (gemini-1.5-pro)

### Payment
- **Provider**: Stripe
- **Model**: Pay-per-use + Optional subscriptions

## 📁 Project Structure

```
ai-tools-hub/
├── app/                      # Next.js app directory
│   ├── (marketing)/         # Public pages
│   ├── (dashboard)/         # Protected dashboard pages
│   ├── api/                 # API routes
│   └── auth/                # Authentication pages
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── layouts/             # Layout components
│   └── features/            # Feature-specific components
├── lib/                     # Utility functions and configs
├── types/                   # TypeScript type definitions
├── config/                  # App configuration
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- Stripe account
- Google AI (Gemini) API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-tools-hub.git
cd ai-tools-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=AI Tools Hub

# Gemini API
GEMINI_API_KEY=your_gemini_api_key_here

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 💰 Pricing

- **Image Generation**: $0.50 per image
- **Video Generation**: $2.00 per 30 seconds
- **Content Writing**: $0.20 per 100 words

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checking
```

## 📝 API Endpoints

### Generation APIs
- `POST /api/generate/image` - Generate images
- `POST /api/generate/video` - Generate videos
- `POST /api/generate/content` - Generate written content

### Payment APIs
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/webhooks/stripe` - Stripe webhook handler

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🌟 Features Coming Soon

- [ ] Claude API integration for enhanced content generation
- [ ] API access for developers
- [ ] Batch processing for multiple generations
- [ ] Advanced editing tools for generated content
- [ ] Team collaboration features
- [ ] Mobile app

## 📧 Support

For support, email support@aitoolshub.com or open an issue on GitHub.

---

Built with ❤️ by AI Tools Hub Team
