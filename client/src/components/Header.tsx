import React, { useState } from 'react';
import { Search, Menu, X, Globe, Moon, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setIsRTL(!isRTL);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-custom">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
              UOP
            </div>
            <span className="font-bold text-xl text-foreground">Student Bag</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">الرئيسية</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">الخدمات</a>
            <a href="#materials" className="text-foreground hover:text-primary transition-smooth font-medium">المواد</a>
            <a href="#ai-assistant" className="text-foreground hover:text-primary transition-smooth font-medium">المساعد الذكي</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">التواصل</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="البحث في المواد..."
                className="pl-10 pr-4 py-2 w-64 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hidden sm:flex"
            >
              <Globe className="w-4 h-4" />
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden sm:flex"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Login Button */}
            <Link to="/login">
            <Button variant="default" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 mr-1" />
              تسجيل الدخول
            </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-card">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="py-2 text-foreground hover:text-primary transition-smooth">الرئيسية</a>
              <a href="#services" className="py-2 text-foreground hover:text-primary transition-smooth">الخدمات</a>
              <a href="#materials" className="py-2 text-foreground hover:text-primary transition-smooth">المواد</a>
              <a href="#ai-assistant" className="py-2 text-foreground hover:text-primary transition-smooth">المساعد الذكي</a>
              <a href="#contact" className="py-2 text-foreground hover:text-primary transition-smooth">التواصل</a>
              <div className="pt-2 border-t">
                <Link to="/login" className="flex items-center justify-center space-x-2">
                <Button variant="default" size="sm" className="w-full">
                  <User className="w-4 h-4 mr-1" />
                  تسجيل الدخول
                </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;