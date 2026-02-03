
import React from 'react';

const Admissions: React.FC = () => {
  return (
    <div className="bg-[#fefce8] min-h-screen">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Form Side */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-5 py-2 bg-yellow-50 text-[#3e3a8f] border border-yellow-100 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Admissions Open for 2026-27</div>
              <h1 className="text-5xl font-serif font-bold text-[#3e3a8f]">Nurturing the Next Generation.</h1>
              <p className="text-xl text-stone-600 font-medium leading-relaxed">
                We invite you to join our legacy of excellence. At Shama Vidya Shalaa, we provide a holistic environment that balances academic rigor with creative exploration.
              </p>
            </div>

            <div className="calm-card p-10 bg-white">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Success! We'll contact you shortly regarding the admission process."); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-stone-400 uppercase tracking-widest ml-4">Child's Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Full Name" 
                      className="w-full px-8 py-5 rounded-[2rem] bg-stone-50 border border-transparent text-stone-700 font-bold placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3e3a8f]/5 focus:border-[#3e3a8f] transition-all duration-300" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-stone-400 uppercase tracking-widest ml-4">Parent's Phone</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91" 
                      className="w-full px-8 py-5 rounded-[2rem] bg-stone-50 border border-transparent text-stone-700 font-bold placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3e3a8f]/5 focus:border-[#3e3a8f] transition-all duration-300" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest ml-4">Applying For</label>
                  <div className="relative">
                    <select className="w-full px-8 py-5 rounded-[2rem] bg-stone-50 border border-transparent text-stone-700 font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3e3a8f]/5 focus:border-[#3e3a8f] transition-all duration-300 appearance-none">
                      <option>Nursery / Montessori</option>
                      <option>Primary School (Grade 1-5)</option>
                      <option>Middle School (6-8)</option>
                      <option>High School (9-10)</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"></i>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest ml-4">Additional Notes</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your child's interests or any specific requirements..." 
                    className="w-full px-8 py-5 rounded-[2rem] bg-stone-50 border border-transparent text-stone-700 font-bold placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3e3a8f]/5 focus:border-[#3e3a8f] transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-friendly bg-[#3e3a8f] text-white py-5 text-xl shadow-xl shadow-indigo-100 hover:bg-[#2d2a6a] hover:-translate-y-1 active:scale-95 transition-all">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* Process Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-[#3e3a8f] mb-12">The SVS Advantage</h2>
            <div className="space-y-12">
              {[
                { title: 'Holistic Development', icon: 'fa-child-reaching', color: '#009640', text: 'Focusing on physical, mental, and emotional growth through a balanced curriculum.' },
                { title: 'Personalized Attention', icon: 'fa-user-group', color: '#f59e0b', text: 'Small class sizes ensuring every student receives the care and guidance they deserve.' },
                { title: 'Rich Extra-Curriculars', icon: 'fa-palette', color: '#ef4444', text: 'From yoga and sports to arts and music, we nurture every unique talent.' },
                { title: 'Cultural Heritage', icon: 'fa-landmark', color: '#3e3a8f', text: 'Timeless values and moral education integrated into daily school life.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div style={{ backgroundColor: step.color }} className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <i className={`fa-solid ${step.icon}`}></i>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-stone-800">{step.title}</h3>
                    <p className="text-stone-500 font-medium leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-white border border-yellow-100 rounded-[2.5rem] shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 uppercase tracking-widest text-xs">Required Documents</h3>
              <div className="flex flex-wrap gap-3">
                {['Birth Certificate', 'Transfer Certificate', 'Previous Report Cards', 'Aadhar Card Copies', 'Passport Photos'].map((doc, i) => (
                  <span key={i} className="px-4 py-2 bg-yellow-50 rounded-full border border-yellow-100 text-xs font-bold text-[#3e3a8f]">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
