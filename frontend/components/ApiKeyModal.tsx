import React, { useState, useEffect } from "react";
import { X, Key, CheckCircle2, Sparkles, Shield, AlertTriangle } from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveKey: (key: string, provider: string) => void;
  currentKey: string;
  currentProvider: string;
}

export default function ApiKeyModal({
  isOpen,
  onClose,
  onSaveKey,
  currentKey,
  currentProvider
}: ApiKeyModalProps) {
  const [apiKey, setApiKey] = useState("");
  const [provider, setProvider] = useState("gemini");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setApiKey(currentKey || "");
    setProvider(currentProvider || "gemini");
  }, [currentKey, currentProvider, isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveKey(apiKey.trim(), provider);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl p-6 border border-slate-800 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">AI API Key Settings</h3>
            <p className="text-xs text-slate-400">
              Enter your API key to enable unlimited AI quiz generation & explanations.
            </p>
          </div>
        </div>

        {showSuccess ? (
          <div className="py-8 flex flex-col items-center justify-center gap-3 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
            <p className="text-emerald-300 font-semibold text-sm">
              API Key saved successfully!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            {/* AI Provider Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Select AI Provider
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProvider("gemini")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    provider === "gemini"
                      ? "bg-indigo-600/20 border-indigo-500 text-white"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm mb-1">
                    <span>Google Gemini API</span>
                    {provider === "gemini" && <Sparkles className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400">Recommended (Free Tier Available)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setProvider("openai")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    provider === "openai"
                      ? "bg-indigo-600/20 border-indigo-500 text-white"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm mb-1">
                    <span>OpenAI / OpenRouter</span>
                    {provider === "openai" && <Sparkles className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400">GPT-3.5 / GPT-4 API</p>
                </button>
              </div>
            </div>

            {/* API Key Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={provider === "gemini" ? "AIzaSy..." : "sk-..."}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm font-mono"
              />
            </div>

            {/* Safety Disclaimer */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Your API key is stored securely in your browser session & environment. It is never logged or shared publicly.
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Save Key
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
