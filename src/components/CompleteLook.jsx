import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './CompleteLook.css';

const CompleteLook = () => {
  return (
    <section id="complete-look" className="complete-look-section section-padding">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Complete Look
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            Perfectly matched sets for an impeccable school presence.
          </motion.p>
        </div>

        <div className="look-grid">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper">
            <div className="look-card">
              <img src="/images/look.png" alt="Boys Complete Look" loading="lazy" decoding="async" />
              <div className="look-info">
                <h3>Boys Standard Set</h3>
                <p>Shirt + Trousers + Tie + Belt</p>
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper">
            <div className="look-card">
              <img src="/images/skirt.png" alt="Girls Complete Look" loading="lazy" decoding="async" />
              <div className="look-info">
                <h3>Girls Standard Set</h3>
                <p>Shirt + Skirt + Tie + Belt</p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default CompleteLook;
