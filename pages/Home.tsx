
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-0 animate-in fade-in duration-1000">
      {/* Friendly Hero */}
      <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-[#fefce8]">
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-yellow-200/30 to-transparent pointer-events-none rounded-l-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-full text-[#009640] font-black text-[10px] uppercase tracking-[0.3em] shadow-sm animate-in slide-in-from-left duration-700">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                Welcome to Shama Vidya Shalaa
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#3e3a8f] leading-[1.1] animate-in slide-in-from-bottom duration-700 delay-100">
                Nurturing <span className="text-[#009640] relative inline-block">Happiness<div className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-200 -z-10 rotate-1"></div></span> & Wisdom.
              </h1>
              <p className="text-2xl text-stone-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-0 animate-in fade-in fill-mode-forwards duration-1000 delay-300">
                A sanctuary for discovery in Bengaluru where every child finds their unique path to brilliance since 1968.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-6 opacity-0 animate-in slide-in-from-bottom fill-mode-forwards duration-700 delay-500">
                <Link to="/admissions" className="btn-friendly bg-[#3e3a8f] text-white py-5 px-12 text-xl shadow-2xl hover:shadow-[#3e3a8f]/40 hover:-translate-y-1 active:scale-95 transition-all">
                  Start Enrollment
                </Link>
                <Link to="/about" className="btn-friendly bg-white border-2 border-yellow-100 text-stone-700 py-5 px-12 text-xl hover:bg-yellow-50 hover:border-yellow-200 transition-all">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="relative z-10 animate-float">
                <div className="rounded-[5rem] overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src="building-1.avif" 
                    alt="School Entrance" 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-12 -left-12 z-20 bg-white p-6 rounded-[3rem] shadow-2xl border border-yellow-50 text-center w-52 hover:-rotate-6 transition-transform duration-500">
                <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-full p-1 shadow-inner border border-stone-50">
                  <img src="logo-1.png" className="w-full h-full object-contain" alt="SVS Emblem" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#3e3a8f]">1968</div>
                <div className="text-[10px] font-black text-[#009640] uppercase tracking-widest opacity-80">Legacy of Care</div>
              </div>
              {/* Background Accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#009640]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Earthy Stats */}
      <section id="stats" className="py-24 bg-white rounded-t-[5rem] -mt-16 relative z-20 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { val: '55+', label: 'Years of Love', color: '#3e3a8f' },
              { val: '100%', label: 'Joyful Success', color: '#009640' },
              { val: '30+', label: 'Creative Clubs', color: '#f59e0b' },
              { val: '10k+', label: 'Proud Alumni', color: '#3e3a8f' }
            ].map((stat, i) => (
              <div key={i} className="space-y-3 group hover:-translate-y-1 transition-transform">
                <div style={{ color: stat.color }} className="text-5xl md:text-6xl font-serif font-bold tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-stone-400 text-xs uppercase tracking-[0.25em] font-black group-hover:text-stone-600 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Pillars Section */}
      <section id="pillars" className="py-32 bg-[#fffdf2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#3e3a8f]">The Foundation of Joy</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-xl font-medium">A sanctuary for learning built on three fundamental pillars of growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Kind Hearts', 
                icon: 'fa-heart', 
                color: '#ef4444', 
                bg: 'bg-red-50',
                desc: 'We prioritize emotional intelligence and empathy as the core of our community life.' 
              },
              { 
                title: 'Sharp Minds', 
                icon: 'fa-lightbulb', 
                color: '#f59e0b', 
                bg: 'bg-amber-50',
                desc: 'A curriculum that sparks curiosity and transforms questions into powerful insights.' 
              },
              { 
                title: 'Strong Spirit', 
                icon: 'fa-seedling', 
                color: '#10b981', 
                bg: 'bg-emerald-50',
                desc: 'Rooted in timeless culture, our students grow with a profound sense of purpose.' 
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-12 text-center space-y-8 rounded-[4rem] border border-stone-100 hover:shadow-2xl transition-all duration-700 bg-white group hover:-translate-y-4`}>
                <div className={`w-24 h-24 mx-auto rounded-[2.5rem] flex items-center justify-center text-4xl text-white shadow-xl transition-all duration-500 group-hover:rotate-12`} style={{ backgroundColor: item.color }}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-stone-800">{item.title}</h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smooth Campus Preview */}
      <section id="campus" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6 p-4 bg-yellow-50 rounded-[5rem]">
                <div className="overflow-hidden rounded-3xl h-48 sm:h-56">
                  <img src="class-1.jpg" alt="Study" className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110 cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-3xl h-48 sm:h-56">
                  <img src="class-2.jpeg" alt="Lab" className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110 cursor-pointer" />
                </div>
                <div className="overflow-hidden rounded-3xl h-48 sm:h-56">
                  <img src="class-3.avif" alt="Students" className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110 cursor-pointer" />
                </div>
                 <div className="overflow-hidden rounded-3xl h-48 sm:h-56">
                  <img src="class-4.avif" alt="Students" className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-5xl font-serif font-bold text-[#3e3a8f] leading-tight">A Sanctuary of <br/><span className="text-[#009640]">Inspiration.</span></h2>
              <p className="text-stone-600 text-xl leading-relaxed font-medium italic">
                Our campus in Okalipuram is more than just classrooms. It's a space filled with the warm glow of discovery and shared laughter.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Expert Staff', 'Safe Environment', 'Sports & Yoga', 'Community First'].map((f, i) => (
                  <div key={i} className="flex items-center space-x-4 p-5 bg-stone-50 rounded-3xl hover:bg-yellow-100 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#009640] shadow-sm">
                      <i className="fa-solid fa-check text-xs"></i>
                    </div>
                    <span className="font-bold text-stone-700">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center text-xl text-[#3e3a8f] font-bold group border-b-4 border-yellow-200 hover:border-yellow-400 transition-all pb-2">
                Schedule a Visit <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-3 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#fefce8] relative overflow-hidden rounded-t-[6rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-100 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#3e3a8f]">Begin a Beautiful Chapter.</h2>
          <p className="text-2xl text-stone-600 font-medium max-w-2xl mx-auto">Admissions for the 2026-27 session are open. We invite you to join our family.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/admissions" className="btn-friendly bg-[#009640] text-white px-16 py-6 text-2xl shadow-2xl shadow-emerald-200 hover:scale-105 active:scale-95 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/919480450512" target="_blank" className="btn-friendly bg-white text-[#25D366] border-2 border-green-50 px-16 py-6 text-2xl shadow-xl hover:shadow-green-100 hover:bg-green-50 transition-all">
              <i className="fa-brands fa-whatsapp mr-3"></i> Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
