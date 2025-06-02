import React from 'react';

// Components
function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">ModernBrand</h1>
      <nav className="space-x-6 text-gray-600 font-medium">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center py-24 bg-gray-50">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
        Clean. Fast. Modern.
      </h2>
      <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
        Build your next product with a stunning landing page that converts.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Get Started
        </a>
        <a href="#learn-more" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Learn More
        </a>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "Lightning Fast", desc: "Optimized performance for every device." },
    { title: "Responsive Design", desc: "Looks amazing on mobile, tablet, and desktop." },
    { title: "Easy to Customize", desc: "Built with Tailwind for rapid iteration." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800">Features</h3>
        <p className="text-gray-500 mt-2">Everything you need to launch your product.</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white text-center">
      <h4 className="text-3xl font-bold">Ready to get started?</h4>
      <p className="mt-4 text-lg">Sign up today and launch faster than ever.</p>
      <a href="#signup" className="mt-6 inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded hover:bg-gray-100 transition">
        Sign Up Free
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm text-center py-6">
      &copy; {new Date().getFullYear()} ModernBrand. All rights reserved.
    </footer>
  );
}

// Main Page
export default function LandingPage() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}