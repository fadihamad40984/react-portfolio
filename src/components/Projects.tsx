import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';
import { useState } from 'react';
import './Projects.css';

// Import Me Plus images
import meplus1 from '../assets/images/1.jpeg';
import meplus2 from '../assets/images/2.jpeg';
import meplus3 from '../assets/images/3.jpeg';
import meplus4 from '../assets/images/4.jpeg';
import meplus5 from '../assets/images/5.jpeg';
import meplus6 from '../assets/images/6.jpeg';
import meplus7 from '../assets/images/7.jpeg';
import meplus8 from '../assets/images/8.jpeg';
import meplus9 from '../assets/images/9.jpeg';
import meplus10 from '../assets/images/10.jpeg';
import meplus11 from '../assets/images/11.jpeg';
import meplus12 from '../assets/images/12.jpeg';
import meplus13 from '../assets/images/13.jpeg';
import meplus14 from '../assets/images/14.jpeg';
import meplus15 from '../assets/images/15.jpeg';
import meplus16 from '../assets/images/16.jpeg';
import meplus17 from '../assets/images/17.jpeg';
import meplus18 from '../assets/images/18.jpeg';
import meplus19 from '../assets/images/19.jpeg';
import meplus20 from '../assets/images/20.jpeg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'Me Plus',
      description: 'A cross-platform mobile app for schools to track student behavior with gamification. Students earn points for good behavior and redeem rewards. Published on Google Play and App Store.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'Mobile Development',
      date: '2024',
      image: meplus1,
      gallery: [meplus1, meplus2, meplus3, meplus4, meplus5, meplus6, meplus7, meplus8, meplus9, meplus10, meplus11, meplus12, meplus13, meplus14, meplus15, meplus16, meplus17, meplus18, meplus19, meplus20],
      live: '#', // Add your live demo URL here
      featured: true,
    },
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

  const openGallery = (projectIndex: number) => {
    if (projects[projectIndex].gallery) {
      setSelectedProject(projectIndex);
      setCurrentImageIndex(0);
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null && projects[selectedProject].gallery) {
      setCurrentImageIndex((prev) => 
        prev === projects[selectedProject].gallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject !== null && projects[selectedProject].gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? projects[selectedProject].gallery!.length - 1 : prev - 1
      );
    }
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
              <div 
                className="project-image"
                onClick={() => project.gallery && openGallery(index)}
                style={{ cursor: project.gallery ? 'pointer' : 'default' }}
              >
                <img src={project.image} alt={project.title} onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=' + project.title;
                }} />
                {project.gallery && (
                  <div className="gallery-indicator">
                    <FiImage />
                    <span>{project.gallery.length} Photos</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" onClick={(e) => e.stopPropagation()}>
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  {project.category && (
                    <span className="project-category">{project.category}</span>
                  )}
                  <span className="project-date">{project.date}</span>
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

        {/* Image Gallery Modal */}
        <AnimatePresence>
          {selectedProject !== null && projects[selectedProject].gallery && (
            <motion.div
              className="gallery-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
            >
              <button className="gallery-close" onClick={closeGallery}>
                <FiX />
              </button>

              <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={currentImageIndex}
                  src={projects[selectedProject].gallery![currentImageIndex]}
                  alt={`${projects[selectedProject].title} - Screenshot ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <button className="gallery-nav gallery-prev" onClick={prevImage}>
                  <FiChevronLeft />
                </button>

                <button className="gallery-nav gallery-next" onClick={nextImage}>
                  <FiChevronRight />
                </button>

                <div className="gallery-counter">
                  {currentImageIndex + 1} / {projects[selectedProject].gallery!.length}
                </div>

                <div className="gallery-thumbnails">
                  {projects[selectedProject].gallery!.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={idx === currentImageIndex ? 'active' : ''}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
