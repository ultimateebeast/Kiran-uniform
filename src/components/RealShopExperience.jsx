import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './RealShopExperience.css';

const RealShopExperience = () => {
  return (
    <section className="shop-experience-section section-padding">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Real Store Experience
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            Step inside our Lucknow store. We pride ourselves on a well-organized, welcoming environment.
          </motion.p>
        </div>

        <motion.div 
          className="masonry-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="masonry-main warm-grain">
            <img src="/images/storefront.png" alt="Shop Storefront" loading="lazy" decoding="async" />
            <div className="masonry-badge"><MapPin size={16}/> Shop no 17, Neelgiri Complex</div>
          </div>
          <div className="masonry-side">
            <div className="masonry-img-wrapper warm-grain">
              <img src="/images/shop.png" alt="Accessories Shelf" loading="lazy" decoding="async" />
            </div>
            <div className="masonry-img-wrapper warm-grain">
              <img src="/images/skirt.png" alt="Uniform details" loading="lazy" decoding="async" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealShopExperience;
