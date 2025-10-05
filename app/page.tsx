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
  MessageSquare,
  GraduationCap,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Teaching Assistant',
      titleZh: 'AI 教学助手',
      titleTh: 'ผู้ช่วยสอน AI',
      titleMs: 'Pembantu Pengajaran AI',
      description: 'Powered by Gemini AI to help teachers prepare lessons, answer student questions, and provide personalized learning guidance.',
      descriptionZh: '由 Gemini AI 驱动，帮助教师备课、解答学生疑问、提供个性化学习指导。',
      descriptionTh: 'ขับเคลื่อนด้วย Gemini AI เพื่อช่วยครูเตรียมบทเรียน ตอบคำถามนักเรียน และให้คำแนะนำการเรียนรู้ที่เป็นส่วนตัว',
      descriptionMs: 'Dikuasakan oleh Gemini AI untuk membantu guru menyediakan pelajaran, menjawab soalan pelajar, dan memberikan bimbingan pembelajaran yang diperibadikan.',
      price: 'Free trial credits',
      priceZh: '免费试用额度',
      priceTh: 'เครดิตทดลองฟรี',
      priceMs: 'Kredit percubaan percuma',
      href: '/tools/chat',
      featured: true,
    },
    {
      icon: FileText,
      title: 'Lesson Plan Generator',
      titleZh: '教案生成器',
      titleTh: 'เครื่องมือสร้างแผนบทเรียน',
      titleMs: 'Penjana Rancangan Pelajaran',
      description: 'Automatically generate comprehensive lesson plans and teaching materials. Save hours of preparation time.',
      descriptionZh: '自动生成完整的教案和教学材料。节省数小时备课时间。',
      descriptionTh: 'สร้างแผนบทเรียนและสื่อการสอนที่ครอบคลุมโดยอัตโนมัติ ประหยัดเวลาการเตรียมการหลายชั่วโมง',
      descriptionMs: 'Menjana rancangan pelajaran dan bahan pengajaran yang komprehensif secara automatik. Jimat masa persediaan berjam-jam.',
      price: 'Pay as you go',
      priceZh: '按使用量付费',
      priceTh: 'จ่ายตามการใช้งาน',
      priceMs: 'Bayar mengikut penggunaan',
      href: '/tools/lesson',
    },
    {
      icon: BookOpen,
      title: 'Quiz & Assessment Creator',
      titleZh: '测验评估生成器',
      titleTh: 'เครื่องมือสร้างแบบทดสอบและการประเมิน',
      titleMs: 'Pencipta Kuiz & Penilaian',
      description: 'Create customized quizzes and assessments with AI. Generate questions based on learning objectives.',
      descriptionZh: '使用 AI 创建定制化的测验和评估。根据学习目标生成题目。',
      descriptionTh: 'สร้างแบบทดสอบและการประเมินที่กำหนดเองด้วย AI สร้างคำถามตามวัตถุประสงค์การเรียนรู้',
      descriptionMs: 'Cipta kuiz dan penilaian tersuai dengan AI. Jana soalan berdasarkan objektif pembelajaran.',
      price: 'Included in plans',
      priceZh: '包含在套餐中',
      priceTh: 'รวมในแผน',
      priceMs: 'Termasuk dalam pelan',
      href: '/tools/assessment',
    },
    {
      icon: Image,
      title: 'Educational Visual Creator',
      titleZh: '教育视觉素材生成器',
      titleTh: 'เครื่องมือสร้างภาพการศึกษา',
      titleMs: 'Pencipta Visual Pendidikan',
      description: 'Generate educational diagrams and illustrations to enhance student understanding.',
      descriptionZh: '生成教育图表和插图，增强学生理解。',
      descriptionTh: 'สร้างแผนภูมิและภาพประกอบทางการศึกษาเพื่อเพิ่มความเข้าใจของนักเรียน',
      descriptionMs: 'Jana diagram dan ilustrasi pendidikan untuk meningkatkan pemahaman pelajar.',
      price: 'Pay as you go',
      priceZh: '按使用量付费',
      priceTh: 'จ่ายตามการใช้งาน',
      priceMs: 'Bayar mengikut penggunaan',
      href: '/tools/image',
    },
    {
      icon: Video,
      title: 'Video Lecture Assistant',
      titleZh: '视频课程助手',
      titleTh: 'ผู้ช่วยวิดีโอการบรรยาย',
      titleMs: 'Pembantu Kuliah Video',
      description: 'Transform lesson content into engaging video lectures for blended learning.',
      descriptionZh: '将课程内容转化为引人入胜的视频讲座，支持混合式学习。',
      descriptionTh: 'แปลงเนื้อหาบทเรียนเป็นวิดีโอการบรรยายที่น่าสนใจสำหรับการเรียนรู้แบบผสมผสาน',
      descriptionMs: 'Tukar kandungan pelajaran kepada kuliah video yang menarik untuk pembelajaran campuran.',
      price: 'Pay as you go',
      priceZh: '按使用量付费',
      priceTh: 'จ่ายตามการใช้งาน',
      priceMs: 'Bayar mengikut penggunaan',
      href: '/tools/video',
    },
  ];

  const benefits = [
    {
      en: 'Free trial credits included - Start exploring all features with complimentary usage credits',
      zh: '包含免费试用额度 - 使用免费额度开始探索所有功能'
    },
    {
      en: 'Powered by Google Gemini AI - Advanced language models optimized for education',
      zh: '由 Google Gemini AI 驱动 - 为教育场景优化的先进语言模型'
    },
    {
      en: 'Teacher-focused tools - Save time on lesson prep, grading, and administrative tasks',
      zh: '以教师为中心的工具 - 节省备课、评分和行政任务的时间'
    },
    {
      en: 'Student learning enhancement - AI-powered personalized learning and intelligent tutoring',
      zh: '增强学生学习 - AI 驱动的个性化学习和智能辅导'
    },
    {
      en: 'Curriculum alignment - Content aligned with curriculum standards automatically',
      zh: '课程对齐 - 自动生成符合课程标准的内容'
    },
    {
      en: 'Multi-language support - Create educational content in multiple languages',
      zh: '多语言支持 - 创建多语言教育内容'
    },
    {
      en: 'Usage analytics - Track AI usage and student engagement with detailed analytics',
      zh: '使用分析 - 通过详细分析跟踪 AI 使用和学生参与度'
    },
    {
      en: 'Institution support - Special plans for schools and training centers',
      zh: '机构支持 - 为学校和培训中心提供特殊计划'
    },
  ];

  const testimonials = [
    {
      name: 'Ms. Wang Li',
      nameZh: '王丽老师',
      role: 'High School Teacher',
      roleZh: '高中教师',
      content: 'This AI teaching assistant has revolutionized my lesson planning. What used to take 3 hours now takes 30 minutes.',
      contentZh: '这个 AI 教学助手彻底改变了我的备课方式。以前需要 3 小时的工作现在只需 30 分钟。',
      rating: 5,
    },
    {
      name: 'David Chen',
      nameZh: '陈大卫',
      role: 'Training Center Director',
      roleZh: '培训中心主任',
      content: 'Teachers love the assessment creator, and students benefit from personalized learning paths.',
      contentZh: '老师们喜欢评估生成器，学生们从个性化学习路径中受益。',
      rating: 5,
    },
    {
      name: 'Prof. Zhang Ming',
      nameZh: '张明教授',
      role: 'University Professor',
      roleZh: '大学教授',
      content: 'Impressed by how well the AI understands pedagogical principles and creates appropriate content.',
      contentZh: '对 AI 理解教学原理和创建适当内容的能力印象深刻。',
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
                <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Powered by Google Gemini AI | 由 Google Gemini AI 驱动</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-center">
                <span className="block">AI-Powered Education Platform</span>
                <span className="block text-2xl md:text-4xl mt-2 text-muted-foreground">AI 赋能教育培训平台</span>
                <span className="block text-lg md:text-2xl mt-1 text-muted-foreground/80 italic">แพลตฟอร์มการศึกษา AI • Platform Pendidikan AI</span>
                <span className="block mt-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  OECE
                </span>
              </h1>
              
              <p className="mb-2 text-base text-muted-foreground md:text-lg text-center mx-auto max-w-3xl">
                使用智能 AI 工具为教育工作者赋能。简化备课流程、创建引人入胜的评估、提升学生学习成果。从免费试用额度开始。
              </p>
              <p className="mb-2 text-sm text-muted-foreground/80 md:text-base text-center mx-auto max-w-3xl italic">
                Empowering educators with intelligent AI tools. Streamline lesson planning, create engaging assessments, and enhance student learning outcomes.
              </p>
              <p className="mb-8 text-xs text-muted-foreground/70 md:text-sm text-center mx-auto max-w-3xl italic">
                เสริมพลังนักการศึกษาด้วยเครื่องมือ AI อัจฉริยะ • Memperkasakan pendidik dengan alat AI pintar.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth/register">
                    免费开始试用 Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">查看定价 View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </section>

        {/* Tools Preview Section */}
        <section className="container py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">35+ AI工具助力教育</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从教学到营销，从内容创作到数据分析，一站式AI工具解决方案
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-8">
            <Link href="/tools#teaching" className="group">
              <Card className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 mb-4 mx-auto group-hover:bg-blue-100 transition-colors">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">AI教学工具</h3>
                <p className="text-sm text-muted-foreground">6个工具</p>
              </Card>
            </Link>

            <Link href="/tools#content" className="group">
              <Card className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 mb-4 mx-auto group-hover:bg-purple-100 transition-colors">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">内容工厂</h3>
                <p className="text-sm text-muted-foreground">6个工具</p>
              </Card>
            </Link>

            <Link href="/tools#seo" className="group">
              <Card className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">SEO优化</h3>
                <p className="text-sm text-muted-foreground">6个工具</p>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/tools">
                查看所有工具 View All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Comprehensive AI Teaching Tools</h2>
            <h3 className="text-2xl font-bold mb-2 text-muted-foreground">全面的 AI 教学工具</h3>
            <p className="text-lg font-semibold mb-4 text-muted-foreground/80 italic">เครื่องมือสอน AI ที่ครอบคลุม • Alat Pengajaran AI Komprehensif</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2 text-center">
              获取专为教育工作者和培训专业人士设计的专业 AI 工具。
            </p>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-sm text-center italic">
              Access specialized AI tools designed specifically for educators and training professionals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
                      新功能 New
                    </div>
                  )}
                  <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="mb-1 text-lg font-semibold text-center">{feature.title}</h3>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground text-center">{feature.titleZh}</h4>
                  <p className="mb-1 text-xs text-muted-foreground/70 text-center italic">{feature.titleTh}</p>
                  <p className="mb-3 text-xs text-muted-foreground/70 text-center italic">{feature.titleMs}</p>
                  <p className="mb-2 text-xs text-muted-foreground text-center">{feature.descriptionZh}</p>
                  <p className="mb-4 text-xs text-muted-foreground/60 text-center italic">{feature.descriptionTh || feature.descriptionMs}</p>
                  
                  <div className="flex flex-col items-center gap-2 mt-auto">
                    <div className="text-center">
                      <span className="text-sm font-medium text-primary block">{feature.priceZh}</span>
                      <span className="text-xs text-muted-foreground">{feature.price}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link href={feature.href}>
                        立即试用 Try Now
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Why Choose EduAI Hub?</h2>
                <h3 className="text-2xl font-bold mb-2 text-muted-foreground">为什么选择 EduAI Hub？</h3>
                <p className="text-lg font-semibold mb-6 text-muted-foreground/80 italic">ทำไมต้องเลือก EduAI Hub? • Mengapa Pilih EduAI Hub?</p>
                <p className="text-muted-foreground mb-2 text-center max-w-2xl mx-auto">
                  用先进的 AI 技术和专为教育设计的工具来赋能教育工作者。
                </p>
                <p className="text-muted-foreground/80 mb-6 text-sm text-center max-w-2xl mx-auto italic">
                  Empowering educators with advanced AI technology and tools designed specifically for education.
                </p>
              </div>
              
              <ul className="space-y-4 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex flex-col text-center max-w-2xl">
                      <span className="text-muted-foreground">{benefit.zh}</span>
                      <span className="text-muted-foreground/70 text-sm mt-1">{benefit.en}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-12 max-w-5xl mx-auto">
                <Card className="p-6 text-center">
                  <Zap className="h-10 w-10 text-primary mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">快速高效 Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">秒级生成教学内容，节省大量备课时间。Generate content in seconds.</p>
                </Card>
                <Card className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">安全可靠 Secure & Private</h3>
                  <p className="text-sm text-muted-foreground">企业级加密保护，确保数据安全。Enterprise-grade encryption.</p>
                </Card>
                <Card className="p-6 text-center">
                  <Sparkles className="h-10 w-10 text-primary mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">智能优化 AI-Optimized</h3>
                  <p className="text-sm text-muted-foreground">专为教育场景优化的 AI 模型。Optimized for education.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Trusted by Educators Worldwide</h2>
            <h3 className="text-2xl font-bold mb-2 text-muted-foreground">深受全球教育工作者信赖</h3>
            <p className="text-lg font-semibold mb-4 text-muted-foreground/80 italic">ไว้วางใจจากนักการศึกษาทั่วโลก • Dipercayai oleh Pendidik Seluruh Dunia</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2 text-center">
              加入数千名信任 EduAI Hub 的教师和培训专业人士。
            </p>
            <p className="text-muted-foreground/80 max-w-2xl mx-auto text-sm text-center italic">
              Join thousands of teachers and training professionals who trust EduAI Hub.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-3 text-muted-foreground italic text-sm text-center">&quot;{testimonial.contentZh}&quot;</p>
                <p className="mb-4 text-muted-foreground/70 italic text-xs border-t pt-3 text-center">&quot;{testimonial.content}&quot;</p>
                <div className="text-center">
                  <p className="font-semibold">{testimonial.nameZh} {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.roleZh} / {testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-2">准备好改变您的教学方式了吗？</h2>
            <h3 className="text-2xl font-bold mb-2 opacity-90">Ready to Transform Your Teaching?</h3>
            <p className="text-xl font-semibold mb-4 opacity-85 italic">พร้อมเปลี่ยนวิธีสอนของคุณแล้วหรือยัง? • Bersedia Mengubah Pengajaran Anda?</p>
            <p className="mb-2 text-lg opacity-90 max-w-2xl mx-auto text-center">
              加入数千名使用 EduAI Hub 提升教学和学生参与度的教育工作者。从免费试用额度开始 - 无需信用卡即可开始。
            </p>
            <p className="mb-8 text-base opacity-85 max-w-2xl mx-auto text-center italic">
              Join thousands of educators using EduAI Hub. Start with free trial credits - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth/register">
                  <span className="flex items-center">
                    免费开始 Start Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/pricing">
                  查看定价 View Pricing
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
