import { useState, useEffect, useRef } from 'react';

const IMAGES = {
  hero1: 'https://image.qwenlm.ai/generated-images/103248a1-2323-4463-a7e4-0c4e40fa6f0a/_result.png',
  hero2: 'https://image.qwenlm.ai/generated-images/9ceed87b-2092-4935-a8a3-5385e89c64aa/_result.png',
  hero3: 'https://image.qwenlm.ai/generated-images/834cee5f-754e-478f-9db8-45fe462cc3cd/_result.png',
  directing: 'https://image.qwenlm.ai/generated-images/beb2b0b6-897d-47af-936f-f5e476ef3a0f/_result.png',
  aerial: 'https://image.qwenlm.ai/generated-images/d63c85f4-1449-418e-85b6-8fee71a6b2e3/_result.png',
  student: 'https://image.qwenlm.ai/generated-images/8e32654c-9a8f-4735-b262-8076d07d91fd/_result.png',
};

// Animated Counter Hook
function useCounter(end: number, duration: number = 2000, prefix: string = '', suffix: string = '') {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return { count, ref, prefix, suffix };
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="font-bold text-lg tracking-tight">KAKA</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Courses</a>
          <a href="#gallery" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Student Work</a>
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Why Kaka</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Pricing</a>
          <a href="#apply" className="px-5 py-2.5 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 transition-all">
            Join Now
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-black">
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <a href="#courses" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700 hover:text-black">Courses</a>
            <a href="#gallery" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700 hover:text-black">Student Work</a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700 hover:text-black">Why Kaka</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700 hover:text-black">Pricing</a>
            <a href="#apply" className="px-5 py-2 bg-black text-white font-semibold rounded-full text-sm">Join Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero with image carousel
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [IMAGES.hero1, IMAGES.hero2, IMAGES.hero3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Empowering Lives Through Film
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-200">
          Make Films.<br />Change Lives.
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-in-up delay-300">
          The world's most empowering film academy. Learn to tell stories that matter — no experience needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
          <a href="#courses" className="px-8 py-4 bg-white text-black font-bold rounded-full text-base hover:bg-gray-100 transition-all">
            Explore Courses
          </a>
          <a href="#apply" className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full text-base hover:bg-white/10 transition-all">
            Join Waitlist
          </a>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-white w-8' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// "Even if you / We'll help you" Section
function EvenIf() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Even if you...</h3>
            <ul className="space-y-4">
              {['have never made a film before', 'don\'t own expensive equipment', 'don\'t have a lot of time', 'feel like your story doesn\'t matter'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gray-400 text-lg">—</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">We'll help you...</h3>
            <ul className="space-y-4">
              {['find a powerful story in your community', 'make it with the equipment you have', 'get it released to a real audience', 'build a life empowered by your craft'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-black font-bold text-lg">✓</span>
                  <span className="text-gray-900 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  const stat1 = useCounter(220, 2000);
  const stat2 = useCounter(12, 2000);
  const stat3 = useCounter(980, 2000);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div ref={stat1.ref}>
            <div className="text-4xl md:text-6xl font-bold text-black">+{stat1.count}</div>
            <p className="text-gray-500 text-sm mt-2">Completed Films</p>
          </div>
          <div ref={stat2.ref}>
            <div className="text-4xl md:text-6xl font-bold text-black">${stat2.count}M</div>
            <p className="text-gray-500 text-sm mt-2">In Student Contracts</p>
          </div>
          <div ref={stat3.ref}>
            <div className="text-4xl md:text-6xl font-bold text-black">+{stat3.count}</div>
            <p className="text-gray-500 text-sm mt-2">Festival Selections</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Courses Section
function Courses() {
  const courses = [
    {
      category: 'Directing',
      title: 'Documentary Foundations',
      description: 'A step-by-step guide to finishing a film. From finding a story to getting into film festivals.',
      features: ['No big budget required', 'Complete your first film', 'Release it to an audience', 'Use the gear you have'],
      price: '$299',
      image: IMAGES.directing,
    },
    {
      category: 'Directing',
      title: 'Advanced Documentary',
      description: 'Get insider access to making acclaimed films and mastering the art of storytelling.',
      features: ['Make your breakthrough film', 'Assemble your team', 'Work with a larger budget', 'Find your voice'],
      price: '$449',
      image: IMAGES.aerial,
    },
    {
      category: 'Cinematography',
      title: 'The Cinematic Eye',
      description: 'The complete guide to crafting stunning visuals and impactful visual stories.',
      features: ['Elevate your cinematography', 'Basic to advanced lighting', 'Confidence in any environment', 'Master color grading'],
      price: '$399',
      image: IMAGES.student,
    },
    {
      category: 'Business',
      title: 'Create & Earn',
      description: 'The complete guide to building a profitable and thriving filmmaking career.',
      features: ['Determine your business model', 'Lock in long-term clients', 'Price your jobs right', 'Monetize your platform'],
      price: '$349',
      image: IMAGES.hero2,
    },
    {
      category: 'Post-Production',
      title: 'Perfect Cut',
      description: 'An expert\'s guide to fast, flawless, and captivating editing.',
      features: ['Project organization', 'Efficient editing system', 'From footage to delivery', 'Sound design basics'],
      price: '$349',
      image: IMAGES.hero3,
    },
    {
      category: 'Business',
      title: 'Producing Foundations',
      description: 'Start, fund, manage, and deliver commercial and documentary projects.',
      features: ['Budget templates', 'Pitch like a pro', 'Deliver on budget & time', 'Client management'],
      price: '$399',
      image: IMAGES.hero1,
    },
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Our Programs</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">Courses That <span className="italic">Empower</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="img-zoom aspect-[4/3] relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">{course.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold">{course.price}</span>
                  <button className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    { icon: '📚', title: 'In-depth guided teaching', desc: '500+ video lessons across comprehensive courses. Each lesson designed to empower your growth.' },
    { icon: '🕐', title: '24/7 access to content', desc: 'Learn at your own pace, anytime, anywhere. All content available on demand.' },
    { icon: '📞', title: 'Live monthly calls', desc: 'Interact with industry experts, ask questions, and get real-time feedback.' },
    { icon: '🌍', title: 'Empowering community', desc: 'Connect with fellow creators, share insights, and collaborate on projects.' },
    { icon: '🏅', title: 'Certifications & awards', desc: 'Earn certifications that showcase your achievements and enhance your profile.' },
    { icon: '🎯', title: 'Personal coaching', desc: 'Tailored guidance from mentors to help you sharpen skills and reach goals.' },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Why Kaka</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">Everything You Need to <span className="italic">Rise</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Student Success Stories
function SuccessStories() {
  const stories = [
    {
      name: 'Amara O.',
      quote: '"With Kaka I went from barely any experience to working FULL TIME with a documentary production company!"',
      avatar: '👩🏾‍🦱',
    },
    {
      name: 'Carlos R.',
      quote: '"I went from videographer to storyteller and filmmaker with Kaka. I\'ve learned how to make more money and separate myself."',
      avatar: '👨🏽',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl mb-4">
                {story.avatar}
              </div>
              <p className="text-sm text-gray-500 mb-2">{story.name}'s success:</p>
              <p className="text-gray-800 text-lg leading-relaxed mb-4 italic">{story.quote}</p>
              <p className="text-sm font-semibold">— {story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Student Work Gallery
function Gallery() {
  const works = [
    { title: 'Voices Unheard', author: 'Amara Okafor', type: 'Documentary', image: IMAGES.hero1 },
    { title: 'City of Dreams', author: 'Carlos Rivera', type: 'Documentary', image: IMAGES.aerial },
    { title: 'The Craft', author: 'Priya Sharma', type: 'Commercial', image: IMAGES.directing },
    { title: 'Golden Hour', author: 'Jordan Mitchell', type: 'Short Film', image: IMAGES.student },
    { title: 'Rising Tides', author: 'Fatima Al-Rashid', type: 'Documentary', image: IMAGES.hero2 },
    { title: 'Street Stories', author: 'Kenji Tanaka', type: 'Campaign', image: IMAGES.hero3 },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-3">Student Work</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">Empowered <span className="italic">Creations</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <div key={i} className="img-zoom group relative aspect-video rounded-xl overflow-hidden cursor-pointer">
              <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-gray-300">[{String(i + 1).padStart(2, '0')}]</span>
                <h4 className="text-lg font-bold">{work.title}</h4>
                <p className="text-sm text-gray-300">{work.author} — {work.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Pricing</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">Invest in <span className="italic">Yourself</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Payment Plan */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <p className="text-sm font-semibold text-gray-500 mb-2">Payment Plan</p>
            <p className="text-sm text-gray-400 mb-4">Starting at</p>
            <p className="text-4xl font-bold mb-1">$95<span className="text-lg text-gray-400">/mo</span></p>
            <p className="text-sm text-gray-500 mb-6">No subscription — Lifetime Access</p>
            <ul className="space-y-3 mb-8">
              {['Live Monthly Expert Calls', 'Global Filmmaking Community', 'Personal Coaching', 'Lifetime Access to Updates'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-black">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all">
              Get Started
            </button>
          </div>

          {/* Individual Course */}
          <div className="border-2 border-black rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-4 py-1 rounded-full">POPULAR</div>
            <p className="text-sm font-semibold text-gray-500 mb-2">Individual Course</p>
            <p className="text-sm text-gray-400 mb-4">Starting at</p>
            <p className="text-4xl font-bold mb-1">$299</p>
            <p className="text-sm text-gray-500 mb-6">Choose Individual Courses</p>
            <ul className="space-y-3 mb-8">
              {['Live Monthly Expert Calls', 'Global Filmmaking Community', 'Personal Coaching', 'Lifetime Access to Updates'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-black">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all">
              Get Started
            </button>
          </div>

          {/* Bundle */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <p className="text-sm font-semibold text-gray-500 mb-2">Best Value</p>
            <p className="text-sm text-gray-400 mb-4">Up to</p>
            <p className="text-4xl font-bold mb-1">40% <span className="text-lg text-gray-400">OFF</span></p>
            <p className="text-sm text-gray-500 mb-6">Save up to $800+ when you bundle</p>
            <ul className="space-y-3 mb-8">
              {['All Courses Included', 'Global Filmmaking Community', 'Priority Personal Coaching', 'Lifetime Access + Updates'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-black">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all">
              Get Bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Waitlist / CTA Section
function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="apply" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Get <span className="italic">20% off</span> when doors open
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Join the waitlist and we'll send your discount the moment enrollment's live.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="text-4xl mb-3">🎬</div>
            <p className="text-xl font-bold mb-2">Welcome to Kaka!</p>
            <p className="text-gray-500">We'll be in touch soon with your exclusive discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors" />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors mb-4"
              required
            />
            <button type="submit" className="w-full py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all">
              Join the Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// Marquee
function Marquee() {
  const items = ['EMPOWERING LIVES', '★', 'STORYTELLING', '★', 'FILMMAKING', '★', 'COMMUNITY', '★', 'DOCUMENTARY', '★', 'CINEMATOGRAPHY', '★'];
  return (
    <div className="bg-black text-white py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold tracking-wider">{item}</span>
        ))}
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg">KAKA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering lives through the art of filmmaking. Every story matters.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Courses</h4>
            <ul className="space-y-2">
              {['Documentary Foundations', 'Advanced Documentary', 'The Cinematic Eye', 'Perfect Cut', 'Create & Earn', 'Producing'].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Academy</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Mission', 'Student Work', 'Community', 'Blog', 'Careers'].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Connect</h4>
            <ul className="space-y-2">
              {['Instagram', 'YouTube', 'Twitter/X', 'LinkedIn', 'Newsletter', 'Contact'].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 Kaka Film Academy. All rights reserved.</p>
          <p className="text-gray-400 text-sm italic">"Empowering lives, one story at a time."</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <EvenIf />
      <Stats />
      <Courses />
      <Features />
      <SuccessStories />
      <Gallery />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
}
