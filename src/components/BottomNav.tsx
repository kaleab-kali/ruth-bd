// src/components/BottomNav.tsx
import { motion } from 'framer-motion';
import { FiGift, FiMessageCircle, FiHeart } from 'react-icons/fi';
import { Tab } from './MainContent';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-2 border border-white/20"
    >
      <div className="flex justify-around">
        {[
          { tab: 'GIFT', icon: FiGift },
          { tab: 'HEART', icon: FiHeart },
          { tab: 'WISH', icon: FiMessageCircle }
          
        ].map(({ tab, icon: Icon }) => (
          <motion.button
            key={tab}
            onClick={() => onTabChange(tab as Tab)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-xl transition-colors ${
              activeTab === tab ? 'bg-gradient-to-b from-pink-500 to-pink-600 text-white' : 'text-gray-600 hover:bg-pink-50'
            }`}
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7" />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}