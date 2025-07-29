import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const linkClass = (path) =>
    pathname === path
      ? 'text-primary font-semibold'
      : 'text-gray-700 dark:text-gray-300 hover:text-primary transition duration-300';

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg px-4 py-3 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-green-300"
        >
          Audify
        </Link>

        <div className="space-x-6 flex items-center">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/main" className={linkClass('/main')}>
            Convert
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            About
          </Link>

         
        </div>
      </div>
    </nav>
  );
}
