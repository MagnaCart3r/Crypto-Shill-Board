import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20" />
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`
                absolute rounded-full mix-blend-screen filter blur-xl opacity-70
                animate-pulse-slow
                ${i % 2 === 0 ? 'bg-purple-500' : 'bg-indigo-500'}
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`
        relative z-10 text-center transform
        ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        transition-all duration-1000
      `}>
        <h1 className="text-6xl font-bold text-white mb-8 flex items-center justify-center gap-4">
          <Sparkles className="w-12 h-12 text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            Carter Crypto Shill Board
          </span>
        </h1>
        
        <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
          Track and analyze crypto influencers with the highest rug pull rates. Your gateway to understanding who's who in the crypto shilling game.
        </p>

        <button
          onClick={onGetStarted}
          className="
            group relative inline-flex items-center gap-2 px-8 py-4
            bg-gradient-to-r from-purple-600 to-indigo-600
            text-white font-semibold rounded-lg
            transform hover:scale-105 transition-all duration-200
            hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]
          "
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
        </button>
      </div>
    </div>
  );
}