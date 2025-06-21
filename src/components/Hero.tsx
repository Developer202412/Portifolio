import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innocent Mallya
            <span className="block text-3xl md:text-4xl font-normal text-blue-200 mt-2">
              Full-Stack Developer
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build modern web applications using the MERN stack, creating seamless user experiences 
            with cutting-edge technologies and clean, maintainable code.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-blue-200">
              <Globe className="w-6 h-6" />
              <span className="text-sm font-medium">Frontend</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Database className="w-6 h-6" />
              <span className="text-sm font-medium">Backend</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Code className="w-6 h-6" />
              <span className="text-sm font-medium">Full-Stack</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            <span>See My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;