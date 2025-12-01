import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h3>Fadi Hamad</h3>
            <p>Full Stack Developer passionate about creating beautiful and functional web experiences.</p>
            <div className="footer-social">
              <a href="https://github.com/fadihamad40984" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/cefadihamad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/fadi.hamad.161/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 fadihamad40984@gmail.com</li>
              <li>📱 +972 595 778 769</li>
              <li>📍 Nablus, Palestine</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Fadi Hamad. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
