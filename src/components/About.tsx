import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = {
    frontend: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'WebSocket', level: 75 },
      { name: 'GraphQL', level: 70 },
    ],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    tools: ['Git/GitHub', 'Postman', 'Arduino', 'Multisim', 'Salesforce Commerce Cloud', 'Stripe API'],
    languages: ['C', 'C++', 'Java', 'SQL', 'JavaScript'],
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Professional Profile</h3>
            <p>
              Computer Engineering graduate with practical experience in full-stack web and mobile development. 
              Skilled in React Native, React, Flutter, Node.js and modern database systems, with strong capabilities 
              in RESTful API integration, debugging, and building scalable applications.
            </p>


            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4.5</span>
                <span className="stat-text">Years of Study</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">320</span>
                <span className="stat-text">Training Hours</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-text">Projects</span>
              </div>
            </div>

            <div className="competencies">
              <h4>💡 Core Competencies</h4>
              <ul className="competency-list">
                <li>Full-Stack Web & Mobile Development</li>
                <li>RESTful API Integration & Databases</li>
                <li>Problem Solving & Debugging</li>
                <li>Git & Version Control</li>
                <li>Team Collaboration & Agile</li>
              </ul>
            </div>

            <div className="education">
              <h4>🎓 Education</h4>
              <div className="education-item">
                <h5>B.Sc. in Computer Engineering</h5>
                <p className="university">An-Najah National University</p>
                <p className="duration">2021 - 2025 | GPA: 3.1/4</p>
                <p className="details">
                  Completed 162 credit hours over 4.5 years, including a half-year semester with 3 hours of training (320 hours).
                  Key Modules: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks.
                </p>
              </div>
            </div>

            <div className="experience">
              <h4>💼 Experience</h4>
              <div className="experience-item">
                <h5>Salesforce Developer Intern</h5>
                <p className="company">ITG Software, Inc.</p>
                <p className="duration">September 2025 - November 2025</p>
                <p className="details">
                  Gained practical experience with Salesforce Commerce Cloud (SFCC) and B2C eCommerce. 
                  Developed and customized eCommerce storefronts, workflows, and integrations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="skills-box">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="skills-box">
              <h3>Backend Development</h3>
              <div className="skills-list">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="skills-box">
              <h3>Databases & Tools</h3>
              <div className="skill-tags">
                {[...skills.databases, ...skills.tools].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="skills-box">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((lang) => (
                  <span key={lang} className="skill-tag">{lang}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
