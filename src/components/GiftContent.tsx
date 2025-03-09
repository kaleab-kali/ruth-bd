// src/components/GiftContent.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'canvas-confetti';

const gifts = [
  { id: 1, message: "A box of chocolates 🍫" },
  { id: 2, message: "A fun day at Friendship Park 🌳" },
  { id: 3, message: "A fancy lunch at a nice restaurant 🍽️" },
  { id: 4, message: "A handwritten letter 💌" },
  { id: 5, message: "A surprise mystery box  🎁" },
  { id: 6, message: "A fun experience together—arcade, bowling, or VR! 🎮" },
];

const GiftBox = ({ id, message }: { id: number; message: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowCard(true);
      
      // Calculate position-based origin
      const col = (id - 1) % 2;
      const row = Math.floor((id - 1) / 2);
      Confetti({
        particleCount: 40,
        spread: 25,
        origin: { 
          x: (col * 0.45 + 0.25), 
          y: (row * 0.3 + 0.35)
        }
      });
    }
  };

  return (
    <div className="relative w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] flex items-center justify-center">
      {/* Gift Box Container */}
      <div onClick={handleOpen} className="relative">
        {/* Box Shadow */}
        <motion.div
          className="absolute w-[120px] h-[8px] bg-black/20 rounded-full bottom-[-10px] left-1/2 -translate-x-1/2"
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        
        {/* Main Box */}
        <div className="relative h-[60px] w-[90px] bg-[#e9c46a] sm:h-[70px] sm:w-[100px]">
          {/* Vertical Ribbon */}
          <div className="absolute w-[8px] h-full bg-[#e76f51] left-1/2 -translate-x-1/2" />
          
          {/* Lid with Tight Hinge */}
          <motion.div
            className="absolute w-[110px] h-[16px] bg-[#e9c46a] top-[-16px] left-[-5px] origin-top-left"
            animate={{
              rotate: isOpen ? -95 : 0,
            }}
            transition={{ 
              type: 'spring',
              stiffness: 250,
              damping: 15
            }}
          >
            {/* Lid Ribbon */}
            {/* <div className="absolute w-[8px] h-full bg-[#e76f51] left-[15px] -translate-x-1/2" /> */}
            {/* Twin Triangles */}
            <div className="absolute -top-[15px] left-[25px] flex gap-1">
              <div className="w-0 h-0 
                border-l-[10px] border-l-transparent
                border-r-[10px] border-r-transparent
                border-b-[15px] border-b-[#e76f51]" />
              <div className="w-0 h-0 
                border-l-[10px] border-l-transparent
                border-r-[10px] border-r-transparent
                border-b-[15px] border-b-[#e76f51]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pop-up Card */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute top-full left-1/2 -translate-x-1/2 z-20 w-[160px] p-2 bg-white rounded-sm shadow-md mt-2"
          >
            <div className="text-center">
              <p className="text-[#e76f51] text-sm font-medium mb-1">
                {message}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  setShowCard(false);
                }}
                className="text-sm px-3 py-1 bg-[#e76f51] text-white rounded-sm hover:bg-[#d1583a]"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function GiftContent() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[800px]">
        {gifts.map((gift) => (
          <div key={gift.id} className="flex items-center justify-center">
            <GiftBox id={gift.id} message={gift.message} />
          </div>
        ))}
      </div>
    </div>
  );
}