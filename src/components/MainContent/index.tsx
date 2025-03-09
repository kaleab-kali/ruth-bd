// src/components/MainContent/index.tsx
import { useState } from 'react';
import BottomNav from '../BottomNav';
import ContentArea from '../ContentArea';

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>('HEART');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 pb-24 md:pb-4 md:px-8 md:pt-6">
        <ContentArea activeTab={activeTab} />
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export type Tab = 'GIFT' | 'WISH' | 'HEART';