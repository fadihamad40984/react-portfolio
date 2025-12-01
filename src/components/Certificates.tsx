import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack JavaScript Developer Nanodegree',
      issuer: 'Udacity',
      date: 'Online',
      description: 'Backend development with Node.js, built APIs using PostgreSQL and Express, professional resume writing, and Angular fundamentals for dynamic front-end applications',
      skills: ['Node.js', 'PostgreSQL', 'Express', 'Angular', 'REST APIs'],
      icon: '🚀',
      certificateImage: '/certificates/udacityfullstackcertificate.jpeg',
    },
    {
      title: 'Front-End Web Developer Nanodegree',
      issuer: 'Udacity',
      date: 'Online',
      description: 'Responsive design, JavaScript, APIs, performance optimization',
      skills: ['Responsive Design', 'JavaScript', 'APIs', 'Performance Optimization'],
      icon: '🎓',
      certificateImage: '/certificates/udacityfrontendcertificate.jpeg',
    },
    {
      title: 'Salesforce Developer Intern',
      issuer: 'ITG Software, Inc.',
      date: 'September 2025 - November 2025',
      description: 'Gained practical experience with Salesforce Commerce Cloud (SFCC) and B2C eCommerce. Completed 320 hours of training.',
      skills: ['Salesforce Commerce Cloud', 'B2C eCommerce', 'Storefront Development'],
      icon: '☁️',
      certificateImage: '/certificates/itgcertificate.jpeg',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-title">
          <h2>Certificates & Training</h2>
          <p>My professional development journey</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">
                    <FiAward /> {cert.issuer}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p>{cert.description}</p>
                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
                <button 
                  className="view-cert-btn"
                  onClick={() => window.open(cert.certificateImage, '_blank')}
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
