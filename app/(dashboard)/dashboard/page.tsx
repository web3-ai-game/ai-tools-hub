'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowUp,
  ArrowDown,
  Image,
  Video,
  FileText,
  TrendingUp,
  DollarSign,
  Activity,
  CreditCard,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Credits',
      value: '$25.50',
      change: '+$10.00',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Images Generated',
      value: '147',
      change: '+23',
      changeType: 'positive',
      icon: Image,
    },
    {
      title: 'Videos Created',
      value: '32',
      change: '+5',
      changeType: 'positive',
      icon: Video,
    },
    {
      title: 'Content Written',
      value: '89',
      change: '+12',
      changeType: 'positive',
      icon: FileText,
    },
  ];

  const recentGenerations = [
    {
      id: 1,
      type: 'image',
      title: 'Sunset landscape with mountains',
      cost: 0.5,
      date: '2 hours ago',
    },
    {
      id: 2,
      type: 'content',
      title: 'Blog post about AI technology',
      cost: 1.2,
      date: '5 hours ago',
    },
    {
      id: 3,
      type: 'video',
      title: 'Product demo animation',
      cost: 2.0,
      date: '1 day ago',
    },
    {
      id: 4,
      type: 'image',
      title: 'Abstract art composition',
      cost: 0.5,
      date: '2 days ago',
    },
  ];

  const quickActions = [
    {
      title: 'Generate Image',
      description: 'Create AI-powered images',
      icon: Image,
      href: '/dashboard/tools/image',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Create Video',
      description: 'Generate videos from text',
      icon: Video,
      href: '/dashboard/tools/video',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Write Content',
      description: 'AI content assistant',
      icon: FileText,
      href: '/dashboard/tools/content',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Add Credits',
      description: 'Top up your balance',
      icon: CreditCard,
      href: '/dashboard/billing',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here's an overview of your AI Tools Hub activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={`inline-flex items-center ${
                      stat.changeType === 'positive'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.changeType === 'positive' ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </span>{' '}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div
                      className={`mb-3 rounded-lg p-3 ${action.bgColor}`}
                    >
                      <Icon className={`h-6 w-6 ${action.color}`} />
                    </div>
                    <h4 className="font-semibold">{action.title}</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity and Usage Chart */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Generations</CardTitle>
            <CardDescription>
              Your latest AI-generated content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGenerations.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.type === 'image' && (
                        <Image className="h-5 w-5 text-primary" />
                      )}
                      {item.type === 'video' && (
                        <Video className="h-5 w-5 text-primary" />
                      )}
                      {item.type === 'content' && (
                        <FileText className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">${item.cost}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/dashboard/history">View All History</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Usage Overview</CardTitle>
            <CardDescription>
              Your credit usage this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Images</span>
                  <span className="text-sm text-muted-foreground">
                    $73.50
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '45%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Videos</span>
                  <span className="text-sm text-muted-foreground">
                    $64.00
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500"
                    style={{ width: '35%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Content</span>
                  <span className="text-sm text-muted-foreground">
                    $17.80
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: '20%' }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Spent</span>
                <span className="text-2xl font-bold">$155.30</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="text-green-600">↑ 12%</span> from last month
              </p>
            </div>

            <Button className="w-full mt-4" asChild>
              <Link href="/dashboard/analytics">
                <Activity className="mr-2 h-4 w-4" />
                View Analytics
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
