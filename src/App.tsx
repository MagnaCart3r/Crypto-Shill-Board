import { useState } from 'react';
import { LeaderboardHeader } from './components/LeaderboardHeader';
import { LeaderboardTable } from './components/LeaderboardTable';
import { LandingPage } from './components/LandingPage';
import { influencers } from './data';

export default function App() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {!showLeaderboard ? (
        <LandingPage onGetStarted={() => setShowLeaderboard(true)} />
      ) : (
        <div className={`
          max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8
          transform transition-all duration-500
          ${showLeaderboard ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <LeaderboardHeader onHome={() => setShowLeaderboard(false)} />
            <LeaderboardTable influencers={influencers} />
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>
              Note: This data is for demonstration purposes only. Always do your own research.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}