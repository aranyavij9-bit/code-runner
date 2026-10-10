import { ArrowLeft } from 'lucide-react';

interface HowToPlayProps {
  onBack: () => void;
}

export function HowToPlayScreen({ onBack }: HowToPlayProps) {
  return (
    <div className="page">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="btn-ghost -ml-4 mb-8"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>

        <h1 className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight mb-2">HOW TO PLAY</h1>
        <div className="h-1 w-12 rounded-full bg-blush mb-8" />

        <div className="space-y-6">
          <Section
            label="MOVE"
            title="Navigate the System"
            keys={['W', 'A', 'S', 'D', '↑', '↓', '←', '→']}
            description="Use WASD or arrow keys to move your character through the grid. On mobile, use the touch control pad."
          />

          <Section
            label="INTERACT"
            title="Access Terminals"
            keys={['SPACE', 'CLICK']}
            description="Walk onto a terminal to automatically engage its puzzle interface. Solve the logic challenge to unlock the connected security gate."
          />

          <Section
            label="SOLVE"
            title="Complete Terminal Challenges"
            keys={[]}
            description="Each terminal presents a different puzzle type: sequence prediction, boolean logic, code debugging, pattern recognition, pathfinding, sorting, and conditional tracing. Wrong answers cost time and integrity — think carefully."
          />

          <Section
            label="COLLECT"
            title="Data Fragments"
            keys={[]}
            description="Golden data fragments are scattered across each level. Collect them for bonus score and combo multipliers. Some are placed in dangerous areas — risk vs reward."
          />

          <Section
            label="AVOID"
            title="Security Obstacles"
            keys={[]}
            description="Drones patrol set paths. Lasers and firewalls toggle on and off. Corruption zones slow you down. Security sweeps cross entire sections. Learn their patterns and time your movement."
          />

          <Section
            label="ESCAPE"
            title="Reach the Exit"
            keys={[]}
            description="Reach the green exit portal before the system collapses. Each level has a countdown timer — manage your time wisely. Complete all 5 stages to escape the system."
          />
        </div>

        <div className="mt-8 card p-4">
          <h3 className="font-display text-xl font-semibold text-navy mb-2">SCORING</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-body">
            <span>Puzzle Solved: +400</span>
            <span>Fragment: +100</span>
            <span>Combo Bonus: ×multiplier</span>
            <span>Time Bonus: +5/sec</span>
            <span>Damage: -5/HP</span>
            <span>Failed Puzzle: -50</span>
          </div>
        </div>

        <div className="mt-6 card p-4">
          <h3 className="font-display text-xl font-semibold text-danger mb-2">DAMAGE VALUES</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-body">
            <span>Drone Collision: -20%</span>
            <span>Laser Hit: -15%</span>
            <span>Firewall: -15%</span>
            <span>Security Sweep: -20%</span>
            <span>Failed Terminal: -5%</span>
            <span>Corruption: Slows</span>
          </div>
        </div>

        <button
          onClick={onBack}
          className="mt-8 w-full btn-primary"
        >
          Got it, back to menu
        </button>
      </div>
    </div>
  );
}

function Section({
  label,
  title,
  keys,
  description,
}: {
  label: string;
  title: string;
  keys: string[];
  description: string;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-blush uppercase tracking-widest">{label}</span>
        <div className="flex gap-1.5">
          {keys.map((k) => (
            <kbd
              key={k}
              className="px-2.5 py-1 bg-cream border border-line rounded-lg text-xs font-bold text-navy"
            >
              {k}
            </kbd>
          ))}
        </div>
      </div>
      <h3 className="font-display text-lg font-semibold text-navy mb-1">{title}</h3>
      <p className="text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}
