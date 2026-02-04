
import React from 'react';

type GrowthCardProps = {
  title: string;
  description: string;
  image: string;
};

const GrowthCard: React.FC<GrowthCardProps> = ({ title, description, image }) => (
  <div className="text-center group">
    <div className="mb-8 rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-svs-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
        <p className="text-xs font-bold tracking-widest uppercase">Explore More</p>
      </div>
    </div>
    <h4 className="text-2xl font-serif font-bold mb-2">{title}</h4>
    <div className="w-12 h-1 bg-slate-800 mx-auto mb-4 rounded-full"></div>
    <p className="text-slate-800 text-sm leading-relaxed font-light">{description}</p>
  </div>
);

const HolisticGrowth: React.FC = () => {
  const activities = [
    {
      title: 'Physical Education',
      description: 'Regular yoga, PT sessions, team sports and annual sports days that promote fitness, teamwork, and discipline.',
      image: 'public/images/class-3.avif'

    },
    {
      title: 'Performing Arts',
      description: 'Music, dance and drama activities that build confidence, creativity and public-speaking skills.',
      image: 'public/images/class-2.jpeg'
    },
    {
      title: 'Science & Innovation',
      description: 'Hands-on laboratory work, maker projects and guided innovation sessions to nurture curiosity and problem-solving.',
      image: 'public/images/class-1.jpg'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Curriculum Beyond Books
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Holistic Growth</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">
            Co-curricular programs that cultivate character, resilience and practical life skills for the 21st century learner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {activities.map((item, index) => (
            <GrowthCard key={index} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Academics: React.FC = () => {
  const programs = [
    {
      level: 'Montessori & Nursery',
      color: '#3e3a8f',
      description: 'A play-based, child-centered approach focusing on social and motor skill development.',
      highlights: ['Sensory Activities', 'Storytelling', 'Basic Phonics', 'Creative Play']
    },
    {
      level: 'Primary School (Grade 1-5)',
      color: '#002396ea',
      description: 'Strong foundation in literacy, numeracy, and environmental studies.',
      highlights: ['Math & Science', 'Language Skills', 'Physical Education', 'Arts & Crafts']
    },
    {
      level: 'Middle School (Grade 6-8)',
      color: '#20162b',
      description: 'Encouraging independent thinking and deeper conceptual understanding.',
      highlights: ['Lab Sessions', 'ICT & Computers', 'Vernacular Languages', 'Modern Sciences']
    },
    {
      level: 'High School (Grade 9-10)',
      color: '#3e3a8f',
      description: 'Rigorous preparation for board examinations while focusing on life skills.',
      highlights: ['Science Exhibitions', 'Leadership', 'Exam Strategies', 'Intensive Practicals']
    }
  ];

  return (
    <div className="bg-[#fffdf2] animate-in fade-in duration-700">
      {/* Header */}
      <section className="py-24 bg-white border-b border-amber-100 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 p-12 opacity-5 pointer-events-none">
          <i className="fa-solid fa-graduation-cap text-[20rem]"></i>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-svs-purple mb-6">Academic Programs</h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-xl font-light">
            Nurturing intelligence and character through a structured, value-based curriculum rooted in tradition.
          </p>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
            <div className="lg:w-1/2">
              <div className="relative">
                <img src="public/images/class-1.jpg" alt="Learning Approach" className="rounded-[3.5rem] shadow-2xl calm-shadow" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-svs-green font-bold tracking-widest text-xs uppercase mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl font-serif font-bold text-svs-purple mb-8">A Holistic Path to Learning</h2>
              <p className="text-stone-500 text-lg leading-relaxed mb-10 font-light">
                At Shama Vidya Shalaa, we believe that education extends beyond textbooks. Our pedagogical approach combines traditional teacher-led instruction with student-centric inquiry.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Experimental Learning', icon: 'fa-microscope', color: '#009640', desc: 'Science fairs and field trips provide practical exposure to the real world.' },
                  { title: 'Personal Attention', icon: 'fa-users', color: '#3e3a8f', desc: 'Small class sizes allow our mentors to understand each child\'s unique pace.' },
                  { title: 'Value-Based Education', icon: 'fa-book-open', color: '#f39200', desc: 'Integrating moral values and cultural heritage into the everyday experience.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div style={{ color: item.color }} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 shrink-0 shadow-sm border border-amber-100 transition-transform group-hover:scale-110">
                      <i className={`fa-solid ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-stone-500 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Cards - Earthy Palette */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-amber-50 hover:calm-shadow hover:border-amber-200 transition-all duration-500 relative group overflow-hidden">
                <div style={{ backgroundColor: program.color }} className="absolute top-0 right-0 w-2 h-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 style={{ color: program.color }} className="text-2xl font-serif font-bold mb-6">{program.level}</h3>
                <p className="text-stone-500 mb-8 font-light leading-relaxed">{program.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-center text-sm text-stone-600 font-medium">
                      <i style={{ color: program.color }} className="fa-solid fa-leaf mr-3 text-[10px] opacity-60"></i>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Growth - integrated component */}
      <HolisticGrowth />
    </div>
  );
};

export default Academics;
