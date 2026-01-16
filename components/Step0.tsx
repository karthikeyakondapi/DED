
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Step0Props {
  onComplete: () => void;
}

const Step0: React.FC<Step0Props> = ({ onComplete }) => {
  const [status, setStatus] = useState('Initializing Scanner...');
  const [progress, setProgress] = useState(0);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus('Scanning for My Love...'), 800);
    const timer2 = setTimeout(() => setStatus('Analyzing Heart Signature...'), 2000);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGranted(true);
          setStatus('ACCESS GRANTED');
          setTimeout(onComplete, 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Scanner Frame */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 border-2 border-rose-500/30 rounded-[60px] blur-[1px]"
        />
        
        {/* Heart Icon */}
        <motion.div
          animate={granted ? { scale: [1, 1.5, 1], filter: 'brightness(1.5)' } : { scale: [1, 1.1, 1] }}
          transition={{ duration: granted ? 0.5 : 2, repeat: granted ? 0 : Infinity }}
          className={`text-7xl ${granted ? 'text-rose-400' : 'text-rose-900/40'} transition-colors duration-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.3)]`}
        >
          ❤️
        </motion.div>

        {/* Scan Line */}
        {!granted && (
          <motion.div
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-4 right-4 h-0.5 bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,1)] z-20"
          />
        )}

        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-rose-500 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-rose-500 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-rose-500 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-rose-500 rounded-br-2xl" />
      </div>

      <div className="text-center space-y-4">
        <motion.h2 
          key={status}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-black tracking-[0.3em] uppercase ${granted ? 'text-rose-400 neon-glow' : 'text-zinc-500'}`}
        >
          {status}
        </motion.h2>

        <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden mx-auto">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-rose-600 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
          />
        </div>
      </div>

      {granted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-zinc-400 text-xs italic font-light animate-pulse"
        >
          Identity Verified. Welcome back.
        </motion.div>
      )}
    </div>
  );
};

export default Step0;
