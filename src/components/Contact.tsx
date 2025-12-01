import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // EmailJS configuration from your old project
      await emailjs.send(
        'service_us2fyzf',      // Your Service ID
        'template_gru51ti',     // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'fadihamad40984@gmail.com',
        },
        'lqz2D9PwjMH72CcRY'     // Your Public Key
      );

      setStatus('✅ Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('❌ Failed to send message. Please try again or email me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'fadihamad40984@gmail.com',
      link: 'mailto:fadihamad40984@gmail.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+972 595 778 769',
      link: 'tel:+972595778769',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Nablus, Palestine',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Build Something Amazing Together!</h3>
            <p>
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you need a full-stack developer, mobile app specialist, or technical consultant, I'm here to help 
              bring your ideas to life.
            </p>

            <div className="info-items">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-title">{info.title}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-badge">
              <span className="status-dot"></span>
              <span>Available for freelance opportunities</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            {status && (
              <div className="form-status">{status}</div>
            )}

            <button type="submit" className="btn submit-btn" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'} <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
