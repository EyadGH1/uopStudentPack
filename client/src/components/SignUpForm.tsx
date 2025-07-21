import React, { useState, FC, FormEvent } from 'react';

type SignUpFormProps = {
  onBackToLogin: () => void;
};

const SignUpForm: FC<SignUpFormProps> = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: handle sign up logic
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-custom max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">إنشاء حساب جديد</h2>

      <div className="mb-4">
        <label className="block mb-1 text-muted-foreground">الاسم الكامل</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-muted-foreground">البريد الإلكتروني</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          dir="ltr"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-muted-foreground">كلمة المرور</label>
        <input
          type="password"
          className="w-full px-4 py-2 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-smooth font-bold">
        إنشاء حساب
      </button>

      <div className="flex justify-center mt-4 text-sm">
        <button type="button" className="text-primary hover:underline" onClick={onBackToLogin}>
          العودة لتسجيل الدخول
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
