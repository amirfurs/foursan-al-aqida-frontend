import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * شريط الترويس الثابت في أعلى الصفحة. يعرض اسم الموقع وروابط التصفح الرئيسية
 * بالإضافة إلى زر تغيير الوضع الليلي/النهاري.
 */
function Navbar({ dark, setDark }) {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md transition-colors ${isActive ? 'text-accent' : 'text-light hover:text-accent'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-secondary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <Link to="/" className="text-xl font-bold text-accent ml-6">
          فرسان العقيدة
        </Link>
        <ul className="flex-grow flex justify-end space-x-4 space-x-reverse mr-6">
          {/* الروابط الرئيسية */}
          <li>
            <NavLink to="/" className={linkClasses} end>
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink to="/section/aqidah" className={linkClasses}>
              العقيدة
            </NavLink>
          </li>
          <li>
            <NavLink to="/section/fiqh" className={linkClasses}>
              الفقه
            </NavLink>
          </li>
          <li>
            <NavLink to="/section/hadith" className={linkClasses}>
              الحديث
            </NavLink>
          </li>
        </ul>
        {/* زر الوضع الليلي */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-md border border-secondary text-light hover:text-accent hover:border-accent"
          aria-label="تبديل الوضع الليلي"
        >
          {dark ? (
            <i className="fa-solid fa-sun" aria-hidden="true"></i>
          ) : (
            <i className="fa-solid fa-moon" aria-hidden="true"></i>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
