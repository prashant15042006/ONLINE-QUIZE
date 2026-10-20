"use client";

import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScientificCalculatorModal({ isOpen, onClose }: Props) {
  const [display, setDisplay] = useState<string>("0");
  const [memory, setMemory] = useState<number>(0);
  const [isRad, setIsRad] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleNum = (n: string) => {
    setDisplay((prev) => (prev === "0" || prev === "Error" ? n : prev + n));
  };

  const handleOp = (op: string) => {
    setDisplay((prev) => {
      if (prev === "Error") return "0";
      return prev + op;
    });
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleBackspace = () => {
    setDisplay((prev) => {
      if (prev.length <= 1 || prev === "Error") return "0";
      return prev.slice(0, -1);
    });
  };

  const handleCalculate = () => {
    try {
      // Safe mathematical evaluation
      let expr = display
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, `${Math.PI}`)
        .replace(/e/g, `${Math.E}`)
        .replace(/\^/g, "**");

      // Handle custom functions if any
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${expr})`)();
      if (typeof result === "number" && !isNaN(result) && isFinite(result)) {
        setDisplay(Number(result.toFixed(8)).toString());
      } else {
        setDisplay("Error");
      }
    } catch {
      setDisplay("Error");
    }
  };

  const handleFunc = (fn: string) => {
    try {
      const val = parseFloat(display);
      if (isNaN(val)) return;
      let res = 0;
      const angle = isRad ? val : (val * Math.PI) / 180;

      switch (fn) {
        case "sin": res = Math.sin(angle); break;
        case "cos": res = Math.cos(angle); break;
        case "tan": res = Math.tan(angle); break;
        case "ln": res = Math.log(val); break;
        case "log10": res = Math.log10(val); break;
        case "sqrt": res = Math.sqrt(val); break;
        case "sqr": res = Math.pow(val, 2); break;
        case "cube": res = Math.pow(val, 3); break;
        case "inv": res = 1 / val; break;
        case "fact": {
          let f = 1;
          for (let i = 2; i <= Math.min(val, 20); i++) f *= i;
          res = f;
          break;
        }
        case "neg": res = -val; break;
        default: return;
      }
      setDisplay(Number(res.toFixed(8)).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-[#0f172a] border border-cyan-500/30 rounded-3xl max-w-sm w-full p-5 text-slate-100 shadow-2xl relative shadow-cyan-950/50">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧮</span>
            <div>
              <h3 className="font-extrabold text-white text-sm">GATE Virtual Calculator</h3>
              <p className="text-[10px] text-cyan-400 font-mono">Official Non-Programmable Simulator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer text-xs"
          >
            ✕
          </button>
        </div>

        {/* Display */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 mb-3 text-right">
          <div className="text-[10px] text-slate-500 font-mono flex justify-between">
            <span>{isRad ? "RAD" : "DEG"} | M={memory}</span>
            <span>GATE CSE</span>
          </div>
          <div className="text-xl sm:text-2xl font-mono font-black text-cyan-300 truncate tracking-wider py-1">
            {display}
          </div>
        </div>

        {/* Angle Mode & Memory */}
        <div className="grid grid-cols-4 gap-1.5 mb-2 text-xs">
          <button
            onClick={() => setIsRad(!isRad)}
            className={`py-1 rounded-lg font-bold text-[10px] border cursor-pointer ${
              isRad ? "bg-cyan-500/20 border-cyan-400 text-cyan-300" : "bg-slate-800 border-slate-700 text-slate-400"
            }`}
          >
            {isRad ? "RAD" : "DEG"}
          </button>
          <button
            onClick={() => setMemory(parseFloat(display) || 0)}
            className="py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-[10px] font-bold cursor-pointer"
          >
            MS
          </button>
          <button
            onClick={() => setDisplay((parseFloat(display) + memory).toString())}
            className="py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-[10px] font-bold cursor-pointer"
          >
            M+
          </button>
          <button
            onClick={() => setMemory(0)}
            className="py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-[10px] font-bold cursor-pointer"
          >
            MC
          </button>
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-5 gap-1.5 mb-2 text-[11px] font-mono font-bold">
          <button onClick={() => handleFunc("sin")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">sin</button>
          <button onClick={() => handleFunc("cos")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">cos</button>
          <button onClick={() => handleFunc("tan")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">tan</button>
          <button onClick={() => handleFunc("ln")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">ln</button>
          <button onClick={() => handleFunc("log10")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">log</button>

          <button onClick={() => handleFunc("sqrt")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">√x</button>
          <button onClick={() => handleFunc("sqr")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">x²</button>
          <button onClick={() => handleOp("^")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">x^y</button>
          <button onClick={() => handleFunc("inv")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">1/x</button>
          <button onClick={() => handleFunc("fact")} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 text-slate-300 cursor-pointer">n!</button>
        </div>

        {/* Numeric & Operators Pad */}
        <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
          <button onClick={handleClear} className="p-2.5 bg-rose-950/80 border border-rose-500/40 text-rose-300 rounded-xl cursor-pointer">C</button>
          <button onClick={handleBackspace} className="p-2.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl cursor-pointer">⌫</button>
          <button onClick={() => handleFunc("neg")} className="p-2.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl cursor-pointer">±</button>
          <button onClick={() => handleOp("÷")} className="p-2.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-xl cursor-pointer">÷</button>

          <button onClick={() => handleNum("7")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">7</button>
          <button onClick={() => handleNum("8")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">8</button>
          <button onClick={() => handleNum("9")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">9</button>
          <button onClick={() => handleOp("×")} className="p-2.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-xl cursor-pointer">×</button>

          <button onClick={() => handleNum("4")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">4</button>
          <button onClick={() => handleNum("5")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">5</button>
          <button onClick={() => handleNum("6")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">6</button>
          <button onClick={() => handleOp("-")} className="p-2.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-xl cursor-pointer">−</button>

          <button onClick={() => handleNum("1")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">1</button>
          <button onClick={() => handleNum("2")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">2</button>
          <button onClick={() => handleNum("3")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">3</button>
          <button onClick={() => handleOp("+")} className="p-2.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-xl cursor-pointer">+</button>

          <button onClick={() => handleNum("0")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer col-span-2">0</button>
          <button onClick={() => handleNum(".")} className="p-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl hover:bg-slate-800 cursor-pointer">.</button>
          <button onClick={handleCalculate} className="p-2.5 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 cursor-pointer shadow-lg shadow-emerald-500/30">=</button>
        </div>
      </div>
    </div>
  );
}
