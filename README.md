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
```

---

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
```

---

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

---

## 🤝 Contributing

Contributions welcome! Fork, create feature branch, commit, push, and open PR.

---

## 📄 License

MIT License — see LICENSE file

---

## 📞 Contact

- **Email**: krpra.dev@gmail.com
- **GitHub**: [@krpra](https://github.com/krpra)

---

**Built with ❤️ using modern web technologies.**
