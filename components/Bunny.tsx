
import React from 'react';
import { motion } from 'framer-motion';

interface BunnyProps {
  mood?: 'happy' | 'sad' | 'normal';
}

const Bunny: React.FC<BunnyProps> = ({ mood = 'normal' }) => {
  const neonStroke = "rgba(244, 63, 94, 0.4)";
  
  return (
    <div className="relative w-40 h-48 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 200 250"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        animate={mood === 'happy' ? { y: [0, -8, 0], rotate: [0, -2, 2, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        {/* Ears */}
        <motion.ellipse
          cx="80" cy="45" rx="12" ry="35"
          fill="#fff"
          stroke={neonStroke}
          strokeWidth="3"
          animate={mood === 'sad' ? { rotate: [-15, -10, -15], y: [0, 5, 0] } : { rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.ellipse
          cx="120" cy="45" rx="12" ry="35"
          fill="#fff"
          stroke={neonStroke}
          strokeWidth="3"
          animate={mood === 'sad' ? { rotate: [15, 10, 15], y: [0, 5, 0] } : { rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        
        {/* Body */}
        <motion.ellipse 
          cx="100" cy="180" rx="45" ry="55" 
          fill="#fff" 
          stroke={neonStroke} 
          strokeWidth="3"
          animate={mood === 'happy' ? { scale: [1, 1.05, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Belly patch */}
        <ellipse cx="100" cy="190" rx="25" ry="30" fill="#fff5f7" />

        {/* Arms */}
        <motion.ellipse
          cx="55" cy="170" rx="12" ry="20"
          fill="#fff"
          stroke={neonStroke}
          strokeWidth="3"
          animate={mood === 'sad' ? { rotate: [20, 30, 20], x: [0, 5, 0] } : mood === 'happy' ? { rotate: [-40, -60, -40], y: [0, -10, 0] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.ellipse
          cx="145" cy="170" rx="12" ry="20"
          fill="#fff"
          stroke={neonStroke}
          strokeWidth="3"
          animate={mood === 'sad' ? { rotate: [-20, -30, -20], x: [0, -5, 0] } : mood === 'happy' ? { rotate: [40, 60, 40], y: [0, -10, 0] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Feet */}
        <ellipse cx="75" cy="235" rx="15" ry="10" fill="#fff" stroke={neonStroke} strokeWidth="3" />
        <ellipse cx="125" cy="235" rx="15" ry="10" fill="#fff" stroke={neonStroke} strokeWidth="3" />
        
        {/* Head */}
        <motion.circle 
          cx="100" cy="100" r="55" 
          fill="#fff" 
          stroke={neonStroke} 
          strokeWidth="3"
          animate={mood === 'sad' ? { y: [0, 3, 0] } : {}}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        
        {/* Eyes */}
        {mood === 'sad' ? (
          <>
            <motion.path d="M80 100 Q 90 90 100 100" fill="none" stroke="#222" strokeWidth="3" />
            <motion.path d="M110 100 Q 120 90 130 100" fill="none" stroke="#222" strokeWidth="3" />
            <motion.circle
              cx="85" cy="110" r="3" fill="#87CEEB"
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <motion.circle
              cx="115" cy="110" r="3" fill="#87CEEB"
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }}
            />
          </>
        ) : mood === 'happy' ? (
          <>
            <motion.path d="M80 105 Q 90 115 100 105" fill="none" stroke="#333" strokeWidth="3.5" />
            <motion.path d="M110 105 Q 120 115 130 105" fill="none" stroke="#333" strokeWidth="3.5" />
          </>
        ) : (
          <>
            <circle cx="85" cy="105" r="5.5" fill="#333" />
            <circle cx="115" cy="105" r="5.5" fill="#333" />
          </>
        )}

        {/* Cheeks */}
        <circle cx="75" cy="120" r="8" fill="#ffb7c5" opacity="0.6" />
        <circle cx="125" cy="120" r="8" fill="#ffb7c5" opacity="0.6" />

        {/* Nose */}
        <polygon points="95,115 105,115 100,122" fill="#ffb7c5" />

        {/* Mouth */}
        <path
          d={mood === 'sad' ? "M92 135 Q 100 128 108 135" : "M92 130 Q 100 140 108 130"}
          fill="none"
          stroke="#333"
          strokeWidth="2.5"
        />
      </motion.svg>

      {/* Floating Neons */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2].map((h) => (
          <motion.div
            key={h}
            className="absolute text-fuchsia-400 drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.2, 0.5],
              y: [-10, -60],
              x: h === 1 ? -40 : 40,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: h * 1.5,
              ease: "easeInOut",
            }}
            style={{
              top: '30%',
              left: '45%',
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bunny;
