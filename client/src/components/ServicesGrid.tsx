import React from 'react';
import { Calculator, BookOpen, TreePine, Mail, Brain, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
  const services = [
    {
      id: 'gpa-calculator',
      title: 'حاسبة المعدل التراكمي',
      description: 'احسب معدلك الفصلي والتراكمي بسهولة مع إمكانية التصور البياني للدرجات',
      icon: Calculator,
      color: 'primary',
      features: ['حساب المعدل الفصلي', 'المعدل التراكمي', 'التصور البياني', 'التنبؤ بالدرجات']
    },
    {
      id: 'materials-center',
      title: 'مركز المواد الدراسية',
      description: 'مكتبة شاملة تضم الملاحظات والكتب وبنوك الأسئلة والاختبارات المحوسبة',
      icon: BookOpen,
      color: 'secondary',
      features: ['ملاحظات الطلاب', 'الكتب المرجعية', 'بنوك الأسئلة', 'اختبارات محوسبة']
    },
    {
      id: 'study-plans',
      title: 'الخطط الدراسية',
      description: 'خطط دراسية تفاعلية بهيكل شجري لجميع تخصصات تقنية المعلومات',
      icon: TreePine,
      color: 'accent',
      features: ['هيكل شجري تفاعلي', 'جميع التخصصات', 'متطلبات المواد', 'تحميل مباشر']
    },
    {
      id: 'faculty-directory',
      title: 'دليل أعضاء هيئة التدريس',
      description: 'دليل شامل لجميع معلومات التواصل مع أعضاء هيئة التدريس مع إمكانية البحث',
      icon: Mail,
      color: 'primary',
      features: ['معلومات التواصل', 'البحث المتقدم', 'ساعات المكتب', 'التخصصات']
    },
    {
      id: 'ai-assistant',
      title: 'المساعد الذكي للمواد',
      description: 'مساعد ذكي يقترح عليك المواد المناسبة للفصل القادم بناءً على سجلك الأكاديمي',
      icon: Brain,
      color: 'gradient',
      features: ['اقتراحات ذكية', 'تحليل السجل الأكاديمي', 'التخطيط المستقبلي', 'تحسين الأداء']
    },
    {
      id: 'statistics',
      title: 'لوحة الإحصائيات',
      description: 'عدادات ديناميكية تعرض إحصائيات شاملة للمواد والاختبارات والملفات المتاحة',
      icon: BarChart3,
      color: 'secondary',
      features: ['إحصائيات حية', 'رسوم بيانية', 'تتبع التقدم', 'تقارير شاملة']
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40';
      case 'secondary':
        return 'from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40';
      case 'accent':
        return 'from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40';
      case 'gradient':
        return 'from-primary/10 via-secondary/10 to-accent/10 border-primary/20 hover:border-primary/40';
      default:
        return 'from-muted/50 to-muted/20 border-border hover:border-primary/40';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      case 'gradient':
        return 'text-primary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">خدماتنا</span> الأكاديمية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة شاملة من الأدوات والخدمات التعليمية المصممة خصيصاً لدعم رحلتك الأكاديمية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card p-6 rounded-2xl border bg-gradient-to-br ${getColorClasses(service.color)} shadow-custom hover:shadow-lg transition-all duration-300 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-card/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${getIconColor(service.color)}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Button 
                variant="outline" 
                className="w-full group/btn bg-card/50 hover:bg-card border-border hover:border-primary/40 transition-all"
              >
                الوصول للخدمة
                <ArrowRight className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="shadow-glow">
            استكشف جميع الخدمات
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;