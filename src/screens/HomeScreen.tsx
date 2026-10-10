import { useState } from 'react';
import {
  Terminal,
  Trophy,
  BookOpen,
  Award,
  User,
  Settings,
  Info,
  Volume2,
  VolumeX,
  ChevronRight,
  Play,
} from 'lucide-react';
import type { PlayerProfile } from '@/game/types';
import type { GameSettings } from '@/game/storage';
import { sfx } from '@/game/audio';

interface HomeScreenProps {
  profile: PlayerProfile;
  settings: GameSettings;
  onStart: () => void;
  onContinue: () => void;
  onNavigate: (screen: string) => void;
  onToggleSound: () => void;
  onUpdateName: (name: string) => void;
}

export function HomeScreen({
  profile,
  settings,
  onStart,
  onContinue,
  onNavigate,
  onToggleSound,
  onUpdateName,
}: HomeScreenProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);

  const handleClick = (action: () => void) => {
    action();
    sfx.click();
  };

  const secondaryButtons = [
    {
      label: 'How to Play',
      description: 'Learn the fundamentals',
      icon: BookOpen,
      action: () => onNavigate('how-to-play'),
    },
    {
      label: 'Achievements',
      description: 'View your progress',
      icon: Award,
      action: () => onNavigate('achievements'),
    },
    {
      label: 'Leaderboard',
      description: 'Compare local scores',
      icon: Trophy,
      action: () => onNavigate('leaderboard'),
    },
    {
      label: 'Student',
      description: 'Student profile',
      icon: User,
      action: () => onNavigate('student'),
    },
    {
      label: 'About',
      description: 'About Code Runner',
      icon: Info,
      action: () => onNavigate('about'),
    },
  ];

  const iconButton =
    'w-10 h-10 rounded-full border flex items-center justify-center transition-all';

  return (
    <div className="min-h-screen bg-cream text-body relative animate-fade-in">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5">
        <div>
          <div className="font-display text-lg font-semibold text-navy leading-tight">
            Code Runner
          </div>
          <div className="text-xs text-muted font-semibold">Escape Protocol</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onToggleSound();
              sfx.click();
            }}
            aria-label="Toggle sound"
            className={`${iconButton} border-line bg-white text-muted hover:text-brand hover:border-brand`}
          >
            {settings.soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>

          <button
            onClick={() => {
              setShowSettings(!showSettings);
              sfx.click();
            }}
            aria-label="Settings"
            className={`${iconButton} ${
              showSettings
                ? 'border-brand bg-brand-tint text-brand'
                : 'border-line bg-white text-muted hover:text-brand hover:border-brand'
            }`}
          >
            <Settings size={17} />
          </button>
        </div>
      </header>

      {/* Settings */}
      {showSettings && (
        <div className="absolute top-[76px] right-6 sm:right-10 z-30 w-[300px] card p-5 animate-fade-in">
          <div className="eyebrow mb-3">Player settings</div>
          <label className="block text-sm font-semibold text-navy mb-2">Player name</label>

          <div className="flex gap-2">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value.slice(0, 12))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onUpdateName(nameInput);
                  setShowSettings(false);
                  sfx.click();
                }
              }}
              className="flex-1 min-w-0 h-10 px-3 rounded-xl bg-cream border border-line text-sm text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand-tint transition-all"
              placeholder="RUNNER"
            />

            <button
              onClick={() => {
                onUpdateName(nameInput);
                setShowSettings(false);
                sfx.click();
              }}
              className="px-4 h-10 rounded-full bg-brand text-white text-sm font-bold hover:bg-brand-hover transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Main */}
      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {/* Hero */}
        <section className="grid lg:grid-cols-[1fr_300px] gap-6 items-stretch">
          <div className="card p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-tint text-xs font-bold text-blush mb-6">
              A computational thinking puzzle game
            </div>

            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-navy leading-[0.95]">
              Code <em className="text-brand font-medium">Runner</em>
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl text-muted font-normal">Escape Protocol</h2>

            <p className="mt-5 text-base text-body max-w-md leading-relaxed">
              Think fast. Debug faster. Complete the challenges, collect fragments, and escape
              the protocol.
            </p>

            {/* Primary actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={() => handleClick(onStart)} className="btn-primary group">
                <Play size={16} fill="currentColor" />
                Start New Run
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button onClick={() => handleClick(onContinue)} className="btn-secondary">
                <Terminal size={16} />
                Continue
              </button>
            </div>
          </div>

          {/* Player card */}
          <div className="card p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="eyebrow">Active runner</span>
                <span className="w-2 h-2 rounded-full bg-success" />
              </div>

              <div className="font-display text-2xl font-semibold text-navy truncate">
                {profile.name || 'RUNNER'}
              </div>
              <div className="text-sm text-muted">Player profile</div>
            </div>

            <div className="mt-8">
              <div className="eyebrow mb-1">Current status</div>
              <div className="text-sm text-body">Ready for deployment</div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4 mt-6">
          {[
            { label: 'Best Score', value: profile.highestScore.toLocaleString() },
            { label: 'Levels', value: String(profile.levelsCompleted) },
            { label: 'Fragments', value: String(profile.totalFragments) },
          ].map((s) => (
            <div key={s.label} className="card p-5">
              <div className="eyebrow">{s.label}</div>
              <div className="font-display text-3xl font-semibold text-navy mt-2 tabular-nums">
                {s.value}
              </div>
            </div>
          ))}
        </section>

        {/* Navigation */}
        <section className="mt-10">
          <div className="eyebrow mb-4">Explore</div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {secondaryButtons.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.action)}
                  className="group text-left card p-5 hover:-translate-y-0.5 hover:shadow-lift hover:border-brand/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-brand" />
                    <ChevronRight
                      size={14}
                      className="text-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                    />
                  </div>

                  <div className="mt-4 text-sm font-bold text-navy">{item.label}</div>
                  <div className="mt-1 text-xs text-muted leading-relaxed">{item.description}</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>Code Runner: Escape Protocol · v1.0</span>
          <span>
            Made by{' '}
            <a
              href="https://aranyavij.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:text-blush transition-colors"
            >
              Aranya Vij
            </a>
          </span>
        </footer>
      </main>
    </div>
  );
}
