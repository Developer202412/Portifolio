import { ExternalLink, Github, Code, Database, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern React patterns and Node.js backend.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      techStack: ["React", "Express", "PostgreSQL", "Socket.io", "Redux"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskmanager-pro.herokuapp.com",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling tools, and comprehensive reporting features.",
      techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com/alexjohnson/social-dashboard",
      liveUrl: "https://social-analytics-dashboard.netlify.app",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile Weather App",
      description: "React Native weather application with location services, weather forecasts, and beautiful UI animations. Cross-platform compatibility.",
      techStack: ["React Native", "Expo", "REST API", "AsyncStorage", "Animations"],
      githubUrl: "https://github.com/alexjohnson/weather-app",
      liveUrl: "https://expo.dev/@alexjohnson/weather-app",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-3 mb-3">
                  {project.icon}
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;