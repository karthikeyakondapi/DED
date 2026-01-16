
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  const hearts = Array.from({ length: 15 });
  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 bg-[#000000] -z-10 overflow-hidden">
      {/* Animated Shifting Nebula */}
      <motion.div 
        animate={{
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.1, 0.25, 0.15, 0.1],
          x: ['-50%', '-48%', '-52%', '-50%'],
          y: ['-50%', '-52%', '-48%', '-50%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-rose-900/30 blur-[180px] rounded-full"
      />
      
      {/* Drifting Grid Effect */}
      <motion.div 
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Scanning Light Beam (Subtle Atmosphere) */}
      <motion.div 
        animate={{
          top: ['-100%', '200%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-rose-500/10 to-transparent h-[50vh] blur-[100px]"
      />

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.8, 1],
            y: [null, Math.random() * -100 + 'px']
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-500/20 select-none pointer-events-none drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: '110vh',
            scale: Math.random() * 0.4 + 0.3,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: '-20vh',
            rotate: Math.random() * 360 + 360,
            x: [null, (Math.random() - 0.5) * 100 + 'px']
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Background;
