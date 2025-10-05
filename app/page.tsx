import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import {
  Sparkles,
  Image,
  Video,
  FileText,
  Zap,
  Shield,
  ArrowRight,
  Check,
  Star,
  BookOpen,
  Workflow,
  MessageSquare,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Mini Gemini Chat',
      description: 'Chat with our custom-tuned Gemini AI. Get instant answers, creative ideas, code help, and more. Your personal AI assistant is ready to help 24/7.',
      price: 'Free to try',
      href: '/dashboard/tools/chat',
      featured: true,
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Transform your ideas into stunning visual content with state-of-the-art AI models. Perfect for marketing materials, social media, and creative projects.',
      price: 'From $0.50 per image',
      href: '/tools/image',
    },
    {
      icon: Video,
      title: 'AI Video Creation',
      description: 'Bring your stories to life with AI-powered video generation. Create professional videos from text prompts in minutes, not hours.',
      price: 'From $2.00 per 30s',
      href: '/tools/video',
    },
    {
      icon: FileText,
      title: 'Smart Content Writing',
      description: 'Elevate your writing with AI assistance. Generate blog posts, marketing copy, product descriptions, and more with natural, engaging content.',
      price: 'From $0.20 per 100 words',
      href: '/tools/content',
    },
    {
      icon: BookOpen,
      title: 'Notion Integration',
      description: 'Seamlessly connect with your Notion workspace via MCP protocol. Manage databases, create pages, and organize your AI-generated content directly in Notion.',
      price: 'Included in all plans',
      href: '/tools/notion',
    },
  ];

  const benefits = [
    'Flexible pay-as-you-go pricing - No monthly commitments or hidden fees',
    'Powered by cutting-edge AI models including Gemini and GPT-4',
    'Lightning-fast generation - Get results in seconds, not minutes',
    'Full commercial usage rights - Use generated content in any project',
    'Developer-friendly API access with comprehensive documentation',
    'Notion MCP integration - Seamless workflow with your favorite tools',
    '24/7 dedicated customer support - We\'re here when you need us',
    'Regular updates and new features - Always stay ahead of the curve',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      content: 'AI Tools Hub has completely transformed my content creation workflow. The image generation quality is phenomenal, and the Notion integration means I can organize everything in one place. Game-changer!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Marketing Director',
      content: 'The combination of quality, speed, and fair pricing is unmatched. We\'ve generated hundreds of marketing assets, and the pay-as-you-go model saves us thousands compared to subscriptions. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      content: 'Perfect tool for rapid prototyping and creative exploration. The variety of AI models gives me so many options, and the Notion MCP integration fits perfectly into my existing workflow. Love it!',
      rating: 5,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background">
          <div className="container relative z-10 py-24 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Powered by Gemini AI</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                Create Amazing Content with{' '}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  AI Tools Hub
                </span>
              </h1>
              
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Professional AI-powered toolkit for creators, marketers, and businesses. Generate stunning images,
                engaging videos, and compelling content with cutting-edge AI technology. Integrated with Notion via
                MCP for seamless workflow management. Pay only for what you use - no subscriptions, no commitments.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </section>

        {/* Features Section */}
        <section className="container py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Tools at Your Fingertips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access a comprehensive suite of professional AI tools designed to supercharge your creative workflow.
              From visual content to written copy, we&apos;ve got everything you need.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className={`relative overflow-hidden p-6 hover:shadow-lg transition-shadow ${
                    feature.featured ? 'border-2 border-primary md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                  }`}
                >
                  {feature.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      New!
                    </div>
                  )}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{feature.price}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={feature.href}>
                        Try Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/50 py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose AI Tools Hub?</h2>
                <p className="text-muted-foreground mb-6">
                  We believe in empowering creators with the best AI technology, transparent pricing,
                  and seamless integrations. Here&apos;s what sets us apart:
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-4">
                  <Card className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">Advanced infrastructure delivers results in seconds. No waiting, no delays - just instant creativity.</p>
                  </Card>
                  <Card className="p-6">
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Secure & Private</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade encryption ensures your data stays private and protected at all times.</p>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="p-6">
                    <Workflow className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Notion MCP Integration</h3>
                    <p className="text-sm text-muted-foreground">Direct integration with Notion via MCP protocol. Organize AI content seamlessly in your workspace.</p>
                  </Card>
                  <Card className="p-6">
                    <Sparkles className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Latest AI Models</h3>
                    <p className="text-sm text-muted-foreground">Powered by Gemini, GPT-4, and other state-of-the-art models. Always up-to-date with AI advancements.</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loved by Creators Worldwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied creators, marketers, and businesses who trust AI Tools Hub
              for their content generation needs. Here&apos;s what they have to say:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Creative Workflow?</h2>
            <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of creators, marketers, and businesses using AI Tools Hub to generate
              amazing content. Start for free today - no credit card required, no commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth/register">
                  Start Creating for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/pricing">
                  View Pricing Plans
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
