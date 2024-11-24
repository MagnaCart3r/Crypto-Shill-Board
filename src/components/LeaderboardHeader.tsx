import { Trophy, Home } from 'lucide-react';

interface Props {
  onHome: () => void;
}

export function LeaderboardHeader({ onHome }: Props) {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-t-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            Carter Crypto Shill Leaderboard
          </h1>
          <p className="text-purple-200">
            Tracking influencers with the highest rug pull rates (Demo)
          </p>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={onHome}
            className="
              group flex items-center gap-2 px-4 py-2
              bg-purple-800/30 rounded-lg
              hover:bg-purple-800/50 transition-all duration-200
              text-purple-200 hover:text-white
            "
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>
          <div className="text-right">
            <p className="text-purple-200 text-sm">
              Data sourced from
            </p>
            <a 
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 transition-colors"
            >
              DexScreener
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}