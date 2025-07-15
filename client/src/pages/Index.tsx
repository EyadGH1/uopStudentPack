import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import StatisticsSection from '@/components/StatisticsSection';
import AIAssistantSection from '@/components/AIAssistantSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <StatisticsSection />
        <AIAssistantSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
