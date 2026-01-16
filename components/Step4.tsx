
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bunny from './Bunny';

const HeartStream = () => {
  const [hearts, setHearts] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [...prev, Date.now()].slice(-12));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <AnimatePresence>
        {hearts.map(id => (
          <motion.div
            key={id}
            initial={{ x: -60, y: 35, opacity: 0, scale: 0 }}
            animate={{ 
              x: 120, 
              y: [35, -40, 35], 
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1.4, 0.6],
              rotate: [0, 15, -15, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 text-rose-500 text-3xl drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]"
            style={{ marginLeft: '-115px' }} // Start position near left bunny's right hand area
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const DustParticles = () => {
  const particles = useMemo(() => Array.from({ length: 20 }), []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[50px]">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-200/40 rounded-full blur-[1px]"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 10}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100 + 5}%`],
          }}
          transition={{ 
            duration: Math.random() * 10 + 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
};

const Step4: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto relative">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="pre-reveal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            className="glass-dark p-10 md:p-14 rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.8)] text-center flex flex-col items-center w-full border border-white/10 overflow-hidden"
          >
            <h1 className="font-cursive text-5xl text-rose-500 mb-12 neon-glow">From my heart...</h1>
            
            <div className="relative flex flex-row justify-center items-center gap-6 md:gap-14 mb-10">
              <HeartStream />
              
              <div className="bg-white/5 p-4 rounded-3xl border border-white/10 flex flex-col items-center relative z-10 overflow-visible">
                 <Bunny mood="sad" />
                 <p className="text-[10px] text-zinc-500 mt-2 font-black uppercase tracking-[0.2em]">ME</p>
              </div>
              <div className="bg-white/5 p-4 rounded-3xl border border-white/10 flex flex-col items-center relative z-10 overflow-visible">
                 <Bunny mood="happy" />
                 <p className="text-[10px] text-zinc-500 mt-2 font-black uppercase tracking-[0.2em]">YOU</p>
              </div>
            </div>

            <p className="text-zinc-500 text-sm mb-8 flex items-center gap-2 italic uppercase font-bold tracking-widest opacity-50">
              ↓ Tap to see message ↓
            </p>

            <motion.button
              key="button"
              onClick={() => setRevealed(true)}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              animate={{
                boxShadow: ["0px 0px 10px rgba(244,63,94,0.1)", "0px 0px 40px rgba(244,63,94,0.4)", "0px 0px 10px rgba(244,63,94,0.1)"],
                scale: [1, 1.03, 1]
              }}
              transition={{
                boxShadow: { repeat: Infinity, duration: 3 },
                scale: { repeat: Infinity, duration: 2 }
              }}
              className="bg-white text-black font-black py-6 px-14 rounded-[30px] shadow-2xl w-full text-2xl tracking-tighter uppercase"
            >
              I'M SORRY
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="relative w-full max-w-md mx-auto perspective-1000 cursor-pointer"
          >
            <DustParticles />
            
            <motion.div
              initial={{ opacity: 0, y: 200, rotateX: -90, scale: 0.3, transformOrigin: "bottom" }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0], 
                rotateX: 0, 
                scale: 1 
              }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 1,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                type: "spring", 
                stiffness: 35, 
                damping: 10,
                opacity: { duration: 0.5 },
                y: { 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut",
                  delay: 1 
                }
              }}
            >
              <motion.div 
                className="bg-[#fdf8e1] p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.6),_inset_0_0_100px_rgba(139,69,19,0.08)] rounded-sm relative border-l-[2px] border-r-[2px] border-amber-200"
                whileHover={{
                  boxShadow: "0_30px_100px_rgba(0,0,0,0.7),_inset_0_0_120px_rgba(139,69,19,0.12)"
                }}
                style={{
                  backgroundImage: 'radial-gradient(#fdf8e1 0%, #f7efca 100%)',
                  clipPath: 'polygon(1% 0%, 99% 1%, 100% 99%, 99% 100%, 1% 99%, 0% 1%)'
                }}
              >
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}></div>
                
                <div className="absolute top-4 left-0 right-0 flex justify-center opacity-30">
                  <span className="text-amber-900 text-3xl">❧</span>
                </div>

                <div className="relative z-10 space-y-10">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="font-cursive text-rose-600/90 text-3xl md:text-4xl text-center leading-[1.6]"
                  >
                    <p className="mb-8">Baby… I am so sorryyy for that day 🥺</p>
                    <p className="mb-8">Of course I’ll pay for anything 😔</p>
                    <motion.p 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-rose-700 font-black drop-shadow-sm mt-12 scale-110"
                    >
                      I love you foreverrrrrrr ❤️
                    </motion.p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ scale: 0, rotate: -45, y: 20 }}
                    animate={{ scale: 1, rotate: 0, y: 0 }}
                    transition={{ delay: 1.5, type: 'spring', damping: 10, stiffness: 60 }}
                    className="flex justify-center mt-14"
                  >
                    <div className="w-20 h-20 bg-rose-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-rose-900 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                      <span className="text-white text-3xl relative z-10 drop-shadow-lg">❤</span>
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]"></div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-30">
                  <span className="text-amber-900 text-3xl rotate-180">❧</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute -right-16 bottom-12 scale-90 hidden md:block drop-shadow-[0_0_20px_rgba(244,63,94,0.4)]"
              >
                <Bunny mood="happy" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Step4;
