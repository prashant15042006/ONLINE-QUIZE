<<<<<<< HEAD
# Online Quize — Modern Real-Time Quiz System

A **production-ready, scalable online quiz platform** with real-time features, analytics, and modern UI. Similar to CodeChef, LeetCode Assessments, and Google Forms.

![Next.js](https://img.shields.io/badge/next.js-14.2-black?style=flat-square)
![React](https://img.shields.io/badge/react-18.2-61dafb?style=flat-square)
![Express.js](https://img.shields.io/badge/express.js-4.18-green?style=flat-square)
![Firebase](https://img.shields.io/badge/firebase-10.0-orange?style=flat-square)
![TypeScript](https://img.shields.io/badge/typescript-5.0-blue?style=flat-square)

---

## 🚀 Features

### Core
- ✅ **Real-Time Quiz Engine** — Live timer, instant validation, auto-submit
- ✅ **Multi-Auth** — Email, Google, GitHub (Firebase Auth)
- ✅ **10+ Quiz Categories** — GATE CS, OS, DBMS, Networks, DSA, etc.
- ✅ **6 Quiz Types** — Topic, Chapter, Subject-Wise, Mock Tests, Daily, Weekly
- ✅ **Question Levels** — Easy, Medium, Hard with marks/negative marks
- ✅ **Real-Time Multiplayer** — Live rooms, score broadcasts, rankings

### Advanced
- 📊 **Analytics Dashboard** — Accuracy, weak topics, performance graphs
- 🏆 **Leaderboard System** — Global, Daily, Weekly, Monthly, Subject-wise
- 🎖️ **Achievement System** — Badges, XP points, streaks, levels
- 🤖 **AI Features** (Scaffold ready) — Question generation, difficulty prediction
- 📱 **Mobile Responsive** — Glassmorphism UI, dark/light mode, smooth animations
- 🔒 **Security** — JWT auth, Firestore security rules, rate limiting

---

## 📁 Architecture

```
Online Quize (Monorepo)
├── frontend/                   # Next.js 14 App
│   ├── pages/                 # Routes (home, login, quiz, leaderboard)
│   ├── components/            # Reusable React components
│   ├── utils/                 # Firebase client, hooks
│   ├── styles/                # Global CSS + Tailwind
│   ├── public/                # Static assets
│   ├── package.json
│   ├── next.config.js
│   ├── tsconfig.json
│   └── .env.example
│
├── backend/                    # Express.js + Socket.IO
│   ├── src/
│   │   ├── server.ts          # Express + Socket.IO setup
│   │   ├── routes/            # API endpoints
│   │   └── utils/             # Firebase admin, helpers
│   ├── dist/                  # Compiled output
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── shared/                     # Shared types
│   └── types.ts
│
├── README.md
├── DEPLOYMENT.md              # Deployment guide
├── API.md                     # API documentation
└── .gitignore
=======
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
>>>>>>> 4babb50c6d0cc295aed7c04ee310d9f63883d7e4
```

---

<<<<<<< HEAD
## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14, React 18, TypeScript, Tailwind CSS |
| **Real-Time** | Socket.IO (client) |
| **Auth** | Firebase Authentication |
| **Database** | Firestore (NoSQL, real-time) |
| **Backend** | Express.js, Node.js, TypeScript |
| **Real-Time** | Socket.IO (server, WebSocket) |
| **Hosting** | Vercel (Frontend) + Render/Railway (Backend) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Firebase Account (free tier)
- npm/yarn

### 1. Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with Firebase credentials
npm install
npm run dev  # Runs on http://localhost:4000
```

### 2. Frontend Setup

```bash
cd frontend
cp .env.example .env.local
# Edit .env.local with Firebase config + backend URL
npm install
npm run dev  # Runs on http://localhost:3000
```

### 3. Try It Out
- Open http://localhost:3000
- Login with email or Google
- Try sample quiz or join live room

---

## 📚 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — Production deployment (Firebase, Vercel, Render)
- **[API.md](./API.md)** — Complete API reference (REST + WebSocket)
- **[shared/types.ts](./shared/types.ts)** — All TypeScript types

---

## 📊 Key Features Explained

### Real-Time Quiz Engine
- Live timer synchronized across multiplayer rooms via Socket.IO
- Auto-submit when timer ends
- Instant answer validation
- Question navigation (prev/next)
- Mark for review feature

### Multi-Auth
- Email/password with Firebase Auth
- Google OAuth
- GitHub (extendable)

### Real-Time Leaderboard
- Global, Daily, Weekly, Monthly rankings
- Subject-wise rankings
- Live score updates via WebSocket
- Rank calculation with Firestore

### Analytics
- Accuracy percentage
- Performance graphs
- Weak topic analysis
- Time spent per question

---

## 🔐 Security

- ✅ JWT validation on every request
- ✅ Firestore security rules (user data isolation)
- ✅ Rate limiting (100 req/min, 10 events/sec)
- ✅ Environment variables for secrets
- ✅ CORS configured for frontend origin

---

## 🛠️ Commands

**Backend**
```bash
npm run dev          # Dev server with hot reload
npm run build        # Compile TypeScript
npm run start        # Run compiled server
```

**Frontend**
```bash
npm run dev          # Dev server
npm run build        # Build for production
npm run start        # Run production build
=======
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
>>>>>>> 4babb50c6d0cc295aed7c04ee310d9f63883d7e4
```

---

<<<<<<< HEAD
## 📦 Extending

### Add New Quiz Category
1. Update `shared/types.ts` category enum
2. Create Firestore queries in backend routes
3. Add UI components in frontend

### Integrate AI
```typescript
// Generate explanations via OpenAI
import OpenAI from 'openai';

const completion = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: question }]
});
```

### Admin Panel
Create `frontend/pages/admin/` for:
- Question import (CSV)
- User management
- Quiz analytics

---

## 🚀 Production Deployment

### Backend (Render.com)
1. Push code to GitHub
2. Create Web Service in Render
3. Set environment variables
4. Auto-deploys on push

### Frontend (Vercel)
1. Connect GitHub repo
2. Set environment variables
3. Auto-deploys on push

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step guide.

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Firebase auth fails | Check `NEXT_PUBLIC_FIREBASE_*` in `.env.local` |
| Backend connection fails | Verify `NEXT_PUBLIC_BACKEND_URL` |
| Firestore slow | Create indexes for filtered queries |
| Socket.IO disconnect | Check CORS configuration |

---

## 📈 Roadmap

- [ ] Admin panel with question import
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] AI question generation
- [ ] Social features (teams, challenges)
- [ ] Payment integration (Stripe)
=======
## 🔒 Web3 & Blockchain Verification

ExamiQ features an on-chain style proof mechanism to prevent score tampering:
1. **Hash Generation**: Upon quiz submission, the system computes a SHA-256 hash incorporating the `userID`, `timestamp`, `score`, `totalQuestions`, and `questionIDs`.
2. **Verification Modal**: Users can click **Verify Certificate** to view their unique cryptographic hash proof and share verifiable proof of completion.
>>>>>>> 4babb50c6d0cc295aed7c04ee310d9f63883d7e4

---

## 🤝 Contributing

<<<<<<< HEAD
Contributions welcome! Fork, create feature branch, commit, push, and open PR.
=======
Contributions are always welcome! If you'd like to improve ExamiQ:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
>>>>>>> 4babb50c6d0cc295aed7c04ee310d9f63883d7e4

---

## 📄 License

<<<<<<< HEAD
MIT License — see LICENSE file

---

## 📞 Contact

- **Email**: krpra.dev@gmail.com
- **GitHub**: [@krpra](https://github.com/krpra)

---

**Built with ❤️ using modern web technologies.**
=======
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/prashant15042006">Prashant</a> for students & competitive exam aspirants worldwide.</sub>
</div>
>>>>>>> 4babb50c6d0cc295aed7c04ee310d9f63883d7e4
