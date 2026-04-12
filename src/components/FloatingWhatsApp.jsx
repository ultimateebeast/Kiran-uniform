import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <div className="floating-wa-container">

      <div className="floating-stack">
        
        <a 
          href="tel:7619991755"
          className="floating-call-btn"
          title="Call Now"
        >
          <Phone size={24} />
        </a>

        <div className="wa-wrapper">
          <motion.div
            className="wa-tooltip"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <WhatsAppIcon size={20} color="#25D366" className="wa-tooltip-brand" aria-hidden />
            <span>Need help? Ask instantly</span>
          </motion.div>

          <a
            href="https://wa.me/917619991755?text=Hi,%20I'm%20looking%20for%20school%20uniforms..."
            target="_blank"
            rel="noreferrer"
            className="floating-wa-btn"
            aria-label="Chat on WhatsApp"
          >
            <div className="pulse-ring"></div>
            <div className="pulse-ring-2"></div>
            <WhatsAppIcon size={30} color="#ffffff" className="wa-icon" aria-hidden />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
