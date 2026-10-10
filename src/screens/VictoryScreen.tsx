import { Play, Award, Rocket, Home } from 'lucide-react';
import type { GameStats } from '@/game/types';

interface VictoryScreenProps {
  stats: GameStats;
  onPlayAgain: () => void;
  onNewRun: () => void;
  onAchievements: () => void;
  onMenu: () => void;
}

export function VictoryScreen({ stats, onPlayAgain, onNewRun, onAchievements, onMenu }: VictoryScreenProps) {
  const accuracy = stats.puzzlesAttempted > 0
    ? Math.round((stats.puzzlesSolved / stats.puzzlesAttempted) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 animate-fade-in">

      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Rocket size={36} className="text-brand" />
        </div>

        <div className="text-xs font-bold text-blush uppercase tracking-widest mb-2">
          Connection restored
        </div>
        <h1 className="text-5xl sm:text-6xl font-semibold text-navy mb-3 tracking-tight">
          System <em className="text-brand font-medium">escaped</em>
        </h1>
        <p className="text-muted mb-8">
          You broke through all 5 security layers.
        </p>

        {/* Stats */}
        <div className="card p-6 mb-6 text-left">
          <div className="space-y-3 text-sm">
            <ScoreRow label="Final Score" value={stats.score.toLocaleString()} color="text-navy" big />
            <div className="h-px bg-line my-2" />
            <ScoreRow label="Puzzles Solved" value={String(stats.puzzlesSolved)} color="text-navy" />
            <ScoreRow label="Puzzle Accuracy" value={`${accuracy}%`} color="text-navy" />
            <ScoreRow label="Fragments Collected" value={String(stats.fragmentsCollected)} color="text-warning-dark" />
            <ScoreRow label="Damage Taken" value={`${stats.damageTaken}`} color="text-danger" />
            <ScoreRow label="Max Combo" value={`×${stats.maxCombo}`} color="text-blush" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onPlayAgain}
            className="btn-primary"
          >
            <Play size={16} /> Play Again
          </button>
          <button
            onClick={onNewRun}
            className="btn-secondary"
          >
            <Rocket size={16} /> New Run
          </button>
          <div className="flex gap-2">
            <button
              onClick={onAchievements}
              className="flex-1 btn-ghost py-3"
            >
              <Award size={14} /> Achievements
            </button>
            <button
              onClick={onMenu}
              className="flex-1 btn-ghost py-3"
            >
              <Home size={14} /> Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreRow({ label, value, color, big }: { label: string; value: string; color: string; big?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="eyebrow">{label}</span>
      <span className={`${color} font-display font-semibold ${big ? 'text-3xl' : 'text-base'}`}>{value}</span>
    </div>
  );
}
