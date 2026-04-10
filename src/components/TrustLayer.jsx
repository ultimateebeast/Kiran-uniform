import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, CheckCircle } from 'lucide-react';
import './TrustLayer.css';

const TrustLayer = () => {
  return (
    <section className="trust-layer-section section-padding">
      <div className="container">
        <motion.div 
          className="trust-banner glass-panel-dark"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trust-header">
            <h2>Trusted by Families<br/>Across Lucknow</h2>
            <p>Our commitment to quality speaks for itself.</p>
          </div>
          
          <div className="trust-metrics">
            <div className="metric-item">
              <div className="metric-icon glow-icon">
                <Star size={28} fill="currentColor" />
              </div>
              <h4>4.8 Rating</h4>
              <p>Consistently high reviews</p>
            </div>
            
            <div className="metric-item">
              <div className="metric-icon glow-icon"><Users size={32} /></div>
              <h4>1000+ Students</h4>
              <p>Dressed proudly every year</p>
            </div>
            
            <div className="metric-item">
              <div className="metric-icon glow-icon"><CheckCircle size={32} /></div>
              <h4>Since 1995</h4>
              <p>Years of unshakeable trust</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLayer;
