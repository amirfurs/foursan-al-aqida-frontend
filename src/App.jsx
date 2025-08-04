import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ArticlePage from './pages/Article.jsx';
import SectionPage from './pages/Section.jsx';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import ProfilePage from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * المكون الرئيسي للتطبيق. يدير حالة الوضع الليلي ويعرّف مسارات التصفح.
 */
function App() {
  // نتأكد من قراءة الوضع الليلي من localStorage لضمان استمرارية الاختيار عبر زيارات المستخدم.
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dark') === 'true';
    }
    return false;
  });

  // عند تغيّر حالة الوضع الليلي نضيف/نزيل الكلاس المناسب على عنصر html.
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('dark', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('dark', 'false');
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      {/* نضيف هامش علوي لتعويض عن الشريط الثابت */}
      <main className="pt-24 pb-10 min-h-screen bg-primary dark:bg-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/section/:id" element={<SectionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;