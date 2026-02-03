
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-16 h-16 p-0.5 bg-white rounded-full shadow-md border border-yellow-50 overflow-hidden ring-4 ring-transparent group-hover:ring-yellow-100 transition-all duration-500">
                <img 
                  src="logo-1.png" 
                  alt="Shama Vidya Shalaa Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#3e3a8f] tracking-tight leading-none mb-1">SHAMA VIDYA</span>
                <span className="text-[10px] font-black text-[#009640] uppercase tracking-[0.2em]">Knowledge is Power</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-stone-100/50 p-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'text-[#3e3a8f] bg-white shadow-sm scale-105' 
                    : 'text-stone-500 hover:text-[#3e3a8f] hover:bg-white/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/admissions"
              className="btn-friendly bg-[#009640] text-white hover:bg-[#007a33] shadow-xl shadow-emerald-100 hover:shadow-emerald-200 hover:-translate-y-0.5 transition-all"
            >
              Enquire
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-[#3e3a8f] active:scale-90 transition-transform border border-yellow-50"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out border-t border-yellow-50 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-colors ${
                isActive(link.path) ? 'bg-yellow-50 text-[#3e3a8f]' : 'text-stone-600 active:bg-stone-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admissions"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#3e3a8f] text-white py-5 rounded-2xl font-bold mt-6 shadow-xl active:scale-95 transition-transform"
          >
            Apply for 2026-27
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
