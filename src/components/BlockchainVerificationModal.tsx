"use client";

import React, { useState, useEffect } from "react";
import { getBlockchainLedger, verifyCertificateOnBlockchain, Block } from "../lib/blockchain";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialCertificateId?: string;
}

export default function BlockchainVerificationModal({ isOpen, onClose, initialCertificateId = "" }: Props) {
  const [searchQuery, setSearchQuery] = useState(initialCertificateId);
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean;
    block?: Block;
    message: string;
  } | null>(null);
  const [ledgerBlocks, setLedgerBlocks] = useState<Block[]>([]);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const blocks = getBlockchainLedger();
      setLedgerBlocks(blocks);
      if (initialCertificateId) {
        setSearchQuery(initialCertificateId);
        handleVerify(initialCertificateId);
      }
    }
  }, [isOpen, initialCertificateId]);

  const handleVerify = async (queryToUse?: string) => {
    const q = queryToUse !== undefined ? queryToUse : searchQuery;
    if (!q.trim()) return;
    const res = await verifyCertificateOnBlockchain(q);
    setVerificationResult(res);
  };

  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        setIsConnectingWallet(true);
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (err) {
        console.error("Wallet connect error:", err);
      } finally {
        setIsConnectingWallet(false);
      }
    } else {
      alert("MetaMask or Web3 Wallet not detected in browser. Using built-in MadiGO1 Cryptographic Proof-of-Quiz Ledger!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl max-w-3xl w-full p-6 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/30">
              🔗
            </div>
            <div>
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Blockchain Proof-of-Quiz (PoQ) Ledger
              </h2>
              <p className="text-xs text-slate-400">
                Immutable score verification & cryptographic certificates
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Web3 Wallet Connect Banner */}
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-sm font-semibold text-slate-200">Web3 Network Connection</div>
              <div className="text-xs text-slate-400">
                {walletAddress ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : "PoQ Mainnet: Active & Cryptographically Secured"}
              </div>
            </div>
          </div>
          <button
            onClick={connectWallet}
            disabled={isConnectingWallet}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-500/20 transition cursor-pointer"
          >
            {walletAddress ? "Connected ✓" : isConnectingWallet ? "Connecting..." : "Connect MetaMask Web3"}
          </button>
        </div>

        {/* Verification Search Bar */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Verify Certificate ID or Block Hash
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. CERT-GATE-CS-... or 0x7f8a..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={() => handleVerify()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              Verify Block
            </button>
          </div>
        </div>

        {/* Verification Result Card */}
        {verificationResult && (
          <div
            className={`p-5 rounded-xl border mb-6 ${
              verificationResult.isValid
                ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                : "bg-rose-950/40 border-rose-500/40 text-rose-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{verificationResult.isValid ? "✅" : "❌"}</span>
              <div>
                <h3 className="font-bold text-base">
                  {verificationResult.isValid ? "BLOCK VERIFIED AUTHENTIC" : "NOT FOUND / UNVERIFIED"}
                </h3>
                <p className="text-xs opacity-90">{verificationResult.message}</p>
              </div>
            </div>

            {verificationResult.block && (
              <div className="mt-4 pt-4 border-t border-emerald-500/20 text-xs font-mono space-y-2 bg-black/40 p-3 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-slate-400">Certificate ID:</span>
                  <span className="font-bold text-emerald-300">{verificationResult.block.data.certificateId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Block Hash:</span>
                  <span className="text-cyan-300 break-all">{verificationResult.block.hash}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Merkle Root:</span>
                  <span className="text-purple-300 break-all">{verificationResult.block.merkleRoot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Candidate Name:</span>
                  <span className="text-slate-200">{verificationResult.block.data.userName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Exam & Subject:</span>
                  <span className="text-slate-200">
                    {verificationResult.block.data.examName} - {verificationResult.block.data.subjectName} ({verificationResult.block.data.chapterName})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Score & Accuracy:</span>
                  <span className="text-amber-300 font-bold">
                    {verificationResult.block.data.score}/{verificationResult.block.data.totalQuestions} ({verificationResult.block.data.percentage}%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Timestamp:</span>
                  <span className="text-slate-400">{new Date(verificationResult.block.timestamp).toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Ledger Blocks History */}
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center justify-between">
            <span>Blockchain Ledger History ({ledgerBlocks.length} Blocks)</span>
            <span className="text-xs font-normal text-indigo-400">PoQ Consensus Network</span>
          </h3>

          {ledgerBlocks.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs bg-slate-950/60 rounded-xl border border-slate-800">
              No blocks mined yet. Complete a quiz to create your first Blockchain block!
            </div>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {ledgerBlocks.map((block) => (
                <div
                  key={block.hash}
                  onClick={() => {
                    setSearchQuery(block.data.certificateId);
                    handleVerify(block.data.certificateId);
                  }}
                  className="bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-3 text-xs cursor-pointer transition"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-indigo-400">Block #{block.index}</span>
                    <span className="text-slate-500 text-[10px]">
                      {new Date(block.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="text-slate-300 font-medium mb-1">
                    {block.data.userName} • {block.data.examName} ({block.data.score}/{block.data.totalQuestions})
                  </div>
                  <div className="font-mono text-[10px] text-cyan-400/80 truncate">
                    Hash: {block.hash}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
