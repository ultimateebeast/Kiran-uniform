import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [note, setNote] = useState('');

  const handleWhatsApp = () => {
    if (!selectedSize) {
        alert("Please select a size first.");
        return;
    }
    const message = `Hi, I want to check availability:\n\n*Product:* ${selectedProduct.name}\n*Size:* ${selectedSize}\n*Note:* ${note || 'None'}\n*Location:* Website Inquiry\n\nPlease confirm availability.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917619991755?text=${encoded}`, '_blank');
  };

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
            <motion.div 
              key={product.id} 
              className="product-card-v2"
              onClick={() => { setSelectedProduct(product); setSelectedSize(''); setNote(''); }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card-perspective-wrapper">
                <div className="p-image">
                  <img src={product.img} alt={product.name} />
                  {product.discount && (
                    <div className="discount-badge">{product.discount}</div>
                  )}
                  <div className="p-overlay"><span>Check Availability</span></div>
                </div>
              </div>
              <div className="p-info">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="smart-modal luxury-modal"
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="close-modal" onClick={() => setSelectedProduct(null)}><X size={24} /></button>
              
              <div className="modal-content-grid">
                <div className="modal-image">
                  <img src={selectedProduct.img} alt={selectedProduct.name} />
                </div>
                <div className="modal-details">
                  <div className="brand-label">Kiran Uniform</div>
                  <h3>{selectedProduct.name}</h3>
                  <p className="modal-desc">{selectedProduct.desc}</p>
                  
                  <div className="form-group">
                    <label>Select Size</label>
                    <div className="size-selector">
                      {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <button 
                          key={size}
                          className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group pb-2">
                    <label>Optional Note</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Need for 5th class student" 
                      className="smart-input"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>

                  <button className="btn-primary w-full" onClick={handleWhatsApp}>
                    <MessageCircle size={20} /> Check Availability via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductExperience;
