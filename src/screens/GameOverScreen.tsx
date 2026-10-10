import { RotateCcw, Play, Home, Skull } from 'lucide-react';
import type { GameStats } from '@/game/types';
import { STAGE_NAMES } from '@/game/constants';

interface GameOverScreenProps {
  stats: GameStats;
  level: number;
  onRetry: () => void;
  onNewRun: () => void;
  onMenu: () => void;
}

export function GameOverScreen({ stats, level, onRetry, onNewRun, onMenu }: GameOverScreenProps) {
  const accuracy = stats.puzzlesAttempted > 0
    ? Math.round((stats.puzzlesSolved / stats.puzzlesAttempted) * 100)
    : 0;
  const stageName = STAGE_NAMES[Math.min(level - 1, STAGE_NAMES.length - 1)] || `LEVEL ${level}`;

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 animate-fade-in">

      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Skull size={36} className="text-danger" />
        </div>

        <div className="text-xs font-bold text-blush uppercase tracking-widest mb-2">
          Connection lost
        </div>
        <h1 className="text-5xl sm:text-6xl font-semibold text-navy mb-3 tracking-tight">
          System failure
        </h1>
        <p className="text-muted mb-8">
          Your connection to the core was lost.
        </p>

        {/* Stats */}
        <div className="card p-6 mb-6 text-left">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <StatRow label="Final Score" value={stats.score.toLocaleString()} color="text-navy" />
            <StatRow label="Level Reached" value={stageName} color="text-brand" />
            <StatRow label="Fragments" value={String(stats.fragmentsCollected)} color="text-warning-dark" />
            <StatRow label="Puzzles Solved" value={String(stats.puzzlesSolved)} color="text-navy" />
            <StatRow label="Accuracy" value={`${accuracy}%`} color="text-navy" />
            <StatRow label="Damage Taken" value={String(stats.damageTaken)} color="text-danger" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onRetry}
            className="btn-primary"
          >
            <RotateCcw size={16} /> Try Again
          </button>
          <button
            onClick={onNewRun}
            className="btn-secondary"
          >
            <Play size={16} /> New Run
          </button>
          <button
            onClick={onMenu}
            className="btn-ghost py-3"
          >
            <Home size={16} /> Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <div className="eyebrow text-[10px]">{label}</div>
      <div className={`${color} font-display font-semibold text-lg`}>{value}</div>
    </div>
  );
}
