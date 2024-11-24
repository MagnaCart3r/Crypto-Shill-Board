import { ArrowDown, Flame, TrendingUp } from 'lucide-react';
import type { Influencer } from '../types';

interface Props {
  influencers: Influencer[];
}

export function LeaderboardTable({ influencers }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="p-4 text-purple-300">Rank</th>
            <th className="p-4 text-purple-300">Influencer</th>
            <th className="p-4 text-purple-300">Total Shilled</th>
            <th className="p-4 text-purple-300">Rugged</th>
            <th className="p-4 text-purple-300">Successful</th>
            <th className="p-4 text-purple-300">Rug Rate</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((influencer, index) => (
            <tr 
              key={influencer.handle}
              className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <td className="p-4">
                <span className={`
                  inline-flex items-center justify-center w-8 h-8 rounded-full
                  ${index === 0 ? 'bg-yellow-500/20 text-yellow-300' : 
                    index === 1 ? 'bg-gray-400/20 text-gray-300' :
                    index === 2 ? 'bg-amber-700/20 text-amber-600' :
                    'bg-gray-800 text-gray-400'}
                `}>
                  {index + 1}
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={influencer.avatar}
                    alt={influencer.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="max-w-xs">
                    <div className="font-medium text-white">
                      {influencer.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {influencer.handle}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {influencer.bio}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-gray-300">{influencer.totalShilled}</td>
              <td className="p-4">
                <div className="flex items-center gap-2 text-red-400">
                  <Flame className="w-4 h-4" />
                  {influencer.rugged}
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2 text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  {influencer.successful}
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-red-400" />
                  <span className="text-red-400">{influencer.rugPercentage}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}