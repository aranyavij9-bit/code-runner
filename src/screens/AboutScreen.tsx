import { ArrowLeft } from 'lucide-react';

interface AboutScreenProps {
  onBack: () => void;
}

export function AboutScreen({ onBack }: AboutScreenProps) {
  return (
    <div className="page">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="btn-ghost -ml-4 mb-6"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>

        <h1 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight mb-2">ABOUT</h1>
        <div className="h-1 w-12 rounded-full bg-blush mb-8" />

        <Section title="Concept">
          <p className="text-body text-sm leading-relaxed">
            Code Runner: Escape Protocol is a browser-based arcade puzzle game that combines
            computational thinking with interactive game mechanics. The player is trapped inside a
            malfunctioning digital system and must navigate procedurally generated levels, solve
            logic puzzles at terminal stations, avoid security obstacles, and collect data fragments
            before the system collapses.
          </p>
          <p className="text-body text-sm leading-relaxed mt-3">
            The game was built as a Computer Science portfolio project to demonstrate procedural
            generation, state management, algorithmic thinking, and interactive system design in a
            playable format.
          </p>
        </Section>

        <Section title="Game Systems">
          <System
            name="Procedural Levels"
            desc="Each level is generated using a seeded random number generator. Wall clusters, terminals, obstacles, and collectibles are placed dynamically. BFS flood-fill verification ensures every level is solvable — no impossible layouts."
          />
          <System
            name="Puzzle Engine"
            desc="Seven puzzle types are generated algorithmically: arithmetic/geometric sequences, boolean logic evaluation, code debugging, pattern rotation, BFS pathfinding, sorting, and conditional tracing. Difficulty scales with level progression."
          />
          <System
            name="Collision System"
            desc="Grid-based movement with smooth interpolation. Obstacles use continuous positioning with proximity-based collision detection. Damage cooldown prevents instant-death from stationary hazards."
          />
          <System
            name="Scoring"
            desc="Multi-factor scoring: puzzle accuracy, data fragments, time bonus, combo multiplier, and damage penalty. Combo system rewards consecutive successful actions and resets on mistakes."
          />
          <System
            name="Progression"
            desc="Five named stages with increasing complexity: Initial Breach, Firewall, Logic Lock, Corruption, and System Core. Beyond stage 5, levels continue generating with scaling difficulty."
          />
        </Section>

        <Section title="Technical Concepts">
          <ul className="space-y-1.5 text-sm text-body">
            <li>• Seeded pseudo-random generation (LCG algorithm)</li>
            <li>• BFS flood-fill for connectivity verification</li>
            <li>• BFS shortest-path for pathfinding puzzles</li>
            <li>• RequestAnimationFrame game loop with delta-time</li>
            <li>• Canvas 2D rendering with particle effects</li>
            <li>• React hooks for state management</li>
            <li>• Browser localStorage for persistence</li>
            <li>• Web Audio API for procedural sound effects</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-5 mb-4">
      <h3 className="font-display text-xl font-semibold text-navy mb-3">{title}</h3>
      {children}
    </div>
  );
}

function System({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="text-navy text-sm font-bold mb-1">{name}</h4>
      <p className="text-body text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
