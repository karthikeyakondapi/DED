
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bunny from './Bunny';

interface Step1Props {
  onContinue: () => void;
}

const Step1: React.FC<Step1Props> = ({ onContinue }) => {
  const [showQR, setShowQR] = useState(false);
  const currentUrl = window.location.href;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&bgcolor=0-0-0&color=f43f5e`;

  return (
    <div className="relative glass-dark p-10 rounded-[40px] shadow-[0_0_40px_rgba(0,0,0,0.5)] text-center flex flex-col items-center border border-white/10">
      {/* Help/QR Button */}
      <button 
        onClick={() => setShowQR(true)}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-zinc-500 hover:text-rose-400 group"
        title="Get QR code to send"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      </button>

      <Bunny mood="normal" />
      
      <h1 className="text-4xl font-black text-rose-500 mt-8 mb-4 neon-glow tracking-tighter uppercase">
        Hi baby
      </h1>
      
      <p className="text-zinc-300 text-lg leading-relaxed mb-10 px-4 font-light tracking-wide">
        Can we talk for a moment?<br/>There's something important I want to tell you.
      </p>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(244,63,94,0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="bg-white text-black font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 text-xl tracking-tighter"
      >
        CONTINUE
      </motion.button>

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-zinc-900 border border-white/10 p-8 rounded-[40px] max-w-xs w-full text-center relative"
            >
              <button 
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
                </svg>
              </button>
              
              <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Send this Scanner</h3>
              
              <div className="bg-white p-4 rounded-3xl mb-6 inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
              </div>
              
              <p className="text-zinc-500 text-xs italic">
                Screenshot this code and send it to her.<br/>When she scans it, she'll see your message.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Step1;
