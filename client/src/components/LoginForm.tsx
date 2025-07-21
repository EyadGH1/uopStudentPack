import React, { useState, FC, FormEvent } from 'react';

type LoginFormProps = {
  onForgot: () => void;
  onSignUp: () => void;
};

const LoginForm: FC<LoginFormProps> = ({ onForgot, onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: handle login logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card p-10 rounded-lg shadow-custom max-w-md mx-auto my-10 space-y-6 "
    >
      <h2 className="text-3xl font-extrabold text-center text-foreground">تسجيل الدخول</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-muted-foreground">البريد الإلكتروني</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            dir="ltr"
          />
        </div>

        <div>
          <label className="block mb-1 text-muted-foreground">كلمة المرور</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all"
      >
        دخول
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 text-sm text-center">
        <button type="button" className="text-primary hover:underline" onClick={onForgot}>
          نسيت كلمة المرور؟
        </button>
        <button type="button" className="text-primary hover:underline" onClick={onSignUp}>
          إنشاء حساب جديد
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
