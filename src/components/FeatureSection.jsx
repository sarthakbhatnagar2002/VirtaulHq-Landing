import { useState } from "react";
import { motion } from "framer-motion";
import { features } from "../constants";

const FeatureSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="relative py-32 bg-gradient-to-r from-gray-950 to-black text-white font-mono overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Effortlessly Build and Customize{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Your Virtual Spaces
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Discover powerful features designed to revolutionize how your team collaborates in virtual environments.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`feature-card group relative p-6 border-2 transition-colors duration-300 cursor-pointer ${
                hoveredFeature === index 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                  : 'border-neutral-700'
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{ borderRadius: '0px' }}
            >
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex items-center justify-center w-16 h-16 mb-4 transition-all duration-500 ${
                    hoveredFeature === index
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-neutral-800 text-blue-400'
                  }`} 
                  style={{ borderRadius: '0px' }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.text}
                </h3>
                
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;