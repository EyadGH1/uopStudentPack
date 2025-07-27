import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, BookOpen, Calendar, FileText } from 'lucide-react';

export interface Material {
  id: string | number;
  type: string;
  uploadDate: string;
  title: string;
  description: string;
  tags: string[];
  driveLink: string;
}

interface ColorfulMaterialCardProps {
  material: Material;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'محاضرة':
      return <BookOpen className="w-4 h-4" />;
    case 'تمارين':
    case 'حلول':
      return <FileText className="w-4 h-4" />;
    case 'امتحان':
      return <Calendar className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

// Softer gradient palette
const getGradient = (type: string) => {
  switch (type) {
    case 'محاضرة':
      return 'from-blue-100 via-purple-100 to-pink-100';
    case 'تمارين':
      return 'from-green-100 via-teal-100 to-blue-100';
    case 'امتحان':
      return 'from-red-100 via-orange-100 to-yellow-100';
    case 'مشروع':
      return 'from-purple-100 via-indigo-100 to-pink-100';
    case 'ملخص':
      return 'from-yellow-100 via-amber-100 to-lime-100';
    default:
      return 'from-zinc-100 via-gray-100 to-neutral-100';
  }
};

const ColorfulMaterialCard: React.FC<ColorfulMaterialCardProps> = ({ material }) => {
  return (
    <div
      onClick={() => window.open(material.driveLink, '_blank')}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105`}
      style={{ minHeight: '200px' }}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getGradient(
          material.type
        )} rounded-2xl transition-all duration-300`}
      ></div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none rounded-2xl"></div>

      {/* Subtle texture pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.1)_0%,transparent_70%)] mix-blend-overlay pointer-events-none"></div>

      {/* Card content */}
      <div className="relative z-10 p-6 flex flex-col justify-center items-center h-full text-center">
        {/* Title center by default */}
        <h2 className="text-xl font-semibold text-white drop-shadow transition-all duration-300 group-hover:mb-6">
          {material.title}
        </h2>

        {/* Slide-up content */}
        <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out text-sm text-white/90 w-full mt-4">
          <div className="flex justify-between items-center mb-2">
            <Badge className="bg-white/20 text-white flex gap-1 px-2 py-1 rounded-full text-xs">
              {getTypeIcon(material.type)} {material.type}
            </Badge>
            <span>{material.uploadDate}</span>
          </div>

          <p className="text-white/80 text-sm mb-2">{material.description}</p>

          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {material.tags.map((tag) => (
              <Badge
                key={tag}
                className="text-xs bg-white/20 text-white/90 rounded-md px-2"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-xs italic text-white/80">اضغط لفتح المادة</p>
        </div>
      </div>
    </div>
  );
};

export default ColorfulMaterialCard;
