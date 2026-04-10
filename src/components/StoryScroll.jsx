import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StoryScroll.css';

const StoryScroll = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Zoom in effect
  const filterBg = useTransform(scrollYProgress, [0.4, 0.8], ["brightness(0.5) blur(0px)", "brightness(0.2) blur(10px)"]);

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.7], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

  return (
    <section ref={containerRef} className="story-scroll-section">
      <div className="story-sticky-container">
        
        <motion.div 
          className="story-bg" 
          style={{ scale: scaleBg, filter: filterBg }}
        ></motion.div>

        <div className="story-content-wrapper">
          <motion.div className="story-step" style={{ opacity: opacity1, y: y1 }}>
            <span className="story-year">Phase I</span>
            <h2>Kid entering school</h2>
            <p>From the oversized first shirt to the excitement of a new journey.</p>
          </motion.div>

          <motion.div className="story-step" style={{ opacity: opacity2, y: y2 }}>
            <span className="story-year">Phase II</span>
            <h2>Student growing</h2>
            <p>Through every class, every exam, we've designed for their comfort.</p>
          </motion.div>

          <motion.div className="story-step" style={{ opacity: opacity3, y: y3 }}>
            <motion.h2 
              className="highlight-text"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              "Every step matters."
            </motion.h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default StoryScroll;
