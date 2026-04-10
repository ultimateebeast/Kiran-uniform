import React from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList } from 'lucide-react';
import './BeforeYouVisit.css';

const BeforeYouVisit = () => {
  const tips = [
    { text: "Know your child's current size or bring an old uniform piece for precise reference." },
    { text: "Bring the specific requirement list provided by the school." },
    { text: "We accept all major payment methods including UPI and Cards." },
    { text: "Try to visit during early hours to avoid the Back-to-School rush." }
  ];

  return (
    <section className="before-visit-section section-padding">
      <div className="container">
        <div className="before-visit-grid">
          
          <motion.div 
            className="bv-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bv-badge"><ClipboardList size={18} /> Essential Checklist</div>
            <h2>Before You Visit</h2>
            <p className="bv-subtitle">To ensure a smooth and quick experience, we recommend keeping these points in mind before dropping by the store.</p>
            
            <ul className="bv-list">
              {tips.map((tip, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                >
                  <span className="check-icon"><Check size={20} /></span>
                  {tip.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bv-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bv-card-stack">
              <div className="bv-card-back"></div>
              <div className="bv-card-front overflow-hidden">
                <img src="/images/look.png" alt="Preparation" />
                <div className="bv-overlay-hint">Parents LOVE this feature ❤️</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BeforeYouVisit;
