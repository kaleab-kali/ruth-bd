// src/components/CountdownTimer.tsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';

interface CountdownTimerProps {
  onComplete: () => void;
}

export default function CountdownTimer({ onComplete }: CountdownTimerProps) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Animated gradient border */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            borderColor: ['#ff80b5', '#ff4d8d', '#ff0066']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 rounded-full border-4"
          style={{
            background: 'conic-gradient(#ff80b5, #ff4d8d, #ff0066, #ff4d8d, #ff80b5)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)'
          }}
        />

        {/* Heart and number */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-48 h-48 flex items-center justify-center relative"
        >
          <FiHeart className="w-full h-full text-red-500" />
          <span className="absolute text-6xl font-bold text-white">{count}</span>
        </motion.div>
      </div>
    </div>
  );
}