// src/components/ContentArea.tsx
import { AnimatePresence, motion } from 'framer-motion';
import GiftContent from './GiftContent';
import WishContent from './WishContent';
import HeartContent from './HeartContent';
import { Tab } from './MainContent';

interface ContentAreaProps {
  activeTab: Tab;
}

export default function ContentArea({ activeTab }: ContentAreaProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === 'GIFT' && <GiftContent />}
        {activeTab === 'WISH' && <WishContent />}
        {activeTab === 'HEART' && <HeartContent />}
      </motion.div>
    </AnimatePresence>
  );
}