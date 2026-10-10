import { ArrowLeft, Trophy } from 'lucide-react';
import type { LeaderboardEntry } from '@/game/types';

interface LeaderboardScreenProps {
  entries: LeaderboardEntry[];
  onBack: () => void;
}

export function LeaderboardScreen({ entries, onBack }: LeaderboardScreenProps) {
  return (
    <div className="page">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="btn-ghost -ml-4 mb-6"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Trophy className="text-warning" size={28} />
          <h1 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight">LEADERBOARD</h1>
        </div>
        <div className="h-1 w-12 rounded-full bg-blush mb-2" />
        <p className="text-muted text-sm mb-6">Saved on this device only, not a global ranking.</p>

        {entries.length === 0 ? (
          <div className="card p-12 text-center">
            <Trophy size={40} className="mx-auto text-line mb-3" />
            <p className="text-muted text-sm">No runs recorded yet.</p>
            <p className="text-muted text-xs mt-1">Complete a run to appear on the leaderboard.</p>
          </div>
        ) : (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line eyebrow">
                  <th className="py-3 px-4 text-left">Rank</th>
                  <th className="py-3 px-4 text-left">Player</th>
                  <th className="py-3 px-4 text-right">Score</th>
                  <th className="py-3 px-4 text-center">Level</th>
                  <th className="py-3 px-4 text-right">Time</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, i) => (
                  <tr
                    key={i}
                    className={`border-b border-line last:border-0 transition-colors hover:bg-cream ${
                      i === 0 ? 'bg-brand-tint/60' : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <span
                        className={`font-bold ${
                          i === 0
                            ? 'text-navy'
                            : i === 1
                            ? 'text-brand'
                            : i === 2
                            ? 'text-blush'
                            : 'text-muted'
                        }`}
                      >
                        {i === 0 ? '#1' : i === 1 ? '#2' : i === 2 ? '#3' : `#${i + 1}`}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-navy font-semibold">{entry.name}</td>
                    <td className="py-3 px-4 text-right text-navy font-display font-semibold">
                      {entry.score.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-center text-body">{entry.level}</td>
                    <td className="py-3 px-4 text-right text-body">
                      {Math.floor(entry.time)}s
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
