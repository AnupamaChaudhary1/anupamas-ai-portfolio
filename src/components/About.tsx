
import React from 'react';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Python", level: 95, icon: Code },
    { name: "Data Science", level: 90, icon: TrendingUp },
    { name: "Machine Learning", level: 85, icon: Brain },
    { name: "SQL/Database", level: 80, icon: Database },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Data Scientist and Python Developer with expertise in transforming 
              complex data into actionable insights. My journey in technology spans across machine 
              learning, statistical analysis, and web development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in building predictive models, creating data visualizations, and 
              developing Python applications that solve real-world problems. My work combines 
              technical expertise with creative problem-solving to deliver impactful solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Django", "Flask", "SQL", "Git"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills & Expertise</h3>
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
