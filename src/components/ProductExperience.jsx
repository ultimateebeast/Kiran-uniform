import React from 'react';
import { motion } from 'framer-motion';
import './ProductExperience.css';

const products = [
  { id: 1, name: 'Premium White Shirt', category: 'Upper Wear', img: '/images/shirt.png', desc: 'Crisp, comfortable, and durable poly-cotton blend required for daily wear.', discount: 'UP TO 20% OFF' },
  { id: 2, name: 'Navy Blue Skirt', category: 'Lower Wear', img: '/images/skirt.png', desc: 'Elegant pleated design with adjustable waist for perfect fit and comfort.', discount: 'UP TO 20% OFF' },
  { id: 3, name: 'Classic Trousers', category: 'Lower Wear', img: '/images/look.png', desc: 'Smart fit trousers designed for active students with reinforced stitching.', discount: 'UP TO 20% OFF' },
  { id: 4, name: 'Winter Blazer', category: 'Seasonal', img: '/images/hero.png', desc: 'Warm and stylish winter blazer with official school emblem compatibility.', discount: 'UP TO 20% OFF' },
  { id: 5, name: 'Premium Water Bottle', category: 'Accessories', img: '/images/bottle.png', desc: 'Insulated steel water bottle to keep hydration fresh all day long.', discount: '10% OFF' },
  { id: 6, name: 'Classic Tiffin Box', category: 'Accessories', img: '/images/tiffin.png', desc: 'Leak-proof stainless steel bento tiffin box.', discount: '10% OFF' },
  { id: 7, name: 'Sleek Pencil Box', category: 'Accessories', img: '/images/pencil.png', desc: 'Minimalist metallic casing for all essential stationery supplies.', discount: '10% OFF' },
  { id: 8, name: 'Ergonomic School Bag', category: 'Bags', img: '/images/bag.png', desc: 'Spacious, water-resistant heavy-duty backpack with spine support.', discount: 'UP TO 60% OFF' },
];

const ProductExperience = () => {
  return (
    <section id="products" className="product-experience-section section-padding">
      <div className="container">
        <div className="product-section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Collection
          </motion.h2>
          <motion.div 
            className="discover-line"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="product-grid-v2">
          {products.map((product, idx) => (
            <motion.article
              key={product.id}
              className="product-card-v2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="product-card-surface">
                <div className="card-perspective-wrapper">
                  <div className="p-image">
                    <img src={product.img} alt={product.name} loading="lazy" decoding="async" />
                    {product.discount && (
                      <div className="discount-badge">{product.discount}</div>
                    )}
                  </div>
                </div>
                <div className="p-info">
                  <span className="p-category">{product.category}</span>
                  <h3>{product.name}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductExperience;
