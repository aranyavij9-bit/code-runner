import { ArrowLeft, Mail, School, Globe } from 'lucide-react';

interface StudentScreenProps {
  onBack: () => void;
}

export function StudentScreen({ onBack }: StudentScreenProps) {
  return (
    <div className="page">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="btn-ghost -ml-4 mb-6"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>

        <div className="text-xs font-bold text-blush uppercase tracking-widest mb-2">
          Project author
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight mb-6">STUDENT</h1>
        <div className="h-1 w-12 rounded-full bg-blush mb-8" />

        {/* Profile card */}
        <div className="card p-7 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-navy">Aranya Vij</h2>
              <p className="text-brand font-semibold text-sm mt-1">Computer Science Applicant</p>
              <div className="flex flex-col gap-1.5 mt-3 text-sm text-body">
                <span className="flex items-center gap-2">
                  <School size={14} className="text-muted" /> Redmond High School
                </span>
                <a
                  href="mailto:aranyavij9@gmail.com"
                  className="flex items-center gap-2 hover:text-brand transition-colors"
                >
                  <Mail size={14} className="text-muted" /> aranyavij9@gmail.com
                </a>
                <a
                  href="https://aranyavij.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand transition-colors"
                >
                  <Globe size={14} className="text-muted" /> aranyavij.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About the project */}
        <div className="card p-5 mb-6">
          <h3 className="font-display text-xl font-semibold text-navy mb-3">About the Project</h3>
          <blockquote className="font-display text-navy text-lg leading-relaxed italic border-l-2 border-blush pl-4">
            "I designed Escape Protocol as an experiment in combining computational thinking with
            interactive game mechanics. The project helped me explore procedural generation, game
            state management, logic systems, and player interaction."
          </blockquote>
        </div>

        {/* What I explored */}
        <div className="card p-5 mb-6">
          <h3 className="font-display text-xl font-semibold text-navy mb-3">What I Explored</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Procedural generation',
              'Game logic',
              'State management',
              'Algorithmic thinking',
              'Puzzle design',
              'Interactive systems',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-body"
              >
                <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Technical concepts */}
        <div className="card p-5">
          <h3 className="font-display text-xl font-semibold text-navy mb-3">Technical Concepts Implemented</h3>
          <div className="space-y-2 text-sm text-body">
            <Concept
              term="Procedural Level Generation"
              desc="Seeded RNG + BFS connectivity verification ensures every generated level is solvable."
            />
            <Concept
              term="Collision Detection"
              desc="Grid-based collision with continuous obstacle positioning for moving hazards."
            />
            <Concept
              term="State Management"
              desc="Centralized game state with React hooks managing screen transitions, stats, and persistence."
            />
            <Concept
              term="Logic Puzzle Engine"
              desc="Seven distinct puzzle generators using algorithmic construction (sequences, BFS pathfinding, sorting)."
            />
            <Concept
              term="Local Persistence"
              desc="Browser localStorage for profile, achievements, and leaderboard — no backend required."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Concept({ term, desc }: { term: string; desc: string }) {
  return (
    <div className="border-l-2 border-brand-tint pl-3">
      <span className="text-navy font-bold">{term}</span>
      <p className="text-xs text-muted mt-0.5">{desc}</p>
    </div>
  );
}
