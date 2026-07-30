import React, { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

interface ExamTimerProps {
  initialMinutes: number;
  onTimeUp: () => void;
  onTimeUpdate?: (secondsSpent: number) => void;
}

export default function ExamTimer({ initialMinutes, onTimeUp, onTimeUpdate }: ExamTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        const updated = prev - 1;
        if (onTimeUpdate) {
          onTimeUpdate(initialMinutes * 60 - updated);
        }
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialMinutes, onTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isWarning = secondsLeft < 120; // less than 2 mins

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${
        isWarning
          ? "bg-red-950/60 border-red-500/60 text-red-400 animate-pulse"
          : "bg-slate-900 border-slate-800 text-slate-200"
      }`}
    >
      {isWarning ? (
        <AlertTriangle className="w-4 h-4 text-red-400" />
      ) : (
        <Clock className="w-4 h-4 text-indigo-400" />
      )}
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
      <span className="text-[10px] text-slate-400 font-sans font-normal uppercase">
        Remaining
      </span>
    </div>
  );
}
