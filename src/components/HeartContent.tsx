// src/components/HeartContent.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'canvas-confetti';

const messages = [
  {
    text: "Happy Birthday, Ruth! 🌹",
    type: "special",
    font: "font-dancing-script"
  },
  { text: "The moment you entered this world...", font: "font-cinzel" },
  { text: "The universe paused to admire its creation ✨", font: "font-cinzel" },
  { text: "A perfect blend of grace and brilliance 💫", font: "font-cinzel" },
  { text: "Your smile could outshine the sun 🌞", font: "font-cinzel" },
  { text: "Yet your heart radiates even warmer light 💖", font: "font-cinzel" },
  { text: "May this year bring you endless joy 🥂", font: "font-cinzel" },
  { text: "And moments as beautiful as you are 🌸", font: "font-cinzel" },
  { text: "Happy Birthday, Extraordinary Soul 🎠", font: "font-dancing-script" }
];

const HeartContent: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Confetti effect for special message
  const triggerConfetti = () => {
    Confetti({
      particleCount: 250,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#ec4899', '#f472b6'],
      gravity: 0.8
    });
  };

  useEffect(() => {
    if (stage === 0) {
      triggerConfetti();
    }
  }, [stage]);

 

  const renderSpecialMessage = () => (
    <motion.div
      key="special"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 max-w-[90vw]"
    >
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
        <motion.div
          className="text-4xl md:text-5xl lg:text-6xl font-bold break-words"
          style={{ fontFamily: "'Dancing Script', cursive, system-ui" }}
        >
          {messages[0].text.split(' ').map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="inline-block mr-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: wordIndex * 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="mt-4 text-3xl md:text-4xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🎀
      </motion.div>
    </motion.div>
  );

  const renderRegularMessage = (text: string, font: string) => (
    <motion.div
      key={text}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className={`${font} text-2xl md:text-3xl text-gray-700 text-center max-w-[90vw] leading-relaxed`}
    >
      {text.split(' ').map((word, wi) => (
        <motion.span
          key={wi}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: wi * 0.15 + 0.3 }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="h-screen w-full fixed top-0 left-0 bg-gradient-to-b from-rose-50 to-pink-100 overflow-hidden flex flex-col items-center justify-center p-4">
      <AnimatePresence mode='wait'>
        {stage === 0 ? (
          renderSpecialMessage()
        ) : (
          <div className="space-y-6">
            {renderRegularMessage(messages[stage].text, messages[stage].font)}
          </div>
        )}
      </AnimatePresence>

      {/* Floating petals */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl text-rose-300/40 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: 360,
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ❀
        </motion.div>
      ))}

      {/* Fixed progress indicators */}
      <div className="absolute bottom-40 flex gap-2 z-20">
        {messages.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i <= stage ? 'bg-rose-600' : 'bg-gray-300'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeartContent;