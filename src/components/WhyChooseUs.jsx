import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Scissors, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <ShieldCheck size={32} />, title: "Premium Quality", desc: "Fabrics that survive rough school days and 100+ washes." },
    { icon: <Scissors size={32} />, title: "All Sizes Perfected", desc: "No guess work. We have exact sizing for every student's age." },
    { icon: <HeartHandshake size={32} />, title: "Customer Obsessed", desc: "Years of relationship building across Lucknow." },
    { icon: <TrendingUp size={32} />, title: "Honest Pricing", desc: "Premium quality without the absurd markup." }
  ];

  return (
    <section className="why-choose-us section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Parents Trust Us</h2>
          <p className="section-subtitle">Beyond just threads and buttons, we offer peace of mind.</p>
        </motion.div>

        <div className="features-grid">
          {reasons.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
