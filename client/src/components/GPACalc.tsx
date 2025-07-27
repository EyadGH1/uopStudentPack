import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';

const GpaCalculator = () => {
  const [courses, setCourses] = useState([
    { name: '', credit: '', grade: '' },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const gradeToPoint = (grade: string) => {
    const map: Record<string, number> = {
      'A': 4.0,
      'A-': 3.7,
      'B+': 3.3,
      'B': 3.0,
      'B-': 2.7,
      'C+': 2.3,
      'C': 2.0,
      'C-': 1.7,
      'D+': 1.3,
      'D': 1.0,
      'F': 0.0,
    };
    return map[grade.toUpperCase()] ?? 0;
  };

  const handleAddCourse = () => {
    setCourses([...courses, { name: '', credit: '', grade: '' }]);
  };

  const handleRemoveCourse = (index: number) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...courses];
    updated[index] = { ...updated[index], [field]: value };
    setCourses(updated);
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credit = parseFloat(course.credit);
      const point = gradeToPoint(course.grade);
      if (!isNaN(credit)) {
        totalPoints += credit * point;
        totalCredits += credit;
      }
    }

    const result = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setGpa(parseFloat(result.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">حاسبة المعدل التراكمي</h1>

        <div className="flex flex-col gap-4 mb-8">
          {courses.map((course, index) => (
            <Card key={index} className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
              <Input
                placeholder="اسم المادة"
                value={course.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
              />
              <Input
                type="number"
                placeholder="عدد الساعات"
                value={course.credit}
                onChange={(e) => handleChange(index, 'credit', e.target.value)}
              />
              <Input
                placeholder="العلامة (مثال: B+)"
                value={course.grade}
                onChange={(e) => handleChange(index, 'grade', e.target.value)}
              />
              <Button variant="destructive" onClick={() => handleRemoveCourse(index)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </Card>
          ))}

          <Button variant="outline" onClick={handleAddCourse} className="w-fit self-center">
            <Plus className="w-4 h-4 mr-2" /> إضافة مادة جديدة
          </Button>
        </div>

        <div className="text-center">
          <Button size="lg" variant="hero" onClick={calculateGpa}>
            احسب المعدل التراكمي
          </Button>

          {gpa !== null && (
            <div className="mt-6 text-xl text-foreground font-semibold">
              المعدل التراكمي: <span className="text-primary">{gpa}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GpaCalculator;