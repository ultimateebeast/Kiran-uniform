import React from 'react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="visit" className="contact-footer section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">Visit Kiran Uniform</h2>
            <p className="contact-desc">Most items available in-store. Visit today or check instantly.</p>
            
            <div className="contact-details">
              <div className="c-item">
                <MapPin className="c-icon" size={24} />
                <div>
                  <h4>Store Address</h4>
                  <p>Shop no 17, Neelgiri Complex, Ayodhya Road,<br/>Kailash Kunj, Block A, Indira Nagar,<br/>Lucknow, Uttar Pradesh 226016</p>
                </div>
              </div>

              <div className="c-item">
                <Phone className="c-icon" size={24} />
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:7619991755">+91 76199 91755</a></p>
                </div>
              </div>

              <div className="c-item">
                <Clock className="c-icon" size={24} />
                <div>
                  <h4>Store Timings</h4>
                  <p>Monday - Sunday<br/>10:30 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="https://wa.me/917619991755?text=Hi,%20I%20want%20to%20check%20availability%20for..." target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#25D366' }}>
                <MessageSquare size={18} /> WhatsApp Us
              </a>
              <a href="tel:7619991755" className="btn-secondary-dark" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-wrapper glass-panel">
              {/* Using a fixed generic maps embed link to avoid API key errors */}
              <iframe 
                src="https://maps.google.com/maps?q=Neelgiri%20Complex,%20Indira%20Nagar,%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kiran Uniform Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kiran Uniform. All rights reserved. Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
