import React from 'react';
import { motion } from 'framer-motion';
import './AboutOwner.css';

const AboutOwner = () => {
  return (
    <section className="about-owner-section section-padding">
      <div className="container">
        <div className="owner-grid">
          <motion.div 
            className="owner-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/owner.png" alt="Kamal Jain - Owner" className="owner-img single-owner" />
            <div className="owner-name-plate glass-panel">
              <h4>Kamal Jain</h4>
              <p>Founder, Kiran Uniform</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="owner-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">Meet the Owner</h2>
            
            <div className="owner-quote">
              "We treat every student like our own."
            </div>
            
            <p className="owner-text">
              For decades, Kiran Uniform has stood as a pillar of reliability in Lucknow. 
              Our philosophy goes beyond just selling clothes—it's about preparing the next 
              generation for their future. 
            </p>
            <p className="owner-text">
              When a family walks into our store, they aren't just customers. They are 
              neighbors, friends, and the very future of our city. Ensuring your child 
              walks into school feeling confident, comfortable, and sharp is our ultimate mission.
            </p>

            <div className="signature">Kamal Jain</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
