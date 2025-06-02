import React from 'react';

// Placeholder for icons - in a real app, you'd use an SVG library or actual SVG code
const IconPlaceholder = ({ className = "w-12 h-12 text-sky-400" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> {/* Example: Lightning bolt */}
  </svg>
);

const FeatureIcon = ({ type }) => {
  let pathData = "M13 10V3L4 14h7v7l9-11h-7z"; // Default: Lightning
  if (type === "responsive") pathData = "M0 0h24v24H0z"; // Placeholder, replace with actual responsive icon
  if (type === "customize") pathData = "M0 0h24v24H0z"; // Placeholder, replace with actual customize icon

  // For actual icons, you'd use more specific SVGs.
  // Example:
  if (type === "responsive") return (
    <svg className="w-12 h-12 text-sky-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM5 10h.01M5 14h.01M19 10h.01M19 14h.01M12 6h.01" />
    </svg>
  );
  if (type === "customize") return (
    <svg className="w-12 h-12 text-sky-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return ( // Default icon
    <svg className="w-12 h-12 text-sky-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
      <path strokeLinecap="round" strokeLinejoin="round" d={pathData} />
    </svg>
  );
};


// Components
function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 sm:px-8 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Modern<span className="text-sky-400">Brand</span>
        </h1>
        <nav className="space-x-6 text-gray-200 font-medium">
          <a href="#features" className="hover:text-sky-400 transition-colors duration-300">Features</a>
          <a href="#pricing" className="hover:text-sky-400 transition-colors duration-300">Pricing</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Replace with a cool background image or video */}
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Abstract technology background" className="w-full h-full object-cover"/>
        {/* Or a gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-800 to-indigo-900 opacity-70"></div> */}
      </div>
       <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for text contrast */}


      <div className="relative z-10 text-center py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="block">Innovate. Create.</span>
          <span className="block text-sky-400 mt-2 sm:mt-4">Dominate.</span>
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-lg sm:max-w-xl mx-auto">
          Experience the pinnacle of web design. ModernBrand provides the tools to build breathtaking, high-performance digital experiences.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a
            href="#get-started"
            className="inline-block bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 transition-transform transform hover:scale-105 shadow-lg hover:shadow-sky-500/50 duration-300"
          >
            Launch Your Vision
          </a>
          <a
            href="#learn-more"
            className="inline-block bg-transparent border-2 border-gray-400 text-gray-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 hover:border-gray-700 hover:text-white transition-colors duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
       {/* Subtle animated shapes or particles could go here for extra flair */}
    </section>
  );
}

function Features() {
  const features = [
    { 
      iconType: "lightning",
      title: "Blazing Speed", 
      desc: "Engineered for sub-second load times and seamless interactions, keeping users engaged." 
    },
    { 
      iconType: "responsive",
      title: "Fluid Responsive", 
      desc: "Pixel-perfect display on all devices, from widescreen monitors to the smallest mobile screens." 
    },
    { 
      iconType: "customize",
      title: "Deeply Customizable", 
      desc: "Tailor every aspect with intuitive controls and developer-friendly APIs." 
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-800 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Why <span className="text-sky-400">ModernBrand</span>?
          </h3>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            We provide the cutting-edge features you need to stand out and succeed in the digital landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-slate-700 p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6">
                 <FeatureIcon type={f.iconType} />
              </div>
              <h4 className="text-2xl font-semibold text-sky-400 mb-3 text-center">{f.title}</h4>
              <p className="text-gray-300 text-center leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Ready to Elevate Your Project?
        </h4>
        <p className="mt-6 text-lg sm:text-xl text-sky-100 max-w-xl mx-auto">
          Join thousands of creators building their best work with ModernBrand. Get started for free, no credit card required.
        </p>
        <a 
          href="#signup" 
          className="mt-10 inline-block bg-white text-sky-600 font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg duration-300"
        >
          Sign Up & Build Now
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-500 text-sm text-center py-10">
      <p>&copy; {new Date().getFullYear()} ModernBrand. All rights reserved.</p>
      <p className="mt-2">Crafted with <span className="text-sky-500">♥</span> for the Modern Web.</p>
    </footer>
  );
}

// Main Page
export default function LandingPage() {
  return (
    <div className="font-sans antialiased bg-slate-900"> {/* Base font and bg for the whole page */}
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}