import { useState } from 'react';
import type { PuzzleData, PuzzleType } from '@/game/types';
import { sfx } from '@/game/audio';

interface PuzzleModalProps {
  terminalId: number;
  nodeLabel: string;
  puzzleType: PuzzleType;
  puzzleData: PuzzleData;
  onSolve: (terminalId: number) => void;
  onFail: (terminalId: number) => void;
  onClose: () => void;
}

export function PuzzleModal({
  terminalId,
  nodeLabel,
  puzzleType,
  puzzleData,
  onSolve,
  onFail,
  onClose,
}: PuzzleModalProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [locked, setLocked] = useState(false);

  const handleSubmit = () => {
    if (selected === null || locked) return;
    setSubmitted(true);
    if (selected === puzzleData.answer) {
      sfx.puzzleSuccess();
      setTimeout(() => onSolve(terminalId), 800);
    } else {
      sfx.puzzleError();
      setLocked(true);
      setTimeout(() => {
        onFail(terminalId);
        setLocked(false);
        setSubmitted(false);
        setSelected(null);
      }, 1500);
    }
  };

  const isCorrect = submitted && selected === puzzleData.answer;
  const isWrong = submitted && selected !== null && selected !== puzzleData.answer;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/30 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white border border-line rounded-3xl max-w-lg w-full shadow-lift overflow-hidden">
        {/* Terminal header */}
        <div className="border-b border-line px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span className="font-display text-base font-semibold text-navy">{nodeLabel}</span>
          </div>
          <span className="text-xs font-bold text-blush bg-blush-tint rounded-full px-3 py-1 capitalize">
            {puzzleType}
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6">
          {/* Prompt */}
          <div className="bg-cream border border-line rounded-2xl p-4 mb-4">
            <pre className="font-mono text-sm text-navy whitespace-pre-wrap leading-relaxed">
              {puzzleData.prompt}
            </pre>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {puzzleData.options.map((opt, i) => {
              let cls = 'border-line bg-white hover:border-brand hover:bg-brand-tint';
              if (submitted && i === puzzleData.answer) {
                cls = 'border-success bg-success-tint';
              } else if (isWrong && i === selected) {
                cls = 'border-danger bg-danger-tint';
              } else if (selected === i && !submitted) {
                cls = 'border-brand bg-brand-tint';
              } else if (submitted) {
                cls = 'border-line bg-white opacity-50';
              }

              return (
                <button
                  key={i}
                  disabled={submitted}
                  onClick={() => {
                    setSelected(i);
                    sfx.click();
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all font-mono text-sm ${cls}`}
                >
                  <span className="text-muted font-sans font-bold mr-3">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="text-navy whitespace-pre-wrap">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isCorrect && (
            <div className="mt-4 text-center">
              <span className="font-display text-success text-xl font-semibold">
                Access granted
              </span>
            </div>
          )}
          {isWrong && (
            <div className="mt-4 text-center">
              <span className="font-display text-danger text-xl font-semibold">
                Access denied (time penalty)
              </span>
            </div>
          )}

          {/* Hint */}
          {showHint && !submitted && (
            <div className="mt-3 text-sm text-body bg-blush-tint rounded-xl px-4 py-3">
              <span className="font-bold text-blush">Hint:</span> {puzzleData.hint}
            </div>
          )}

          {/* Actions */}
          {!submitted && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setShowHint(!showHint);
                  sfx.click();
                }}
                className="px-4 py-2 text-sm font-semibold text-muted border border-line rounded-full hover:text-brand hover:border-brand transition-colors"
              >
                {showHint ? 'Hide Hint' : 'Hint'}
              </button>
              <button
                onClick={handleSubmit}
                disabled={selected === null}
                className="flex-1 px-4 py-2 text-sm font-bold text-white bg-brand rounded-full hover:bg-brand-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-semibold text-muted border border-line rounded-full hover:text-navy transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
