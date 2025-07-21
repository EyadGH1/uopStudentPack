import React from 'react';
import { ArrowRight, BookOpen, Calculator, Users, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-education.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Educational Technology" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 gradient-hero opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full float-animation"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-accent/10 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="hero-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent">UOP Student Bag</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">رفيقك الأكاديمي الذكي</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="hero-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة تعليمية لطللاب جامعة البترا
              <br />
              احسب معدلك، اكتشف مواد الدراسة، واحصل على اقتراحات ذكية لمسيرتك الأكاديمية
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              ابدأ رحلتك الأكاديمية
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur">
              استكشف الخدمات
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="hero-fade-in grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-4 bg-card/30 backdrop-blur rounded-xl border shadow-sm">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground counter-animate">300+</div>
              <div className="text-sm text-muted-foreground">مادة دراسية</div>
            </div>
            <div className="text-center p-4 bg-card/30 backdrop-blur rounded-xl border shadow-sm">
              <Calculator className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground counter-animate">GPA</div>
              <div className="text-sm text-muted-foreground">حاسبة المعدل</div>
            </div>
            <div className="text-center p-4 bg-card/30 backdrop-blur rounded-xl border shadow-sm">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground counter-animate">AI</div>
              <div className="text-sm text-muted-foreground">مساعد ذكي</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;