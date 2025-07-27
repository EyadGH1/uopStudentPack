import React, { useState } from 'react';
import { Brain, Sparkles, ArrowRight, MessageSquare, BookOpenCheck, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAssistantSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: 'اقتراح المواد المثلى',
      description: 'بيقترح مواد فصلك الجاي من سجلك الاكاديمي ',
      icon: Brain,
      color: 'accent'
    },
  ];

  const features = [
    'اقتراحات مخصصة للمواد',
    'تحليل صعوبة المواد',
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'secondary':
        return 'text-secondary bg-secondary/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="gradient-primary p-3 rounded-2xl mr-4">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">المساعد الذكي</span> للمواد
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تقنية الذكاء الاصطناعي المتطورة تساعدك في اختيار أفضل المواد لفصلك القادم
            <br />
            وتخطط مسيرتك الأكاديمية بذكاء وكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-top">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">كيف يعمل المساعد الذكي؟</h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    currentStep === index
                      ? 'bg-card shadow-lg border-primary/40 scale-105'
                      : 'bg-card/50 border-border hover:border-primary/20'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(step.color)}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Features & Demo */}
          <div>
            {/* AI Chat Interface Mockup */}
            <div className="bg-card border rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="gradient-primary p-2 rounded-lg">
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">المساعد الذكي</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-success">متصل</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg border-r-4 border-primary">
                  <p className="text-sm text-foreground">
                    بناءً على تحليل سجلك الأكاديمي، أنصحك بتسجيل هذه المواد للفصل القادم:
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">هندسة البرمجيات</span>
                    <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">سهل</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">قواعد البيانات المتقدمة</span>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">متوسط</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">التعلم الآلي</span>
                    <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">صعب</span>
                  </div>
                </div>
                
                <Button variant="default" size="sm" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  ابدأ المحادثة
                </Button>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-6 border">
              <h4 className="text-lg font-semibold text-foreground mb-4">مميزات المساعد الذكي</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="shadow-glow">
            جرب المساعد الذكي الآن
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            مجاني لجميع طلاب كلية الملك عبدالله الثاني لتقنية المعلومات
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;