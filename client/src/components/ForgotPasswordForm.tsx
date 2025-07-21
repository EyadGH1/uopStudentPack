import React, { useState, FC, FormEvent } from 'react';

type ForgotPasswordFormProps = {
  onBackToLogin: () => void;
};

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: handle forgot password logic
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-custom max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">استعادة كلمة المرور</h2>

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

      <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-smooth font-bold">
        إرسال رابط الاستعادة
      </button>

      <div className="flex justify-center mt-4 text-sm">
        <button type="button" className="text-primary hover:underline" onClick={onBackToLogin}>
          العودة لتسجيل الدخول
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
