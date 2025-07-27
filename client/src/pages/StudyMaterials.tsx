import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MaterialCard from '@/components/MaterialCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { studyMaterials } from '@/data/mockData';
import MaterialFilters from '@/components/MaterialFilters';

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const courses = [...new Set(studyMaterials.map((item) => item.course))];
  const types = [...new Set(studyMaterials.map((item) => item.type))];

  const filteredMaterials = useMemo(() => {
    return studyMaterials.filter((material) => {
      const matchesSearch =
        material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCourse = !selectedCourse || material.course === selectedCourse;
      const matchesType = !selectedType || material.type === selectedType;

      return matchesSearch && matchesCourse && matchesType;
    });
  }, [searchTerm, selectedCourse, selectedType]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCourse('');
    setSelectedType('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f2f7fa] via-[#e6edf5] to-[#f9fafe] dark:from-background dark:via-muted/20 dark:to-primary/5">
      {/* Soft abstract background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#c3e5f7] opacity-30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#ffd6e8] opacity-20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-[10%] w-[300px] h-[300px] bg-[#e4d6ff] opacity-30 rounded-full blur-[100px]"></div>
      </div>

      {/* Animated floating shapes */}
      <div className="absolute top-16 left-12 w-16 h-16 bg-primary/10 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-16 w-24 h-24 bg-secondary/10 rounded-full animate-[float_7s_ease-in-out_infinite] delay-1500"></div>
      <div className="absolute bottom-24 left-24 w-20 h-20 bg-accent/10 rounded-full animate-[float_8s_ease-in-out_infinite] delay-3000"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-muted/10 rounded-full animate-[float_10s_ease-in-out_infinite] delay-2000"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-primary/10 rounded-full animate-[float_9s_ease-in-out_infinite] delay-1000"></div>
      <div className="absolute bottom-1/2 right-0 w-24 h-24 bg-secondary/10 rounded-full animate-[float_5s_ease-in-out_infinite] delay-2500"></div>


      <Header />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 hero-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">المواد الدراسية</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اكتشف وحمل المواد الدراسية لجميع التخصصات بسهولة ووضوح
            </p>
          </div>

          {/* Filters */}
          <MaterialFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCourse={selectedCourse}
            onCourseChange={setSelectedCourse}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            courses={courses}
            types={types}
            onClear={clearFilters}
            filteredCount={filteredMaterials.length}
            totalCount={studyMaterials.length}
          />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hero-fade-in mt-10" style={{ animationDelay: '0.3s' }}>
            {filteredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="text-center py-12 hero-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-24 h-24 mx-auto mb-4 bg-muted/30 rounded-full flex items-center justify-center backdrop-blur">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-muted-foreground mb-4">
                لم نجد أي مواد تطابق معايير البحث الخاصة بك
              </p>
              <Button onClick={clearFilters} variant="outline" className="bg-card/50 backdrop-blur">
                مسح الفلاتر والبحث مرة أخرى
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
