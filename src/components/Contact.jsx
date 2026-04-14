import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
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
                  <p>Shop no 17, Neelgiri Complex, Ayodhya Road,<br/> Block A, Indira Nagar,<br/>Lucknow, Uttar Pradesh 226016</p>
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
              <a href="https://wa.me/917619991755?text=Hi,%20I%20want%20to%20check%20availability%20for..." target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#25D366' }} aria-label="WhatsApp Us">
                <WhatsAppIcon size={22} color="#ffffff" aria-hidden />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:7619991755"
                className="btn-secondary-dark"
                style={{ borderColor: 'var(--white)', color: 'var(--white)' }}
                aria-label="Call Now"
              >
                <Phone size={22} strokeWidth={2} aria-hidden />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-wrapper glass-panel">
              {/* Using a fixed generic maps embed link to avoid API key errors */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9818227627006!2d80.97655209999999!3d26.872318599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd19b8f3b879%3A0x82fd365ed36ad56e!2sKiran%20Uniform%20(School%20Uniform%20Store)!5e0!3m2!1sen!2sin!4v1776198879527!5m2!1sen!2sin"
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
