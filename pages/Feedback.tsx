
import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Testimonials array is now empty by default
  const [testimonials, setTestimonials] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, we would push to the state here, but for now we just show success
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#fffdf2] min-h-screen animate-in fade-in duration-1000">
      {/* Header */}
      <section className="py-24 bg-white border-b border-yellow-50 rounded-b-[5rem] shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none rotate-12">
          <i className="fa-solid fa-comment-dots text-[25rem]"></i>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-5 py-2 bg-yellow-100 text-[#3e3a8f] rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">Our Community Voice</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3e3a8f] mb-8 leading-tight">The SVS Wall of Love</h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Every story matters. Share your experiences and help us grow our family.
          </p>
        </div>
      </section>

      {/* Testimonials Grid or Empty State */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="calm-card p-10 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 group">
                <div className="space-y-6">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <i key={idx} className={`fa-solid fa-star text-sm ${idx < t.rating ? 'opacity-100' : 'opacity-20'}`}></i>
                    ))}
                  </div>
                  <p className="text-stone-600 text-lg leading-relaxed font-medium italic">"{t.text}"</p>
                </div>
                <div className="mt-10 flex items-center space-x-4 border-t border-yellow-50 pt-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-[#3e3a8f] font-bold text-xl uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{t.name}</h4>
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[4rem] border border-dashed border-yellow-200">
            <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-feather-pointed text-yellow-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#3e3a8f] mb-4">No stories shared yet</h3>
            <p className="text-stone-400 max-w-sm mx-auto font-medium">Be the first to share your journey with Shama Vidya Shalaa using the form below.</p>
          </div>
        )}
      </section>

      {/* Feedback Form Section */}
      <section className="py-24 bg-[#3e3a8f] text-white rounded-t-[5rem] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Share Your Experience</h2>
            <p className="text-indigo-200 text-lg font-medium opacity-80">Your feedback helps us grow and serve our children better.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/15">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-indigo-200">Your feedback has been received with love. It truly means the world to us.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-white font-bold underline opacity-50 hover:opacity-100 transition-opacity">Send another response</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300 group-focus-within:text-yellow-400 transition-colors ml-4">Your Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      className="w-full bg-white/10 border border-white/10 rounded-[2rem] px-8 py-5 focus:outline-none focus:bg-white/20 focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all font-bold text-white placeholder:text-white/20" 
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300 group-focus-within:text-yellow-400 transition-colors ml-4">Relationship to School</label>
                    <div className="relative">
                      <select className="w-full bg-white/10 border border-white/10 rounded-[2rem] px-8 py-5 focus:outline-none focus:bg-white/20 focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all font-bold text-white appearance-none">
                        <option className="text-[#3e3a8f]">Parent</option>
                        <option className="text-[#3e3a8f]">Student</option>
                        <option className="text-[#3e3a8f]">Alumni</option>
                        <option className="text-[#3e3a8f]">Well-wisher</option>
                      </select>
                      <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300 block text-center">How would you rate us?</label>
                  <div className="flex justify-center space-x-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="transition-all duration-300 transform hover:scale-125 focus:outline-none"
                      >
                        <i className={`fa-solid fa-star text-4xl transition-colors duration-300 ${
                          (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-white/10'
                        }`}></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300 group-focus-within:text-yellow-400 transition-colors ml-4">Your Thoughts</label>
                  <textarea 
                    required 
                    rows={5} 
                    placeholder="Tell us about your journey with Shama Vidya Shalaa..." 
                    className="w-full bg-white/10 border border-white/10 rounded-[2.5rem] px-8 py-5 focus:outline-none focus:bg-white/20 focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all font-bold text-white placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-friendly bg-yellow-400 text-[#3e3a8f] py-6 text-xl shadow-2xl shadow-indigo-900/50 hover:bg-yellow-300 hover:-translate-y-1 active:scale-95 transition-all font-bold">
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
