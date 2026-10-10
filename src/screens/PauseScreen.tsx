import { Play, RotateCcw, BookOpen, Home } from 'lucide-react';

interface PauseScreenProps {
  onResume: () => void;
  onRestart: () => void;
  onHowToPlay: () => void;
  onQuit: () => void;
}

export function PauseScreen({ onResume, onRestart, onHowToPlay, onQuit }: PauseScreenProps) {
  return (
    <div className="fixed inset-0 z-40 bg-navy/30 backdrop-blur-sm animate-fade-in flex items-center justify-center p-6">
      <div className="card shadow-lift p-7 max-w-xs w-full">
        <div className="text-center mb-6">
          <div className="eyebrow mb-1">
            Game paused
          </div>
          <h2 className="text-3xl font-semibold text-navy">Paused</h2>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={onResume}
            className="btn-primary"
          >
            <Play size={16} /> Resume
          </button>
          <button
            onClick={onRestart}
            className="btn-secondary"
          >
            <RotateCcw size={16} /> Restart Level
          </button>
          <button
            onClick={onHowToPlay}
            className="btn-secondary"
          >
            <BookOpen size={16} /> How to Play
          </button>
          <button
            onClick={onQuit}
            className="btn-ghost py-3"
          >
            <Home size={16} /> Quit to Menu
          </button>
        </div>

        <p className="text-center text-muted text-xs mt-4">
          Press ESC to resume
        </p>
      </div>
    </div>
  );
}
