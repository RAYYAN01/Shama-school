
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#fffdf2] animate-in fade-in duration-700">
      {/* Friendly Header */}
      <section className="py-24 text-center space-y-6 bg-white rounded-b-[5rem] shadow-sm overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <img src="logo.png" className="w-[40rem] mx-auto mt-[-10rem] rotate-12" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="w-32 h-32 mx-auto mb-10 bg-white rounded-full p-1 shadow-2xl border border-yellow-50 animate-float">
            <img src="/images/logo-1.png" className="w-full h-full object-contain" alt="SVS Full Emblem" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3e3a8f] mb-4">Our Legacy of Love</h1>
          <div className="w-24 h-1.5 bg-[#009640] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-stone-600 font-medium leading-relaxed italic">
            "55 years of nurturing hearts and minds in the heart of Bengaluru."
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl font-serif font-bold text-[#3e3a8f] flex items-center">
              <span className="w-12 h-1 bg-yellow-400 mr-4 rounded-full"></span>
              Our Journey Since 1968
            </h2>
            <div className="space-y-6 text-lg text-stone-600 font-medium leading-relaxed">
              <p>
                Founded by visionaries who believed in the power of quality, affordable education, Shama Vidya Shalaa has been a cornerstone of the Okalipuram community for over five decades.
              </p>
              <p>
                Our journey began with a small group of students and a big dream to provide a sanctuary where children could grow with dignity and wisdom. Today, we stand proud as an institution that has nurtured thousands of successful individuals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-8 bg-white rounded-[2.5rem] border border-yellow-100 text-center shadow-sm">
                <div className="text-4xl font-bold text-[#009640]">55+</div>
                <div className="text-xs font-black uppercase tracking-widest text-stone-400 mt-2">Years of Excellence</div>
              </div>
              <div className="p-8 bg-white rounded-[2.5rem] border border-yellow-100 text-center shadow-sm">
                <div className="text-4xl font-bold text-[#3e3a8f]">10k+</div>
                <div className="text-xs font-black uppercase tracking-widest text-stone-400 mt-2">Success Stories</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white hover:rotate-2 transition-transform duration-700">
              <img src="/images/building-1.avif" alt="Legacy" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white rounded-[5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3e3a8f]">Our Guiding Lights</h2>
            <p className="text-stone-500 max-w-2xl mx-auto font-medium">Meet the hearts and minds who laid the foundation of Shama Vidya Shalaa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Shama Parveen",
                role: "Founding Trustee",
                bio: "A visionary who dedicated her life to making education accessible to every child in the community.",
                img: "/images/person-1.webp"
              },
              {
                name: "Mr. Wasim",
                role: "Academic Director",
                bio: "Leading our academic excellence with a focus on modern pedagogy rooted in traditional values.",
                img: "/images/logo-1.png"
              }
            ].map((founder, idx) => (
              <div key={idx} className="calm-card p-10 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all duration-500 hover:shadow-xl">
                <div className="w-40 h-40 shrink-0 rounded-[2.5rem] overflow-hidden border-4 border-yellow-50 shadow-md group-hover:scale-105 transition-transform duration-500 bg-stone-50">
                  <img src={founder.img} alt={founder.name} className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#3e3a8f]">{founder.name}</h3>
                    <p className="text-[#009640] font-black text-[10px] uppercase tracking-[0.2em]">{founder.role}</p>
                  </div>
                  <p className="text-stone-500 leading-relaxed font-medium italic text-sm">
                    "{founder.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-32 bg-[#3e3a8f] text-white text-center rounded-t-[5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10">
          <i className="fa-solid fa-quote-left text-6xl text-yellow-400/20"></i>
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic leading-snug">
            "Knowledge is not just facts, but the power to understand life with a kind heart."
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-indigo-200 uppercase tracking-[0.3em] font-black text-xs">Our Core Philosophy</p>
        </div>
      </section>
    </div>
  );
};

export default About;
