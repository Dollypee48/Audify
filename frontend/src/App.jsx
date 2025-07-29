import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Convert from './pages/Convert';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Convert />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}