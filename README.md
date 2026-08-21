<div align="center">

  # ⚡ ExamiQ — Next-Gen AI & Web3 Quiz Platform

  <p align="center">
    <b>An ultra-modern, intelligent, exam preparation & assessment engine powered by Next.js 16, React 19, Google Gemini AI, KaTeX, and Web3 Blockchain Integrity.</b>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-environment-variables">AI & API Setup</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-blockchain-verification">Blockchain Integrity</a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/Google_Gemini_AI-0.24-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />
    <img src="https://img.shields.io/badge/Web3-Blockchain-F16822?style=for-the-badge&logo=ethereum&logoColor=white" alt="Web3 Blockchain" />
  </p>

</div>

---

## 🌟 Overview

**ExamiQ** is a state-of-the-art interactive quiz and learning platform designed to revolutionize competitive exam preparation (such as GATE CS/IT, Engineering Mathematics, General Aptitude, and Computer Science Core). 

Unlike static question-bank web applications, **ExamiQ** integrates **Google Gemini Artificial Intelligence** for step-by-step problem explanations, **live web-search quiz synthesis**, real-time **LaTeX mathematical rendering**, and **Web3 cryptographic blockchain hash verification** for result tamper-resistance.

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3>🤖 AI-Powered Explanations</h3>
      <p>Instant, detailed step-by-step solutions powered by <b>Google Gemini AI</b> with multi-provider fallbacks (Groq & OpenRouter). Breaks down complex concepts into digestible insights.</p>
    </td>
    <td width="50%">
      <h3>🌐 Dynamic AI Quiz Generator</h3>
      <p>Generate custom topic-focused quizzes on demand using real-time search queries and AI text synthesis for dynamic practice sessions.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>⛓️ Web3 & Blockchain Score Verification</h3>
      <p>Every completed test generates an immutable cryptographic hash stamp to verify score authenticity, timestamp, and attempt integrity on-chain.</p>
    </td>
    <td width="50%">
      <h3>📓 Smart Mistakes Notebook</h3>
      <p>Automatically records incorrectly answered questions with spaced revision mechanics to target individual learning gaps.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📐 Full LaTeX Math Rendering</h3>
      <p>Native formula display powered by <b>KaTeX</b>. Beautifully formats complex equations, matrices, integrals, and proofs in real-time.</p>
    </td>
    <td width="50%">
      <h3>📊 Performance Analytics & Dashboard</h3>
      <p>Comprehensive visual telemetry: accuracy charts, speed distribution, topic mastery levels, and weak-area breakdowns.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔖 Question Bookmarking & Revision</h3>
      <p>Save challenging questions with custom tag filters and bookmark lists for focused pre-exam revision.</p>
    </td>
    <td width="50%">
      <h3>🎯 Multi-Exam & Subject Hierarchy</h3>
      <p>Pre-loaded with official GATE CS/IT subjects, Engineering Math, Discrete Structures, Algorithms, OS, DBMS, Networks, and Aptitude.</p>
    </td>
  </tr>
</table>

---

## 🚀 Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Server-side rendering, API routes, and optimized routing |
| **UI Library** | [React 19](https://react.dev/) | Component architecture & client-side state management |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling with dynamic glassmorphism dark theme |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end static type safety |
| **AI Integration** | [@google/generative-ai](https://ai.google.dev/) | Google Gemini API for intelligent explanations & quiz synthesis |
| **Math Engine** | [KaTeX](https://katex.org/) | High-speed mathematical expression rendering |
| **Web3 / Integrity** | Custom Crypto Hash Ledger | Decentralized result audit trail & verification modals |
| **State Persistence** | LocalStorage / Indexed UserStore | Client-side attempt tracking, bookmarks, and notebook data |

---

## 📂 Project Structure

```
quiz-app/
├── public/                     # Static graphics, SVG icons & web assets
├── src/
│   ├── app/                    # Next.js App Router structure
│   │   ├── api/
│   │   │   ├── ai-explain/          # Gemini AI question solution generator API
│   │   │   ├── ai-generate-quiz/    # Custom topic quiz generation endpoint
│   │   │   └── live-questions/      # Real-time web search question fetcher
│   │   ├── globals.css              # Global styles & Tailwind CSS v4 directives
│   │   ├── layout.tsx               # Root application layout & metadata
│   │   └── page.tsx                 # Main Dashboard & Quiz Interface
│   ├── components/             # Reusable UI Components
│   │   ├── AIExplainModal.tsx              # Interactive AI explanation dialog
│   │   ├── AIQuizGeneratorModal.tsx        # Topic-based AI quiz creator
│   │   ├── BlockchainVerificationModal.tsx # Web3 proof & certificate viewer
│   │   ├── BookmarksModal.tsx              # Saved questions drawer
│   │   ├── MistakesNotebookModal.tsx       # Incorrect answer revision system
│   │   └── PerformanceAnalyticsView.tsx    # Telemetry & score charts
│   ├── data/
│   │   └── quizData.ts          # Comprehensive syllabus, exams & question bank
│   └── lib/
│       ├── blockchain.ts            # Web3 hashing & cryptographic verification
│       ├── liveSearchQuizEngine.ts  # Dynamic web search quiz engine
│       └── userStore.ts             # Local user storage, history & state manager
├── gen_pyq.py                  # Python PYQ question generator & dataset parser
├── render.yaml                 # Render deployment configuration
├── vercel.json                 # Vercel deployment configuration
├── package.json                # Project dependencies & scripts
└── README.md                   # Repository documentation
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (Node `v20+` recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### 1. Clone the Repository

```bash
git clone https://github.com/prashant15042006/ONLINE-QUIZE.git
cd ONLINE-QUIZE/quiz-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the `quiz-app` directory by copying `.env.example`:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your API keys:

```env
# Google Gemini API (Primary Engine)
GEMINI_API_KEY=your_gemini_api_key_here

# Groq API (Fallback Engine - Optional)
GROQ_API_KEY=your_groq_api_key_here

# OpenRouter API (Fallback Engine - Optional)
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

> [!TIP]
> You can get a free Google Gemini API key from [Google AI Studio](https://aistudio.google.com/).

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to launch **ExamiQ**.

---

## ⚡ Build & Production

To build the application for production:

```bash
npm run build
npm run start
```

---

## 🔒 Web3 & Blockchain Verification

ExamiQ features an on-chain style proof mechanism to prevent score tampering:
1. **Hash Generation**: Upon quiz submission, the system computes a SHA-256 hash incorporating the `userID`, `timestamp`, `score`, `totalQuestions`, and `questionIDs`.
2. **Verification Modal**: Users can click **Verify Certificate** to view their unique cryptographic hash proof and share verifiable proof of completion.

---

## 🤝 Contributing

Contributions are always welcome! If you'd like to improve ExamiQ:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/prashant15042006">Prashant</a> for students & competitive exam aspirants worldwide.</sub>
</div>
