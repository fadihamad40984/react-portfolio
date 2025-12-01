import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Maze Safety - AI Project',
      description: 'AI-powered safety navigation system for maze environments. Built with modern web technologies and artificial intelligence algorithms.',
      technologies: ['AI', 'JavaScript', 'React', 'Algorithms'],
      date: '2025',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80',
      github: 'https://github.com/fadihamad40984/aiProject',
      live: 'https://mazesafety.netlify.app/',
      featured: true,
    },
    {
      title: '3D Interactive Website',
      description: 'Interactive 3D web experience built with React, TypeScript, and Vite. Features modern 3D graphics and animations.',
      technologies: ['React', 'TypeScript', 'Vite', '3D', 'Tailwind CSS'],
      date: '2025',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=500&fit=crop&q=80',
      github: 'https://github.com/fadihamad40984/3dWebsite',
      live: 'https://3dw.netlify.app/',
      featured: true,
    },
    {
      title: 'BolTalab - Delivery Management System',
      description: 'Built with React.js, Node.js, MongoDB. Features include order management, real-time tracking, and role-based access.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
      date: 'June 2025 - August 2025',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop&q=80',
      github: 'https://github.com/BolTalab/BolTalab',
      featured: true,
    },
    {
      title: 'Village Management System',
      description: 'Full-stack web application for managing village data. Implemented authentication, real-time chat, and role-based access. Built with React, Node.js, GraphQL, and MySQL.',
      technologies: ['React', 'Node.js', 'GraphQL', 'MySQL'],
      date: 'November 2024 - December 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      github: 'https://github.com/fadihamad40984/advancewebreactproject_part2',
    },
    {
      title: 'Event Planner',
      description: 'Java-based event management system with PostgreSQL integration. BDD testing with Cucumber and Agile principles.',
      technologies: ['Java', 'PostgreSQL', 'Cucumber'],
      date: 'February 2024 - April 2024',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop&q=80',
      github: 'https://github.com/fadihamad40984/Event_Planner--Software-project--',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Check out my recent work</p>
        </div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=' + project.title;
                }} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <span className="project-date">{project.date}</span>
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
