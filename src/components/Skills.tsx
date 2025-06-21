import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Shield,
  Cloud,
  Settings,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js & Express', level: 90 },
        { name: 'Python & Django', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 90 }
      ]
    },
    {
      title: 'Mobile & Tools',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'Jest & Testing', level: 85 },
        { name: 'Webpack & Vite', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: <Code className="w-5 h-5" /> },
    { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
    { name: 'Figma', icon: <Palette className="w-5 h-5" /> },
    { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Docker', icon: <Settings className="w-5 h-5" /> },
    { name: 'Postman', icon: <Monitor className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use 
              to build modern, scalable applications.
            </p>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 group"
                >
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications or Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm committed to staying current with the latest technologies and best practices. 
              I regularly participate in online courses, attend tech conferences, and contribute 
              to open-source projects to expand my skill set and give back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;