
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    pathname === path
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="bg-white shadow px-4 py-3 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          AudifyAI
        </Link>
        <div className="space-x-6">
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
