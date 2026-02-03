
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#009640] via-[#f59e0b] to-[#3e3a8f]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-2xl p-1 shadow-md">
                <img src="/images/logo-1.png" alt="SVS Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold tracking-tight">SHAMA VIDYA Shalaa</h3>
                <p className="text-xs text-yellow-500 font-bold uppercase tracking-widest">Since 1968</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-medium italic">
              "Nurturing generations with wisdom, laughter, and care in the heart of Bengaluru."
            </p>
            <div className="flex space-x-3">
              {[
                { icon: 'fa-facebook-f', color: '#1877F2', link: '#' },
                { icon: 'fa-whatsapp', color: '#25D366', link: 'https://wa.me/919480450512' },
                { icon: 'fa-youtube', color: '#FF0000', link: 'https://www.youtube.com/@ShamaVidyaShalaa' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold mb-10 text-stone-500 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-stone-300 text-sm font-semibold">
              <li><Link to="/#top" className="hover:text-yellow-400 transition-colors">Home Landing</Link></li>
              <li><Link to="/#pillars" className="hover:text-yellow-400 transition-colors">Our Pillars</Link></li>
              <li><Link to="/#campus" className="hover:text-yellow-400 transition-colors">Campus Tour</Link></li>
              <li><Link to="/academics" className="hover:text-yellow-400 transition-colors">Academic Life</Link></li>
              <li><Link to="/feedback" className="hover:text-yellow-400 transition-colors">Parent Feedback</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-bold mb-10 text-stone-500 uppercase tracking-widest">Learning Levels</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-medium">
              <li>Montessori Nursery</li>
              <li>Primary School (Grades 1-5)</li>
              <li>Middle School (Grades 6-8)</li>
              <li>High School (Grades 9-10)</li>
              <li>Creative Arts & Yoga</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold mb-10 text-stone-500 uppercase tracking-widest">Visit Us</h4>
            <ul className="space-y-6 text-stone-400 text-sm font-medium">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-4 text-yellow-500"></i>
                <span>37/7, 2nd Cross Rd, 1st Stage, Okalipuram, Bengaluru, KA 560021</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-4 text-emerald-500"></i>
                <span>+91 94804 50512</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-clock mr-4 text-indigo-400"></i>
                <span>Mon-Sat: 8:30 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-stone-600 text-[10px] tracking-[0.25em] uppercase font-bold">
          <p>© {new Date().getFullYear()} Shama Vidya Shalaa. Rooted in Bengaluru.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
