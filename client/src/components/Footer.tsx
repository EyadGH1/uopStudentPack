import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'حاسبة المعدل', href: '#gpa-calculator' },
    { title: 'مركز المواد', href: '#materials' },
    { title: 'الخطط الدراسية', href: '#study-plans' },
    { title: 'دليل الأساتذة', href: '#faculty' }
  ];

  const supportLinks = [
    { title: 'المساعدة', href: '#help' },
    { title: 'الأسئلة الشائعة', href: '#faq' },
    { title: 'تواصل معنا', href: '#contact' },
    { title: 'الشروط والأحكام', href: '#terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                UOP
              </div>
              <span className="font-bold text-2xl text-foreground">Student Bag</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              منصة تعليمية شاملة مصممة خصيصاً لطلاب جامعةالبترا. 
              نسعى لتسهيل رحلتك الأكاديمية من خلال أدوات ذكية ومحتوى عالي الجودة.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span>support@upostudentbag.edu.jo</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span dir="ltr">+962 798133869</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span>جامعة البترا، عمان، الأردن</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-6">الخدمات</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-6">الدعم</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-right mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} UPO Student Bag. جميع الحقوق محفوظة.
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start">
              صُنع بـ <Heart className="w-4 h-4 text-red-500 mx-1" /> لطلاب تقنية المعلومات
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground mr-4">تابعنا:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;