import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import GuidedFlow from './components/GuidedFlow';
import ProductExperience from './components/ProductExperience';
import CompleteLook from './components/CompleteLook';
import StoryScroll from './components/StoryScroll';
import TrustLayer from './components/TrustLayer';
import AboutOwner from './components/AboutOwner';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeYouVisit from './components/BeforeYouVisit';
import RealShopExperience from './components/RealShopExperience';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <main>
              {/* GuidedFlow is now floating, so it's placed within the Hero section visually, but rendered here */}
              <div style={{ position: 'relative' }}>
                <Hero />
                <GuidedFlow />
              </div>
              <ProductExperience />
              <CompleteLook />
              <StoryScroll />
              <TrustLayer />
              <WhyChooseUs />
              <BeforeYouVisit />
              <AboutOwner />
              <RealShopExperience />
              <Contact />
            </main>
            <FloatingWhatsApp />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
