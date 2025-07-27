import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const PythonAiPage = () => {
  const handleRunAi = async () => {
    try {
      const response = await fetch('/run-ai', { method: 'POST' });
      const result = await response.json();
      alert(`AI Result: ${result.output}`);
    } catch (error) {
      alert('حدث خطأ أثناء تشغيل الذكاء الاصطناعي');
    }
  };

  return (
    <div className="relative min-h-screen bg-background py-10 px-4 flex items-center justify-center overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-${12 + (i % 4) * 2} h-${12 + (i % 4) * 2} rounded-full animate-[float_6s_ease-in-out_infinite]`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `hsla(${i * 35}, 65%, 85%, 0.1)`,
            animationDelay: `${(i % 6) * 400}ms`
          }}
        ></div>
      ))}

      <div className="w-full max-w-xl z-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-foreground">صفحة الذكاء الاصطناعي</h1>
        <Card className="p-6 flex flex-col items-center gap-4">
          <p className="text-foreground text-lg">انقر لتشغيل الذكاء الاصطناعي المكتوب بلغة بايثون:</p>
          <Button size="lg" variant="hero" onClick={handleRunAi}>
            تشغيل الذكاء الاصطناعي
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PythonAiPage;
