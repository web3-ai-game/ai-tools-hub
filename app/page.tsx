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
  Globe,
  ArrowRight,
  Check,
  Star,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning images from text descriptions using advanced AI',
      price: '$0.50 per image',
      href: '/tools/image',
    },
    {
      icon: Video,
      title: 'Video Generation',
      description: 'Generate engaging videos from simple text prompts',
      price: '$2.00 per 30s',
      href: '/tools/video',
    },
    {
      icon: FileText,
      title: 'Content Writing',
      description: 'AI-powered writing assistant for all your content needs',
      price: '$0.20 per 100 words',
      href: '/tools/content',
    },
  ];

  const benefits = [
    'No subscription required - pay as you go',
    'State-of-the-art AI models',
    'Fast generation times',
    'Commercial usage rights',
    'API access available',
    '24/7 customer support',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      content: 'AI Tools Hub has transformed my content creation workflow. The image generation is incredible!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Marketing Director',
      content: 'The quality and speed of content generation is unmatched. Highly recommend for any business.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      content: 'Perfect for rapid prototyping and getting inspiration. The pay-as-you-go model is fantastic.',
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
                Professional AI tools for image generation, video creation, and content writing. 
                Pay only for what you use - no subscriptions required.
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
            <p className="text-muted-foreground">Choose from our suite of professional AI tools</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="relative overflow-hidden p-6 hover:shadow-lg transition-shadow">
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
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
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
                    <p className="text-sm text-muted-foreground">Generate content in seconds, not hours</p>
                  </Card>
                  <Card className="p-6">
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Secure & Private</h3>
                    <p className="text-sm text-muted-foreground">Your data is encrypted and never shared</p>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="p-6">
                    <Globe className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Global Access</h3>
                    <p className="text-sm text-muted-foreground">Available worldwide, 24/7</p>
                  </Card>
                  <Card className="p-6">
                    <Sparkles className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Latest AI Models</h3>
                    <p className="text-sm text-muted-foreground">Powered by cutting-edge technology</p>
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
            <p className="text-muted-foreground">See what our users are saying</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground italic">"{testimonial.content}"</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of creators using AI Tools Hub to transform their content
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/register">
                Start Creating for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
