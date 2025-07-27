export interface StudyMaterial {
  id: number;
  title: string;
  course: string;
  type: string;
  description: string;
  driveLink: string;
  uploadDate: string;
  tags: string[];
}

export const studyMaterials: StudyMaterial[] = [
  {
    id: 1,
    title: "مقدمة في البرمجة - محاضرة 1",
    course: "علوم الحاسوب",
    type: "محاضرة",
    description: "مقدمة أساسية في مفاهيم البرمجة والخوارزميات",
    driveLink: "https://drive.google.com/file/d/1example1/view",
    uploadDate: "2024-09-15",
    tags: ["برمجة", "خوارزميات", "أساسيات"]
  },
  {
    id: 2,
    title: "الرياضيات المتقدمة - تمارين الوحدة الثانية",
    course: "الرياضيات",
    type: "تمارين",
    description: "تمارين شاملة على التفاضل والتكامل",
    driveLink: "https://drive.google.com/file/d/1example2/view",
    uploadDate: "2024-09-20",
    tags: ["رياضيات", "تفاضل", "تكامل"]
  },
  {
    id: 3,
    title: "الفيزياء العامة - ملخص الفصل الثالث",
    course: "الفيزياء",
    type: "ملخص",
    description: "ملخص شامل لقوانين الحركة والطاقة",
    driveLink: "https://drive.google.com/file/d/1example3/view",
    uploadDate: "2024-10-01",
    tags: ["فيزياء", "حركة", "طاقة"]
  },
  {
    id: 4,
    title: "الكيمياء العضوية - امتحان نصفي",
    course: "الكيمياء",
    type: "امتحان",
    description: "امتحان نصفي شامل للكيمياء العضوية",
    driveLink: "https://drive.google.com/file/d/1example4/view",
    uploadDate: "2024-10-10",
    tags: ["كيمياء", "عضوية", "امتحان"]
  },
  {
    id: 5,
    title: "قواعد البيانات - مشروع عملي",
    course: "علوم الحاسوب",
    type: "مشروع",
    description: "مشروع عملي لتصميم وتطوير قاعدة بيانات",
    driveLink: "https://drive.google.com/file/d/1example5/view",
    uploadDate: "2024-10-15",
    tags: ["قواعد بيانات", "مشروع", "تطوير"]
  },
  {
    id: 6,
    title: "الأدب العربي - تحليل نصوص",
    course: "اللغة العربية",
    type: "تحليل",
    description: "تحليل مفصل لنصوص من الأدب العربي الكلاسيكي",
    driveLink: "https://drive.google.com/file/d/1example6/view",
    uploadDate: "2024-09-25",
    tags: ["أدب", "تحليل", "نصوص"]
  },
  {
    id: 7,
    title: "الإحصاء التطبيقي - محاضرة 5",
    course: "الإحصاء",
    type: "محاضرة",
    description: "تطبيقات الإحصاء في البحث العلمي",
    driveLink: "https://drive.google.com/file/d/1example7/view",
    uploadDate: "2024-10-05",
    tags: ["إحصاء", "تطبيقي", "بحث"]
  },
  {
    id: 8,
    title: "التاريخ الإسلامي - بحث تخرج",
    course: "التاريخ",
    type: "بحث",
    description: "بحث شامل عن الحضارة الإسلامية في الأندلس",
    driveLink: "https://drive.google.com/file/d/1example8/view",
    uploadDate: "2024-10-20",
    tags: ["تاريخ", "إسلامي", "أندلس"]
  },
  {
    id: 9,
    title: "الاقتصاد الجزئي - حلول التمارين",
    course: "الاقتصاد",
    type: "حلول",
    description: "حلول مفصلة لتمارين الاقتصاد الجزئي",
    driveLink: "https://drive.google.com/file/d/1example9/view",
    uploadDate: "2024-09-30",
    tags: ["اقتصاد", "جزئي", "حلول"]
  },
  {
    id: 10,
    title: "علم النفس التربوي - دراسة حالة",
    course: "علم النفس",
    type: "دراسة حالة",
    description: "دراسة حالة شاملة في علم النفس التربوي",
    driveLink: "https://drive.google.com/file/d/1example10/view",
    uploadDate: "2024-10-12",
    tags: ["علم نفس", "تربوي", "دراسة حالة"]
  },
  {
    id: 11,
    title: "الهندسة المدنية - تصميم الجسور",
    course: "الهندسة المدنية",
    type: "مشروع",
    description: "مشروع تصميم جسر معلق باستخدام برامج الهندسة",
    driveLink: "https://drive.google.com/file/d/1example11/view",
    uploadDate: "2024-10-18",
    tags: ["هندسة", "جسور", "تصميم"]
  },
  {
    id: 12,
    title: "الطب الباطني - ملفات سريرية",
    course: "الطب",
    type: "ملفات سريرية",
    description: "مجموعة من الحالات السريرية في الطب الباطني",
    driveLink: "https://drive.google.com/file/d/1example12/view",
    uploadDate: "2024-10-22",
    tags: ["طب", "باطني", "سريري"]
  }
];
