import google.generativeai as genai

# إعداد Gemini API (ضع مفتاحك هنا)
genai.configure(api_key="AIzaSyA0vfDdnbQCQ1-79dg0TbUrEfS5khmqXzM")
model = genai.GenerativeModel("models/gemini-1.5-pro")

# الخطة الدراسية (يمكن تحميلها من قاعدة بيانات لاحقاً)
COURSE_PLAN = [
    {"code": "CS101", "name": "مقدمة حوسبة", "hours": 3, "difficulty": "سهل", "prereqs": [], "opens": ["CS201", "IS201"]},
    {"code": "MATH101", "name": "رياضيات", "hours": 3, "difficulty": "متوسط", "prereqs": [], "opens": []},
    {"code": "CS201", "name": "هياكل بيانات", "hours": 3, "difficulty": "متوسط", "prereqs": ["CS101"], "opens": ["CS301"]},
    {"code": "CS301", "name": "نظم تشغيل", "hours": 3, "difficulty": "صعب", "prereqs": ["CS201"], "opens": []},
    {"code": "IS201", "name": "تحليل نظم", "hours": 3, "difficulty": "سهل", "prereqs": ["CS101"], "opens": []}
]

# تحويل الخطة إلى نص مفهومة لـ Gemini
def format_courses(course_list):
    result = ""
    for c in course_list:
        prereqs = ', '.join(c['prereqs']) if c['prereqs'] else 'لا شيء'
        opens = ', '.join(c['opens']) if c['opens'] else 'لا شيء'
        result += f"{c['code']}, {c['name']}, {c['hours']} ساعات, صعوبة: {c['difficulty']}, المتطلبات: {prereqs}, تفتح: {opens}\n"
    return result

def generate_schedule(completed, target_hours, difficulty, semester):
    max_hours = 10 if semester == "صيفي" else 18
    if target_hours > max_hours:
        return f"⚠️ لا يمكنك تسجيل أكثر من {max_hours} ساعات في الفصل {semester}"

    course_text = format_courses(COURSE_PLAN)
    prompt = f"""
أنت مساعد ذكي تساعد الطالب في اختيار أفضل جدول دراسي حسب الخطة الدراسية.

✅ الخطة الدراسية:
{course_text}

🔸 المواد التي أنجزها الطالب: {', '.join(completed)}
🔸 عدد الساعات المطلوبة: {target_hours}
🔸 نوع الفصل: {semester}
🔸 الصعوبة المفضلة: {difficulty}

يرجى ترشيح أفضل جدول ممكن يتوافق مع المعطيات، مع ذكر سبب اختيار كل مادة بشكل مختصر.
لا تقترح مواد لا تتوفر شروطها.
    """

    response = model.generate_content(prompt)
    return response.text.strip()