import { useState, useEffect } from 'react';

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0F]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#F0D078] flex items-center justify-center">
            <span className="text-black font-bold text-lg">R</span>
          </div>
          <span className="font-playfair text-2xl font-bold tracking-wide">RISE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-[#D4A843] transition-colors">About</a>
          <a href="#programs" className="text-sm font-medium text-gray-300 hover:text-[#D4A843] transition-colors">Programs</a>
          <a href="#impact" className="text-sm font-medium text-gray-300 hover:text-[#D4A843] transition-colors">Impact</a>
          <a href="#voices" className="text-sm font-medium text-gray-300 hover:text-[#D4A843] transition-colors">Voices</a>
          <a href="#faculty" className="text-sm font-medium text-gray-300 hover:text-[#D4A843] transition-colors">Faculty</a>
          <a href="#apply" className="px-6 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#F0D078] text-black font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-[#D4A843]/30 transition-all">
            Apply Now
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0F]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-[#D4A843]">About</a>
          <a href="#programs" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-[#D4A843]">Programs</a>
          <a href="#impact" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-[#D4A843]">Impact</a>
          <a href="#voices" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-[#D4A843]">Voices</a>
          <a href="#faculty" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-[#D4A843]">Faculty</a>
          <a href="#apply" className="block px-6 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#F0D078] text-black font-semibold rounded-full text-sm text-center">Apply Now</a>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0A0A0F]"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A843]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A843]/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Film strip decorations */}
      <div className="absolute left-0 top-0 bottom-0 w-16 opacity-10 hidden lg:block">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-8 h-6 border border-[#D4A843] mx-auto mb-4 rounded-sm"></div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 opacity-10 hidden lg:block">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-8 h-6 border border-[#D4A843] mx-auto mb-4 rounded-sm"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-[#D4A843] font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Empowering Voices Through Cinema
          </p>
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in-up delay-200">
          Your Story.<br />
          <span className="gold-gradient-text">Your Power.</span><br />
          Your Film.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300 leading-relaxed">
          We believe every voice deserves to be heard. RISE Film Academy empowers underrepresented filmmakers to tell stories that transform the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <a href="#apply" className="px-8 py-4 bg-gradient-to-r from-[#D4A843] to-[#F0D078] text-black font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#D4A843]/30 transition-all animate-pulse-gold">
            Begin Your Journey
          </a>
          <a href="#about" className="px-8 py-4 border-2 border-[#D4A843]/50 text-[#D4A843] font-semibold rounded-full text-lg hover:bg-[#D4A843]/10 transition-all">
            Watch Our Story
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-500">
          {[
            { number: '2,500+', label: 'Filmmakers Empowered' },
            { number: '180+', label: 'Films Produced' },
            { number: '45', label: 'Countries Represented' },
            { number: '92%', label: 'Career Placement' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#D4A843]">{stat.number}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-[#D4A843]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#D4A843] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

// About / Mission Section
function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#D4A843] font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Mission</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cinema is a <span className="gold-gradient-text">Right</span>, Not a Privilege
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              For too long, the film industry has been gatekept by those with resources and connections. RISE Film Academy exists to tear down those barriers.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We provide world-class filmmaking education, mentorship from industry professionals, and the tools needed to bring your vision to life — regardless of your background, identity, or zip code.
            </p>
            <div className="space-y-4">
              {[
                'Scholarship-first admissions — financial barriers eliminated',
                'Industry mentors paired with every student',
                'State-of-the-art equipment access from day one',
                'Global community of empowered storytellers',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4A843]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#D4A843]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#14141F] border border-[#D4A843]/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="font-playfair text-2xl font-bold text-[#D4A843] mb-2">"Every story matters"</p>
                  <p className="text-gray-500 text-sm">— RISE Film Academy</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-[#D4A843]/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-[#D4A843]/20 rounded-full"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#D4A843] to-[#F0D078] text-black px-6 py-3 rounded-xl font-bold shadow-xl">
              Est. 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Programs Section
function Programs() {
  const programs = [
    {
      icon: '🎥',
      title: 'Directing & Storytelling',
      duration: '12 Months',
      description: 'Master the art of visual storytelling. From screenplay to final cut, learn to direct with purpose and power.',
      features: ['Screenwriting fundamentals', 'Visual storytelling techniques', 'Actor direction', 'Post-production workflow'],
    },
    {
      icon: '📹',
      title: 'Cinematography',
      duration: '9 Months',
      description: 'Learn to paint with light. Master camera operation, lighting design, and visual composition.',
      features: ['Camera mastery', 'Lighting design', 'Color theory', 'Visual composition'],
    },
    {
      icon: '🎙️',
      title: 'Documentary Filmmaking',
      duration: '10 Months',
      description: 'Tell real stories that create real change. Learn investigative and narrative documentary techniques.',
      features: ['Investigative research', 'Interview techniques', 'Ethical storytelling', 'Festival strategy'],
    },
    {
      icon: '✂️',
      title: 'Editing & Post-Production',
      duration: '8 Months',
      description: 'Where the magic happens. Master the craft of editing, sound design, and color grading.',
      features: ['Non-linear editing', 'Sound design', 'Color grading', 'VFX basics'],
    },
    {
      icon: '🎭',
      title: 'Producing & Distribution',
      duration: '6 Months',
      description: 'Learn the business of film. From pitch to premiere, navigate the industry with confidence.',
      features: ['Film financing', 'Distribution strategies', 'Festival submissions', 'Marketing & PR'],
    },
    {
      icon: '📱',
      title: 'Digital Content Creation',
      duration: '6 Months',
      description: 'Create compelling content for the digital age. Short films, web series, and social storytelling.',
      features: ['Short-form storytelling', 'Platform optimization', 'Audience building', 'Monetization'],
    },
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-[#0D0D15] relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A843]/5 rounded-full blur-[150px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] font-medium tracking-[0.2em] uppercase text-sm mb-4">Programs</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Find Your <span className="gold-gradient-text">Path</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Six immersive programs designed to empower you with the skills, confidence, and network to succeed in film.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <div key={i} className="card-hover bg-[#14141F] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A843]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4A843]/10 transition-all"></div>
              <div className="relative">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-playfair text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-[#D4A843] text-sm font-medium mb-3">{program.duration}</p>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D4A843] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Impact Section
function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#1A1A2E]/50 to-[#0A0A0F]"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Impact</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Transforming <span className="gold-gradient-text">Lives</span> Through Film
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              number: '85%',
              label: 'of students receive full scholarships',
              icon: '🎓',
              description: 'Financial barriers should never silence a story. We fund dreams.',
            },
            {
              number: '340+',
              label: 'films screened at festivals worldwide',
              icon: '🏆',
              description: 'Our students are winning awards and telling stories that matter.',
            },
            {
              number: '100%',
              label: 'commitment to diverse voices',
              icon: '🌍',
              description: 'Every background, every identity, every story — welcome here.',
            },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 bg-[#14141F]/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4A843] mb-2 font-playfair">{item.number}</div>
              <p className="text-white font-medium mb-3">{item.label}</p>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Empowerment pillars */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Access', desc: 'Equipment, studios, and tools provided', icon: '🔑' },
            { title: 'Mentorship', desc: '1-on-1 guidance from industry pros', icon: '🤝' },
            { title: 'Community', desc: 'A global network of empowered creators', icon: '🌐' },
            { title: 'Opportunity', desc: 'Festival submissions & industry connections', icon: '🚀' },
          ].map((pillar, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-[#D4A843]/20 bg-[#D4A843]/5 hover:bg-[#D4A843]/10 transition-all">
              <div className="text-3xl mb-3">{pillar.icon}</div>
              <h4 className="font-bold text-[#D4A843] mb-1">{pillar.title}</h4>
              <p className="text-gray-500 text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials / Voices Section
function Voices() {
  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'Documentary Filmmaker, Class of 2022',
      quote: 'RISE didn\'t just teach me to make films — they taught me my story was worth telling. My documentary premiered at Sundance last year.',
      avatar: '👩🏾‍🦱',
    },
    {
      name: 'Carlos Rivera',
      role: 'Director, Class of 2021',
      quote: 'Growing up, I never saw people like me in film. Now I\'m behind the camera, creating the representation I always needed.',
      avatar: '👨🏽',
    },
    {
      name: 'Priya Sharma',
      role: 'Cinematographer, Class of 2023',
      quote: 'The scholarship changed my life. The mentorship changed my career. The community changed my soul. I am forever grateful.',
      avatar: '👩🏽',
    },
    {
      name: 'Jordan Mitchell',
      role: 'Producer, Class of 2020',
      quote: 'I came to RISE with nothing but a dream. I left with a network, a career, and the unshakeable belief that I belong in this industry.',
      avatar: '👨🏿',
    },
  ];

  return (
    <section id="voices" className="py-24 md:py-32 bg-[#0D0D15] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] font-medium tracking-[0.2em] uppercase text-sm mb-4">Voices of RISE</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Stories of <span className="gold-gradient-text">Empowerment</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from the filmmakers who found their voice, their power, and their purpose at RISE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#14141F] border border-white/5 rounded-2xl p-8 relative card-hover">
              <div className="absolute top-6 right-8 text-[#D4A843]/20 text-6xl font-playfair">"</div>
              <div className="relative">
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-[#D4A843] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Faculty Section
function Faculty() {
  const faculty = [
    {
      name: 'Director Ava Chen',
      specialty: 'Directing & Vision',
      bio: 'Award-winning director with 15+ years in narrative and documentary film.',
      emoji: '👩🏻‍🦰',
    },
    {
      name: 'Marcus Williams',
      specialty: 'Cinematography',
      bio: 'ASC member whose work has been featured at Cannes and TIFF.',
      emoji: '👨🏿‍🦲',
    },
    {
      name: 'Fatima Al-Rashid',
      specialty: 'Documentary',
      bio: 'Emmy-nominated documentarian focused on social justice storytelling.',
      emoji: '👩🏽‍🦱',
    },
    {
      name: 'Kenji Tanaka',
      specialty: 'Post-Production',
      bio: 'Veteran editor who has cut features for major studios and independents alike.',
      emoji: '👨🏻',
    },
  ];

  return (
    <section id="faculty" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] font-medium tracking-[0.2em] uppercase text-sm mb-4">Faculty & Mentors</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Learn From the <span className="gold-gradient-text">Best</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our faculty are not just teachers — they're working filmmakers who are passionate about lifting up the next generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, i) => (
            <div key={i} className="text-center p-6 bg-[#14141F] border border-white/5 rounded-2xl card-hover group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                {member.emoji}
              </div>
              <h4 className="font-bold text-white mb-1">{member.name}</h4>
              <p className="text-[#D4A843] text-sm font-medium mb-3">{member.specialty}</p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA / Apply Section
function Apply() {
  return (
    <section id="apply" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#0A0A0F] to-[#1A1A2E]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A843]/5 rounded-full blur-[200px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="text-6xl mb-6">🎬</div>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Your Story Deserves to<br />
          <span className="gold-gradient-text">Be Told</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Applications for our next cohort are now open. Scholarships available. No experience necessary — just passion, purpose, and the courage to begin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#" className="px-10 py-4 bg-gradient-to-r from-[#D4A843] to-[#F0D078] text-black font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#D4A843]/30 transition-all">
            Apply for Next Cohort
          </a>
          <a href="#" className="px-10 py-4 border-2 border-[#D4A843]/50 text-[#D4A843] font-semibold rounded-full text-lg hover:bg-[#D4A843]/10 transition-all">
            Request Info Pack
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'Application Fee', value: 'FREE' },
            { label: 'Next Deadline', value: 'Mar 15' },
            { label: 'Cohort Size', value: '30 Students' },
            { label: 'Start Date', value: 'June 2026' },
          ].map((item, i) => (
            <div key={i} className="bg-[#14141F]/80 border border-white/5 rounded-xl p-4">
              <p className="text-[#D4A843] font-bold text-lg">{item.value}</p>
              <p className="text-gray-500 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#F0D078] flex items-center justify-center">
                <span className="text-black font-bold text-lg">R</span>
              </div>
              <span className="font-playfair text-2xl font-bold">RISE</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of filmmakers to tell stories that change the world.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              {['Directing', 'Cinematography', 'Documentary', 'Editing', 'Producing', 'Digital Content'].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-[#D4A843] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Academy</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Mission', 'Faculty', 'Alumni', 'Partners', 'Careers'].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-[#D4A843] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {['Instagram', 'YouTube', 'Twitter/X', 'LinkedIn', 'Newsletter', 'Contact'].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-[#D4A843] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 RISE Film Academy. All rights reserved.</p>
          <p className="text-gray-600 text-sm italic">"Every voice deserves a stage."</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Programs />
      <div className="section-divider"></div>
      <Impact />
      <div className="section-divider"></div>
      <Voices />
      <div className="section-divider"></div>
      <Faculty />
      <div className="section-divider"></div>
      <Apply />
      <Footer />
    </div>
  );
}
