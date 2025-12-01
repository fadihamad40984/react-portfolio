import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiGitBranch } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'SASS/SCSS/LESS'],
      color: '#4361ee',
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS & Android'],
      color: '#4cc9f0',
    },
    {
      icon: <FiDatabase />,
      title: 'Backend & Databases',
      skills: ['Node.js', 'REST APIs', 'GraphQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
      color: '#f72585',
    },
    {
      icon: <FiGitBranch />,
      title: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Salesforce Commerce Cloud', 'Arduino', 'Postman', 'Agile'],
      color: '#7209b7',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="skills-summary">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Technologies I work with</p>
        </div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="category-icon" style={{ background: `${category.color}15` }}>
                <span style={{ color: category.color }}>{category.icon}</span>
              </div>
              <h3>{category.title}</h3>
              <div className="category-skills">
                {category.skills.map((skill, i) => (
                  <span key={i} className="category-skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="languages-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3>💬 Languages</h3>
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-name">Arabic</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Good</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
