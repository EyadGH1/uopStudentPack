import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import SignUpForm from '@/components/SignUpForm';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

const LogIn = () => {
  const [view, setView] = useState('login'); 

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-0"> 
        {view === 'login' && (
          <LoginForm
            onForgot={() => setView('forgot')}
            onSignUp={() => setView('signup')}
          />
        )}
        {view === 'signup' && (
          <SignUpForm onBackToLogin={() => setView('login')} />
        )}
        {view === 'forgot' && (
          <ForgotPasswordForm onBackToLogin={() => setView('login')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LogIn;