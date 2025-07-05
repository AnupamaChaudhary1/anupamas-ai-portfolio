
import React from 'react';
import { ExternalLink, Github, BarChart3, Bot, Database, Eye, Brain, TrendingUp, Camera, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Lovable Assistant",
      description: "Intelligent AI assistant built with Lovable.dev featuring natural language processing, context awareness, and real-time learning capabilities. Integrated with modern UI/UX for seamless user interaction.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["AI/ML", "Lovable.dev", "NLP", "React", "TypeScript"],
      demoUrl: "https://lovable.dev/projects/a4c8d7d3-825e-4eff-8fa4-ca8bb89ceef8",
      githubUrl: "https://github.com/AnupamaChaudhary1/ai-assistant",
      icon: Bot,
      category: "AI Application",
      status: "Live"
    },
    {
      id: 2,
      title: "Sales Forecasting ML Pipeline",
      description: "End-to-end machine learning pipeline for sales prediction using ensemble methods, time series analysis, and feature engineering. Achieves 94% accuracy with automated retraining capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Python", "Scikit-learn", "XGBoost", "Time Series", "MLOps"],
      demoUrl: "https://sales-forecast-demo.streamlit.app",
      githubUrl: "https://github.com/AnupamaChaudhary1/sales-forecasting",
      icon: TrendingUp,
      category: "Machine Learning",
      status: "Production"
    },
    {
      id: 3,
      title: "Computer Vision Object Detector",
      description: "Real-time object detection system using YOLO v8 and OpenCV. Deployed on edge devices with 95% accuracy for industrial quality control applications.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
      tags: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Edge AI"],
      demoUrl: "https://object-detection-demo.herokuapp.com",
      githubUrl: "https://github.com/AnupamaChaudhary1/cv-object-detection",
      icon: Camera,
      category: "Computer Vision",
      status: "Live"
    },
    {
      id: 4,
      title: "Customer Analytics Dashboard",
      description: "Interactive dashboard for customer behavior analysis with real-time data processing, cohort analysis, and predictive churn modeling. Built with Streamlit and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Python", "Streamlit", "PostgreSQL", "Plotly", "Pandas"],
      demoUrl: "https://customer-analytics-dashboard.streamlit.app",
      githubUrl: "https://github.com/AnupamaChaudhary1/customer-analytics",
      icon: BarChart3,
      category: "Data Analytics",
      status: "Live"
    },
    {
      id: 5,
      title: "NLP Sentiment Analysis API",
      description: "High-performance sentiment analysis API using transformer models (BERT) with 98% accuracy. Handles multilingual text and provides confidence scores with batch processing capabilities.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      tags: ["Python", "BERT", "FastAPI", "Transformers", "Docker"],
      demoUrl: "https://sentiment-api.herokuapp.com/docs",
      githubUrl: "https://github.com/AnupamaChaudhary1/sentiment-analysis-api",
      icon: MessageSquare,
      category: "NLP",
      status: "Production"
    },
    {
      id: 6,
      title: "Anomaly Detection System",
      description: "Unsupervised machine learning system for detecting anomalies in network traffic and system logs. Uses isolation forest and autoencoders for real-time threat detection.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      tags: ["Python", "Isolation Forest", "Autoencoders", "Kafka", "Elasticsearch"],
      demoUrl: "https://anomaly-detection-demo.streamlit.app",
      githubUrl: "https://github.com/AnupamaChaudhary1/anomaly-detection",
      icon: Eye,
      category: "Machine Learning",
      status: "Beta"
    }
  ];

  const categories = ["All", "AI Application", "Machine Learning", "Computer Vision", "Data Analytics", "NLP"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Explore my latest AI, machine learning, and data science projects that demonstrate 
            real-world applications and innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 dark:border-gray-700">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-green-500 text-white' :
                      project.status === 'Production' ? 'bg-blue-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* View Project Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex-1 justify-center font-medium shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Want to see more projects and code samples?
            </p>
          </div>
          <a 
            href="https://github.com/AnupamaChaudhary1?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5 mr-3" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
