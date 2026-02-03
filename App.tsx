
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import AIChatbot from './components/AIChatbot';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle scroll to top on page change
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Handle initial load with hash
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  useEffect(() => {
    // Intercept clicks on internal hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.origin === window.location.origin && link.pathname === window.location.pathname) {
        const id = link.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return null;
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-40 right-6 w-12 h-12 bg-white text-[#3e3a8f] rounded-full shadow-2xl border border-yellow-100 flex items-center justify-center transition-all duration-500 z-40 hover:scale-110 active:scale-95 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      title="Back to Top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollHandler />
      <div className="flex flex-col min-h-screen selection:bg-yellow-200 selection:text-[#3e3a8f]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AIChatbot />
        <BackToTop />
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919480450512" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 group"
          title="Chat with us on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
          <span className="absolute right-16 bg-white text-stone-800 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-yellow-100 pointer-events-none translate-x-2 group-hover:translate-x-0">
            WhatsApp Help Desk
          </span>
        </a>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
