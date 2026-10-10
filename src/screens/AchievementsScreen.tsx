import { ArrowLeft, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { PlayerProfile } from '@/game/types';
import { ACHIEVEMENTS } from '@/game/constants';

interface AchievementsScreenProps {
  profile: PlayerProfile;
  onBack: () => void;
}

export function AchievementsScreen({ profile, onBack }: AchievementsScreenProps) {
  const earned = new Set(profile.achievements);
  const earnedCount = ACHIEVEMENTS.filter((a) => earned.has(a.id)).length;

  return (
    <div className="page">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="btn-ghost -ml-4 mb-6"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>

        <div className="flex items-baseline justify-between mb-6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight">ACHIEVEMENTS</h1>
          <span className="text-muted text-sm">
            {earnedCount}/{ACHIEVEMENTS.length}
          </span>
        </div>
        <div className="h-1 w-12 rounded-full bg-blush mb-2" />
        <div className="w-full h-2 bg-line rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-brand rounded-full transition-all"
            style={{ width: `${(earnedCount / ACHIEVEMENTS.length) * 100}%` }}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {ACHIEVEMENTS.map((ach) => {
            const isEarned = earned.has(ach.id);
            const IconComp = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[ach.icon] || LucideIcons.Award;
            return (
              <div
                key={ach.id}
                className={`flex items-center gap-4 p-5 rounded-3xl border transition-all ${
                  isEarned
                    ? 'bg-white border-brand/40 shadow-soft'
                    : 'bg-white/60 border-line opacity-70'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isEarned ? 'bg-brand-tint text-brand' : 'bg-cream text-muted'
                  }`}
                >
                  {isEarned ? <IconComp size={20} /> : <LucideIcons.Lock size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-bold ${isEarned ? 'text-navy' : 'text-muted'}`}>
                    {ach.name}
                  </h3>
                  <p className={`text-xs ${isEarned ? 'text-body' : 'text-muted'}`}>
                    {ach.description}
                  </p>
                </div>
                {isEarned && <Check size={16} className="text-success flex-shrink-0" />}
              </div>
            );
          })}
        </div>

        {/* Profile stats */}
        <div className="mt-8 card p-5">
          <h3 className="font-display text-xl font-semibold text-navy mb-4">PLAYER STATS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <Stat label="High Score" value={profile.highestScore.toLocaleString()} />
            <Stat label="Levels Done" value={String(profile.levelsCompleted)} />
            <Stat label="Fragments" value={String(profile.totalFragments)} />
            <Stat label="Puzzles Solved" value={String(profile.puzzlesSolved)} />
            <Stat label="Accuracy" value={`${Math.round(profile.puzzleAccuracy * 100)}%`} />
            <Stat label="Best Time" value={profile.bestTime > 0 ? `${profile.bestTime}s` : '—'} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow text-[10px]">{label}</div>
      <div className="font-display text-navy font-semibold text-2xl">{value}</div>
    </div>
  );
}
