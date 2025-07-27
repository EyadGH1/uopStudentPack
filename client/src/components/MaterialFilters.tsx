// src/components/MaterialFilters.tsx

import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';

interface MaterialFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCourse: string;
  onCourseChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  courses: string[];
  types: string[];
  onClear: () => void;
  filteredCount: number;
  totalCount: number;
}

const MaterialFilters: React.FC<MaterialFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCourse,
  onCourseChange,
  selectedType,
  onTypeChange,
  courses,
  types,
  onClear,
  filteredCount,
  totalCount
}) => {
  return (
    <div
      className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-border rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="ابحث في المواد الدراسية..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pr-12 pl-4 py-3 text-lg bg-white/20 dark:bg-black/20 rounded-xl"
        />
      </div>

      {/* Select Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Select value={selectedCourse} onValueChange={onCourseChange}>
          <SelectTrigger className="bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-xl">
            <SelectValue placeholder="اختر المادة" />
          </SelectTrigger>
          <SelectContent className="z-50">
            {courses.map((course) => (
              <SelectItem key={course} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-xl">
            <SelectValue placeholder="نوع المادة" />
          </SelectTrigger>
          <SelectContent className="z-50">
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear + Count */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={onClear} className="flex items-center gap-2 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-xl">
          <Filter className="w-4 h-4" />
          مسح الفلاتر
        </Button>
        <span className="text-sm text-muted-foreground">
          {filteredCount} من أصل {totalCount} مادة
        </span>
      </div>
    </div>
  );
};

export default MaterialFilters;
