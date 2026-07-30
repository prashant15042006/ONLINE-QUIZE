import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err: any) {
      setErrorMsg(err.message || "Login failed. Please check your credentials.");
    }
  }

  async function handleGoogle() {
    setErrorMsg("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/";
    } catch (err: any) {
      setErrorMsg(err.message || "Google login failed.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 mx-auto flex items-center justify-center shadow-lg shadow-indigo-500/25 mb-3">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Welcome to PrepAI</h2>
          <p className="text-xs text-slate-400">Sign in to track your test history and rank</p>
        </div>
        {errorMsg && (<div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-medium text-center">{errorMsg}</div>)}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Address</label>
            <div className="relative">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs font-medium pl-10" required />
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs font-medium pl-10" required />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-1.5">
            <span>Sign In</span><ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-800"></div>
          <span className="flex-shrink mx-4 text-[10px] text-slate-500 uppercase tracking-wider font-bold">Or continue with</span>
          <div className="flex-grow border-t border-slate-800"></div>
        </div>
        <button type="button" onClick={handleGoogle} className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2">
          Sign In with Google
        </button>
        <div className="text-center pt-2">
          <Link href="/" className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold">Back to Practice Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
