// src/App.tsx
import { useState} from 'react';
import { AnimatePresence } from 'framer-motion';
import CountdownTimer from './components/CountdownTimer';
import MainContent from './components/MainContent';

function App() {
  const [countdownFinished, setCountdownFinished] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50">
      <AnimatePresence mode="wait">
        {!countdownFinished ? (
          <CountdownTimer key="countdown" onComplete={() => setCountdownFinished(true)} />
        ) : (
          <MainContent key="main-content" />
        )}
      </AnimatePresence>
    </div>
  );

}


export default App;