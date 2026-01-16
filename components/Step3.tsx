
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bunny from './Bunny';

interface Step3Props {
  onContinue: () => void;
}

const messages = [
  {
    id: 0,
    text: "I messed up our meet... I am really sorry for that my bbgg..",
    icon: "😔"
  },
  {
    id: 1,
    text: "I promise it will not happen again..",
    icon: "🤝"
  },
  {
    id: 2,
    text: "Please forgive me my bbgg..",
    icon: "🥺"
  }
];

const Step3: React.FC<Step3Props> = ({ onContinue }) => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [viewedMessages, setViewedMessages] = useState<Set<number>>(new Set());

  const handleHeartClick = (index: number) => {
    setSelectedMessage(index);
    setViewedMessages(prev => new Set(prev).add(index));
  };

  const closePopUp = () => {
    setSelectedMessage(null);
  };

  const allViewed = viewedMessages.size === messages.length;

  return (
    <div className="relative glass-dark p-10 rounded-[40px] shadow-[0_0_40px_rgba(0,0,0,0.5)] text-center flex flex-col items-center min-h-[550px] border border-white/10 overflow-hidden">
      <div className="mt-4 mb-4">
        <Bunny mood="sad" />
      </div>

      <h2 className="text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase mb-8 opacity-70">
        Tap the hearts to see
      </h2>
      
      <div className="flex gap-8 mb-12 relative">
        {messages.map((m, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleHeartClick(i)}
            className={`text-5xl transition-all duration-300 relative ${
              viewedMessages.has(i) 
                ? 'opacity-100 drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]' 
                : 'opacity-30 hover:opacity-60'
            }`}
          >
            ❤️
            {viewedMessages.has(i) && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-zinc-900"
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Pop-up Card Layer */}
      <AnimatePresence>
        {selectedMessage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
            onClick={closePopUp}
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-[35px] shadow-2xl w-full max-w-[320px] text-center flex flex-col items-center border-4 border-rose-100"
            >
              <div className="text-5xl mb-6 bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center">
                {messages[selectedMessage].icon}
              </div>
              
              <p className="text-zinc-800 text-xl font-medium leading-relaxed italic mb-8">
                "{messages[selectedMessage].text}"
              </p>

              <button 
                onClick={closePopUp}
                className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto w-full flex flex-col items-center">
        {!allViewed && (
          <p className="text-zinc-500 text-xs mb-4 italic">Check all messages to continue...</p>
        )}
        
        <motion.button
          initial={false}
          animate={{
            opacity: allViewed ? 1 : 0.3,
            scale: allViewed ? 1 : 0.95,
            pointerEvents: allViewed ? 'auto' : 'none'
          }}
          whileHover={{ x: 5, scale: 1.05, backgroundColor: "#fff", color: "#000" }}
          whileTap={{ scale: 0.9 }}
          onClick={onContinue}
          className="bg-zinc-800 p-4 rounded-full shadow-lg text-white border border-white/10 flex items-center justify-center gap-3 px-10 font-black uppercase text-sm tracking-widest"
        >
          NEXT
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Step3;
