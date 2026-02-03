
import React from 'react';

const Contact: React.FC = () => {
  const address = "37/7, 2nd Cross Rd, 1st Stage, Okalipuram, Srirampura, Bengaluru, KA 560021";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Shama+Vidya+Shalaa+Okalipuram+Bengaluru";
  const youtubeUrl = "https://www.youtube.com/@ShamaVidyaShalaa";
  
  // Using a public QR API to generate a QR code for the maps location
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mapsUrl)}`;

  return (
    <div className="bg-[#fffdf2] animate-in fade-in duration-1000">
      {/* Header */}
      <section className="py-24 bg-amber-50 border-b border-amber-100 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Reach Out to Us</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 leading-tight">Connect with Shama Vidya Shalaa</h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-xl font-light">
            Whether you have an inquiry about admissions or want to visit our campus, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Visit Campus Card with QR */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-amber-100 group hover:border-amber-400 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mr-4 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <i className="fa-solid fa-location-dot text-amber-600 text-lg group-hover:text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1 text-lg">Visit Campus</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">{address}</p>
                  </div>
                </div>
                
                {/* QR Code Section */}
                <div className="mt-4 p-4 bg-yellow-50/50 rounded-3xl border border-yellow-100 flex flex-col items-center text-center">
                  <p className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-3">Scan for Directions</p>
                  <div className="bg-white p-2 rounded-2xl shadow-sm border border-white">
                    <img src={qrCodeUrl} alt="Address QR Code" className="w-32 h-32" />
                  </div>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 text-[#3e3a8f] text-[10px] font-bold uppercase hover:underline">Open in Google Maps</a>
                </div>
              </div>

              {/* YouTube Card */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-amber-100 group hover:border-red-400 transition-all">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mr-4 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <i className="fa-brands fa-youtube text-red-600 text-xl group-hover:text-white"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-stone-800 text-lg">Watch Us</h3>
                    <p className="text-stone-500 text-xs font-light">School Life & Events</p>
                  </div>
                  <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-friendly bg-red-600 text-white text-[10px] px-4 py-2 hover:bg-red-700">
                    Subscribe
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-amber-100 flex items-start group hover:border-emerald-400 transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mr-4 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <i className="fa-brands fa-whatsapp text-emerald-600 text-xl group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-1 text-lg">WhatsApp Us</h3>
                  <p className="text-stone-500 text-sm font-light">+91 94804 50512</p>
                  <a href="https://wa.me/919480450512" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider mt-2 inline-block hover:underline">Start Chat</a>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="lg:col-span-2">
              <div className="w-full h-full min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-amber-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.643333333333!2d77.56!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1619890f5b3f%3A0x6b473708a3836173!2s37%2F7%2C%202nd%20Cross%20Rd%2C%20Okalipuram%2C%20Bengaluru%2C%20Karnataka%20560021!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shama Vidya Shalaa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What is the best time to visit?', a: 'We welcome visitors between 9:00 AM and 12:00 PM on weekdays. Please call or WhatsApp us ahead of time to schedule a tour.' },
              { q: 'Is there a school transport facility?', a: 'Yes, we provide transportation for students in the Okalipuram and surrounding areas. Routes can be confirmed at the administrative office.' },
              { q: 'What is the medium of instruction?', a: 'The primary medium of instruction is English, while also emphasizing proficiency in Kannada and Hindi.' }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-[2rem] shadow-sm border border-amber-100 overflow-hidden">
                <summary className="p-8 cursor-pointer list-none flex justify-between items-center font-bold text-stone-800 hover:text-amber-800 transition-colors">
                  {item.q}
                  <div className="w-8 h-8 rounded-full border border-amber-200 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </summary>
                <div className="px-8 pb-8 text-stone-500 text-lg leading-relaxed font-light">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
