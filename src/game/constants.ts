import type { Achievement } from './types';

export const CELL_SIZE = 36;

export const COLORS = {
  bg: '#FBF8F5',
  gridLine: '#EFEBF0',
  floor: '#FFFFFF',
  wall: '#B4BAD6',
  wallHighlight: '#CDD1E4',
  door: '#E6F6F0',
  doorLocked: '#FFF3E6',
  exit: '#28A27D',
  exitGlow: '#1E8466',
  player: '#4F8CF7',
  playerGlow: '#3A72DE',
  fragment: '#E9A23B',
  terminal: '#8E7CE8',
  terminalActive: '#B7A9F2',
  terminalSolved: '#28A27D',
  drone: '#E8507A',
  dronePath: '#F3B7C8',
  laser: '#E8507A',
  laserBeam: '#F48FAE',
  firewall: '#F6A35C',
  corruption: '#7A5FD8',
  sweep: '#F2709F',
  warning: '#F6A35C',
  danger: '#E8507A',
  success: '#28A27D',
  text: '#1F2850',
  textDim: '#7A82A6',
  accent: '#4F8CF7',
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_breach', name: 'First Breach', description: 'Complete your first level', icon: 'DoorOpen' },
  { id: 'clean_run', name: 'Clean Run', description: 'Complete a level without taking damage', icon: 'Shield' },
  { id: 'speed_runner', name: 'Speed Runner', description: 'Finish a level with 40%+ time remaining', icon: 'Gauge' },
  { id: 'debugger', name: 'Debugger', description: 'Solve 10 debugging challenges', icon: 'Bug' },
  { id: 'collector', name: 'Collector', description: 'Collect 50 data fragments', icon: 'Database' },
  { id: 'perfect_logic', name: 'Perfect Logic', description: 'Complete a level without a puzzle mistake', icon: 'Brain' },
  { id: 'combo_master', name: 'Combo Master', description: 'Reach a x5 combo', icon: 'Flame' },
  { id: 'system_escaped', name: 'System Escaped', description: 'Complete all 5 stages', icon: 'Rocket' },
];

export const STAGE_NAMES = [
  'INITIAL BREACH',
  'FIREWALL',
  'LOGIC LOCK',
  'CORRUPTION',
  'SYSTEM CORE',
];

export const DIFFICULTY_PARAMS = {
  // level: [cols, rows, timeLimit, numTerminals, numObstacles, numFragments, difficulty]
  1: { cols: 15, rows: 11, timeLimit: 90, terminals: 1, obstacles: 0, fragments: 4, difficulty: 1 },
  2: { cols: 17, rows: 13, timeLimit: 100, terminals: 2, obstacles: 2, fragments: 5, difficulty: 2 },
  3: { cols: 19, rows: 13, timeLimit: 110, terminals: 2, obstacles: 4, fragments: 6, difficulty: 3 },
  4: { cols: 21, rows: 15, timeLimit: 120, terminals: 3, obstacles: 6, fragments: 7, difficulty: 4 },
  5: { cols: 23, rows: 15, timeLimit: 140, terminals: 3, obstacles: 8, fragments: 8, difficulty: 5 },
};

export function getLevelParams(level: number) {
  if (level <= 5) return DIFFICULTY_PARAMS[level as 1 | 2 | 3 | 4 | 5];
  // procedural scaling beyond level 5
  const base = DIFFICULTY_PARAMS[5];
  const extra = level - 5;
  return {
    cols: Math.min(base.cols + extra * 2, 33),
    rows: Math.min(base.rows + extra, 21),
    timeLimit: Math.max(base.timeLimit - extra * 4, 60),
    terminals: Math.min(base.terminals + Math.floor(extra / 2), 5),
    obstacles: Math.min(base.obstacles + extra, 14),
    fragments: Math.min(base.fragments + extra, 12),
    difficulty: Math.min(base.difficulty + extra, 10),
  };
}
