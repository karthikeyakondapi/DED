
import React from 'react';
import { motion } from 'framer-motion';
import Bunny from './Bunny';

interface Step2Props {
  onContinue: () => void;
}

const Step2: React.FC<Step2Props> = ({ onContinue }) => {
  return (
    <div className="glass-dark p-10 rounded-[40px] shadow-[0_0_40px_rgba(0,0,0,0.5)] text-center flex flex-col items-center border border-white/10">
      <Bunny mood="sad" />
      
      <motion.p 
        initial={{ scale: 0.2, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-white text-6xl font-black mt-8 mb-10 px-4 italic leading-tight tracking-tighter neon-glow select-none"
      >
        SO.....
      </motion.p>

      <motion.button
        whileHover={{ x: 5, scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
        whileTap={{ scale: 0.9 }}
        onClick={onContinue}
        className="bg-zinc-800 p-5 rounded-full shadow-md text-white border border-white/20 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Step2;
