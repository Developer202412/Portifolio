import { 
  Download, 
  Globe, 
  Code, 
  Database
} from 'lucide-react';

const About = () => {
  const handleResumeDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Johnson_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate full-stack developer with a love for creating innovative solutions 
              and beautiful user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Biography Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience building 
                  modern web applications. My journey started with a Computer Science degree and 
                  has evolved through continuous learning and hands-on project development.
                </p>
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have 
                  extensive experience with modern development practices including test-driven 
                  development, CI/CD, and agile methodologies.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  mentoring junior developers, or exploring the latest web technologies. I believe 
                  in writing clean, maintainable code that solves real-world problems.
                </p>
              </div>

              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className="mt-8 inline-flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Experience Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Highlights</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Senior Full-Stack Developer</h4>
                  <p className="text-blue-600 font-medium mb-2">TechCorp Inc. • 2021 - Present</p>
                  <p className="text-gray-600">
                    Lead development of enterprise web applications serving 100k+ users. 
                    Architected scalable microservices and mentored junior developers.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Full-Stack Developer</h4>
                  <p className="text-blue-600 font-medium mb-2">StartupXYZ • 2019 - 2021</p>
                  <p className="text-gray-600">
                    Built MVP from scratch using React and Node.js. Implemented real-time 
                    features and payment processing that helped secure Series A funding.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Frontend Developer</h4>
                  <p className="text-blue-600 font-medium mb-2">WebAgency • 2018 - 2019</p>
                  <p className="text-gray-600">
                    Developed responsive websites and web applications for various clients. 
                    Specialized in React, Vue.js, and modern CSS frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">50+ Projects</h4>
              <p className="text-gray-600">Successfully delivered web applications and mobile apps</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">5+ Years</h4>
              <p className="text-gray-600">Professional development experience</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Full-Stack</h4>
              <p className="text-gray-600">End-to-end application development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;