import React, { useState } from 'react';
import Footer  from "@/components/Footer";
import Header from "@/components/Header"

const FGpaPage: React.FC = () => {
  const [pastData, setPastData] = useState([
    { semester: 1, gpa: 3.2 },
    { semester: 2, gpa: 3.5 },
    { semester: 3, gpa: 3.7 },
  ]);
  const [futureHours, setFutureHours] = useState(30);
  const [completedHours, setCompletedHours] = useState(90);
  const [showResult, setShowResult] = useState(false);

  const handleUpdate = (index: number, field: 'semester' | 'gpa', value: number) => {
    const updated = [...pastData];
    updated[index][field] = value;
    setPastData(updated);
  };

  const addSemester = () => {
    setPastData([...pastData, { semester: pastData.length + 1, gpa: 0 }]);
  };

  const linearRegression = (): number => {
    const n = pastData.length;
    const sumX = pastData.reduce((acc, d) => acc + d.semester, 0);
    const sumY = pastData.reduce((acc, d) => acc + d.gpa, 0);
    const sumXY = pastData.reduce((acc, d) => acc + d.semester * d.gpa, 0);
    const sumX2 = pastData.reduce((acc, d) => acc + d.semester ** 2, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
    const intercept = (sumY - slope * sumX) / n;
    const nextSemester = pastData[pastData.length - 1].semester + 1;

    return parseFloat((slope * nextSemester + intercept).toFixed(2));
  };

  const currentGPA = (): number => {
    const total = pastData.reduce((sum, d) => sum + d.gpa, 0);
    return parseFloat((total / pastData.length).toFixed(2));
  };

  const expectedCumulativeGPA = (): number => {
    const current = currentGPA();
    const predicted = linearRegression();
    const totalPoints = current * completedHours + predicted * futureHours;
    const totalHours = completedHours + futureHours;
    return totalHours === 0 ? 0 : parseFloat((totalPoints / totalHours).toFixed(2));
  };

  return (
    <>
    <Header />
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full float-animation"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-accent/10 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-3xl px-6 py-10 bg-card/60 backdrop-blur-lg rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-4 text-foreground">📈 توقع معدلك الجامعي</h1>
        <p className="text-center text-muted-foreground mb-6">
          استند على أدائك السابق لتقدير معدلك التراكمي القادم باستخدام الانحدار الخطي
        </p>

        {/* Past GPA Inputs */}
        <div className="space-y-2 mb-4">
          <p className="font-medium">بيانات المعدلات السابقة:</p>
          {pastData.map((entry, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="number"
                className="w-1/2 p-2 rounded border"
                value={entry.semester}
                onChange={(e) => handleUpdate(idx, 'semester', parseInt(e.target.value))}
                placeholder="الفصل"
              />
              <input
                type="number"
                step="0.01"
                max={4}
                className="w-1/2 p-2 rounded border"
                value={entry.gpa}
                onChange={(e) => handleUpdate(idx, 'gpa', parseFloat(e.target.value))}
                placeholder="المعدل"
              />
            </div>
          ))}
          <button
            onClick={addSemester}
            className="text-sm text-primary hover:underline mt-1"
          >
            + أضف فصل جديد
          </button>
        </div>

        {/* Hours */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">الساعات المكتملة</label>
            <input
              type="number"
              className="w-full p-2 rounded border"
              value={completedHours}
              onChange={(e) => setCompletedHours(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">الساعات المتبقية</label>
            <input
              type="number"
              className="w-full p-2 rounded border"
              value={futureHours}
              onChange={(e) => setFutureHours(parseInt(e.target.value))}
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowResult(true)}
            className="px-6 py-3 text-white font-semibold rounded-xl bg-blue-600 shadow-md relative overflow-hidden hover:shadow-blue-500 transition"
          >
            <span className="z-10 relative">احسب</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
          </button>
        </div>

        {/* Results */}
        {showResult && (
          <div className="bg-muted/30 p-4 rounded-xl text-center space-y-2">
            <div>
              📊 <span className="font-semibold">توقع المعدل القادم:</span>{' '}
              <span className="text-primary font-bold">{linearRegression()}</span>
            </div>
            <div>
              🎓 <span className="font-semibold">المعدل التراكمي المتوقع:</span>{' '}
              <span className="text-secondary font-bold">{expectedCumulativeGPA()}</span>
            </div>
          </div>
        )}
      </div>

      {/* Shine Animation Style */}
      <style>
        {`
          .animate-shine {
            background-size: 200% 100%;
            animation: shine 2.5s linear infinite;
            opacity: 0.5;
            pointer-events: none;
          }

          @keyframes shine {
            0% { background-position: -100% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </section>
    <Footer />
    </>
  );
};

export default FGpaPage;
