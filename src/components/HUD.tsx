interface HUDProps {
  level: number;
  stageName: string;
  integrity: number;
  time: number;
  score: number;
  combo: number;
  fragmentsCollected: number;
  totalFragments: number;
  onPause: () => void;
}

export function HUD({
  level,
  stageName,
  integrity,
  time,
  score,
  combo,
  fragmentsCollected,
  totalFragments,
  onPause,
}: HUDProps) {
  const mins = Math.floor(Math.max(0, time) / 60);
  const secs = Math.floor(Math.max(0, time) % 60);
  const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;
  const timeWarn = time < 15;
  const integrityColor = integrity > 60 ? '#28A27D' : integrity > 30 ? '#F6A35C' : '#E8507A';

  return (
    <>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <div className="flex items-start justify-between p-3 gap-2 text-xs sm:text-sm">
          {/* Left: level + integrity */}
          <div className="flex flex-col gap-1.5">
            <div className="bg-white/95 border border-line rounded-2xl shadow-soft px-3 py-1.5">
              <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Level {level}</div>
              <div className="font-display text-navy font-semibold text-sm">{stageName}</div>
            </div>
            <div className="bg-white/95 border border-line rounded-2xl shadow-soft px-3 py-1.5">
              <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Integrity</div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-line rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${integrity}%`, backgroundColor: integrityColor }}
                  />
                </div>
                <span style={{ color: integrityColor }} className="font-bold tabular-nums">
                  {Math.ceil(integrity)}%
                </span>
              </div>
            </div>
          </div>

          {/* Center: time */}
          <div className="bg-white/95 border border-line rounded-2xl shadow-soft px-4 py-1.5 text-center">
            <div className="text-muted text-[10px] font-bold uppercase tracking-wider">System Collapse</div>
            <div
              className={`font-display font-semibold text-lg tabular-nums ${timeWarn ? 'text-danger' : 'text-navy'}`}
            >
              {timeStr}
            </div>
          </div>

          {/* Right: score + pause */}
          <div className="flex flex-col gap-1.5 items-end">
            <div className="flex gap-2">
              <div className="bg-white/95 border border-line rounded-2xl shadow-soft px-3 py-1.5 text-right">
                <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Score</div>
                <div className="font-display text-navy font-semibold tabular-nums text-sm">{score.toLocaleString()}</div>
              </div>
              <button
                onClick={onPause}
                className="pointer-events-auto bg-white/95 border border-line rounded-2xl shadow-soft px-3 py-1.5 text-muted hover:text-brand transition-colors flex items-center"
              >
                <span className="text-lg leading-none">II</span>
              </button>
            </div>
            <div className="bg-white/95 border border-line rounded-2xl shadow-soft px-3 py-1.5 text-right">
              <div className="text-muted text-[10px] font-bold uppercase tracking-wider">Fragments</div>
              <div className="font-display text-warning-dark font-semibold tabular-nums text-sm">
                {fragmentsCollected}/{totalFragments}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: combo */}
      {combo > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="bg-white/95 border border-blush/50 rounded-full shadow-soft px-5 py-2 text-center">
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Combo</span>
            <div className="font-display text-blush font-semibold text-xl tabular-nums">×{combo}</div>
          </div>
        </div>
      )}
    </>
  );
}
