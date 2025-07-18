import streamlit as st
from schedule_bot import generate_schedule

st.set_page_config(page_title="مساعد الجدول الذكي", page_icon="📘", layout="centered")

st.title("📘 مساعد الذكاء الاصطناعي لبناء جدول دراسي")
st.markdown("ادخل بياناتك ليقترح عليك الجدول الأمثل بناءً على خطتك الدراسية.")

completed = st.text_input("✔️ المواد التي أنجزتها (مثلاً: CS101, MATH101)").upper().replace(" ", "").split(",")
target_hours = st.slider("🎯 عدد الساعات المستهدفة", 1, 18, 6)
difficulty = st.selectbox("⚙️ درجة الصعوبة المفضلة", ["سهل", "متوسط", "صعب"])
semester = st.radio("📆 نوع الفصل", ["صيفي", "عادي"])

if st.button("🔍 اقتراح الجدول"):
    with st.spinner("جاري تحليل بياناتك باستخدام الذكاء الاصطناعي..."):
        result = generate_schedule(completed, target_hours, difficulty, semester)
        st.success("✅ الجدول المقترح:")
        st.markdown(result)