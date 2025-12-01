import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'Mobile App Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && charIndex === currentRole.length) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && charIndex === 0) {
      // schedule the role switch to avoid synchronous setState inside the effect
      const switchTimeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 50);
      return () => clearTimeout(switchTimeout);
    }

    const timeout = setTimeout(() => {
      setTypedText(currentRole.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.div variants={itemVariants} className="hero-badge">
            <span>🎓 B.Sc. in Computer Engineering | 💻 Full Stack Developer</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="gradient-text">Fadi Hamad</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-subtitle">
            <span>I'm a </span>
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Computer Engineering graduate with practical experience in full-stack web and mobile development. 
            Skilled in React Native, React, Flutter, Node.js and modern database systems, with strong capabilities 
            in RESTful API integration, debugging, and building scalable applications.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#contact" className="btn">
              Contact Me <FiMail />
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects <FiArrowRight />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            <a href="https://github.com/fadihamad40984" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/cefadihamad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/fadi.hamad.161/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="hero-image"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Fadi Hamad" />
            <div className="image-gradient"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <a href="#about">
          <div className="mouse"></div>
          <span>Scroll Down</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
