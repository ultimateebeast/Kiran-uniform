import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shirt, Info } from 'lucide-react';
import './GuidedFlow.css';

const GuidedFlow = () => {
  const options = [
    {
      id: 'full',
      icon: <Shirt size={24} />,
      title: 'Full Uniform',
      desc: 'Complete sets',
      action: () => document.getElementById('complete-look').scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'item',
      icon: <Search size={24} />,
      title: 'Specific Item',
      desc: 'Browse catalog',
      action: () => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'check',
      icon: <Info size={24} />,
      title: 'Just Exploring',
      desc: 'Store details',
      action: () => document.getElementById('visit').scrollIntoView({ behavior: 'smooth' })
    }
  ];

  return (
    <div className="guided-flow-wrapper">
      <motion.div 
        className="guided-flow-card glass-panel"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="guided-flow-header">
          <h3>Find What You Need</h3>
        </div>
        
        <div className="guided-flow-options">
          {options.map((opt, index) => (
            <div 
              key={opt.id} 
              className="flow-item"
              onClick={opt.action}
            >
              <div className="flow-icon">{opt.icon}</div>
              <div className="flow-text-group">
                <h4>{opt.title}</h4>
                <p>{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GuidedFlow;
