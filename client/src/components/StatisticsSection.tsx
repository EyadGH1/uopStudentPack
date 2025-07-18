import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Users, Brain, Download, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const StatisticsSection = () => {
  const [counters, setCounters] = useState({
    materials: 0,
    testBanks: 0,
    computerizedTests: 0,
    faculty: 0,
    downloads: 0,
    activeUsers: 0,
    successRate: 0,
    averageGPA: 0
  });

  const finalCounts = {
    materials: 542,
    testBanks: 186,
    computerizedTests: 94,
    faculty: 52,
    downloads: 12847,
    activeUsers: 2156,
    successRate: 94,
    averageGPA: 3.42
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    const incrementStep = Object.keys(finalCounts).reduce((acc, key) => {
      acc[key] = finalCounts[key] / steps;
      return acc;
    }, {} as Record<string, number>);

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep >= steps) {
        setCounters(finalCounts);
        clearInterval(timer);
        return;
      }

      setCounters(prev => {
        const newCounters = { ...prev };
        Object.keys(finalCounts).forEach((key) => {
          newCounters[key as keyof typeof finalCounts] = Math.min(
            Math.floor(incrementStep[key] * currentStep),
            finalCounts[key as keyof typeof finalCounts]
          );
        });
        return newCounters;
      });

      currentStep++;
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statistics = [
    {
      title: 'المواد الدراسية',
      value: counters.materials,
      suffix: '+',
      icon: BookOpen,
      color: 'primary',
      description: 'مادة وملاحظات دراسية'
    },
    {
      title: 'بنوك الأسئلة',
      value: counters.testBanks,
      suffix: '+',
      icon: FileText,
      color: 'secondary',
      description: 'مجموعة أسئلة شاملة'
    },
    {
      title: 'الاختبارات المحوسبة',
      value: counters.computerizedTests,
      suffix: '+',
      icon: CheckCircle,
      color: 'accent',
      description: 'اختبار تفاعلي'
    },
    {
      title: 'أعضاء هيئة التدريس',
      value: counters.faculty,
      suffix: '+',
      icon: Users,
      color: 'primary',
      description: 'دكتور ومحاضر'
    },
    {
      title: 'عدد التحميلات',
      value: counters.downloads,
      suffix: '+',
      icon: Download,
      color: 'secondary',
      description: 'تحميل للمواد التعليمية'
    },
    {
      title: 'المستخدمون النشطون',
      value: counters.activeUsers,
      suffix: '+',
      icon: Brain,
      color: 'accent',
      description: 'طالب يستخدم المنصة'
    },
    {
      title: 'معدل النجاح',
      value: counters.successRate,
      suffix: '%',
      icon: TrendingUp,
      color: 'primary',
      description: 'نسبة نجاح الطلاب'
    },
    {
      title: 'المعدل التراكمي',
      value: counters.averageGPA,
      suffix: '',
      icon: Clock,
      color: 'secondary',
      description: 'متوسط المعدل العام',
      isDecimal: true
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'accent':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section id="statistics" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-secondary bg-clip-text text-transparent">إحصائياتنا</span> المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            أرقام تعكس التزامنا بتقديم أفضل الخدمات التعليمية وثقة الطلاب في منصتنا
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div
              key={stat.title}
              className="p-6 bg-card rounded-2xl border shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-foreground counter-animate">
                  {stat.isDecimal ? stat.value.toFixed(2) : stat.value.toLocaleString()}
                </span>
                <span className="text-2xl font-bold text-muted-foreground ml-1">
                  {stat.suffix}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">نمو مستمر</h3>
            <p className="text-muted-foreground">زيادة 15% في عدد المستخدمين هذا العام</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">جودة عالية</h3>
            <p className="text-muted-foreground">محتوى معتمد من أعضاء هيئة التدريس</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">ذكاء اصطناعي</h3>
            <p className="text-muted-foreground">خوارزميات متطورة لاقتراح المواد</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;