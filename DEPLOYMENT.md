# Online Quize — Deployment Guide

This guide covers setting up **Online Quize** for production on Firebase, Vercel, and Render/Railway.

## Prerequisites

- Firebase project (Firestore, Auth, Hosting)
- Vercel account (frontend)
- Render/Railway account (backend)
- GitHub repository (optional, for CI/CD)

---

## 1. Firebase Setup

### 1.1 Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create Project"
3. Name it "online-quize" (or similar)
4. Enable Google Analytics (optional)

### 1.2 Enable Firestore

1. In Firebase Console, go to **Build → Firestore Database**
2. Click **Create Database**
3. Choose **Start in test mode** (for development; set rules later)
4. Select a region close to your users
5. Click **Create**

### 1.3 Enable Firebase Authentication

1. Go to **Build → Authentication**
2. Click **Get Started**
3. Enable **Email/Password** provider
4. Enable **Google** provider (add OAuth consent screen)
5. (Optional) Enable other providers (GitHub, Microsoft, etc.)

### 1.4 Create Service Account for Backend

1. Go to **Project Settings → Service Accounts**
2. Click **Generate New Private Key**
3. Save the JSON file (contains `project_id`, `private_key`, `client_email`)
4. Copy values to `backend/.env`:
   ```
   FIREBASE_PROJECT_ID=...
   FIREBASE_CLIENT_EMAIL=...
   FIREBASE_PRIVATE_KEY=...
   FIREBASE_DATABASE_URL=https://[PROJECT_ID].firebaseio.com
   ```

### 1.5 Get Web Config for Frontend

1. Go to **Project Settings**
2. Scroll to "Your Apps" and select the web app
3. Copy the config:
   ```javascript
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     appId: "...",
   };
   ```
4. Set in `frontend/.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   NEXT_PUBLIC_BACKEND_URL=https://api.yourdomain.com
   ```

### 1.6 Firestore Security Rules

Create production security rules in Firebase Console under **Firestore → Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users: only read/write own profile
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId;
    }
    
    // Quizzes: anyone can read, only admins write
    match /quizzes/{document=**} {
      allow read: if true;
      allow write: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "admin";
    }
    
    // Results: users can read own, submit own
    match /results/{resultId} {
      allow read: if request.auth.uid == resource.data.userId;
      allow create: if request.auth.uid == request.resource.data.userId;
      allow update: if request.auth.uid == resource.data.userId && 
                       resource.data.status == "In Progress";
    }
    
    // Leaderboard: anyone can read
    match /leaderboard/{document=**} {
      allow read: if true;
      allow write: if false;
    }
    
    // Achievements: users can read own, backend writes
    match /achievements/{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

---

## 2. Backend Deployment (Render/Railway)

### 2.1 Using Render.com

1. **Create Render Account** and link GitHub
2. **Push code to GitHub** (create `OnlineQuize` repo)
3. **Create Web Service**:
   - Select repository and `backend` directory as root
   - Environment: Node
   - Build: `npm install && npm run build`
   - Start: `npm run start`
4. **Set Environment Variables** in Render dashboard:
   ```
   PORT=4000
   FIREBASE_PROJECT_ID=...
   FIREBASE_CLIENT_EMAIL=...
   FIREBASE_PRIVATE_KEY=...
   FIREBASE_DATABASE_URL=...
   JWT_SECRET=your-super-secret-key
   FRONTEND_ORIGIN=https://yourdomain.vercel.app
   ```
5. **Deploy** — Render auto-deploys on push to `main`

### 2.2 Using Railway.app

1. **Create Railway Account** and connect GitHub
2. **Create New Project** → Select repository
3. **Add Service** → Node.js
4. **Configure**:
   - Root directory: `backend`
   - Build: `npm install && npm run build`
   - Start: `npm run start`
5. **Set Variables** in Railway dashboard (same as above)
6. **Generate Domain** — Railway provides a public URL like `api-xyz.railway.app`

### 2.3 Update Frontend with Backend URL

Once backend is deployed, update `frontend/.env.local`:
```
NEXT_PUBLIC_BACKEND_URL=https://api-xyz.railway.app
```

---

## 3. Frontend Deployment (Vercel)

### 3.1 Deploy Next.js to Vercel

1. **Push to GitHub** (if not already)
2. **Go to [Vercel Dashboard](https://vercel.com)**
3. **Import Project** → Select `OnlineQuize` repo
4. **Select `frontend` directory** as Root Directory
5. **Environment Variables**:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   NEXT_PUBLIC_BACKEND_URL=https://api-xyz.railway.app
   ```
6. **Deploy** — Vercel auto-deploys on push

### 3.2 Custom Domain

1. In Vercel **Domains** tab, add custom domain
2. Update DNS records at your registrar
3. Vercel auto-provisions SSL

---

## 4. Local Development

### Backend

```bash
cd backend
npm install
# Create .env from .env.example
npm run dev
# Server runs on http://localhost:4000
```

### Frontend

```bash
cd frontend
npm install
# Create .env.local from .env.example
npm run dev
# App runs on http://localhost:3000
```

---

## 5. Database Structure

Create collections in Firestore (empty; data is written at runtime):

| Collection | Document | Fields |
|-----------|----------|--------|
| `users` | `{userId}` | `id`, `email`, `displayName`, `photoURL`, `createdAt`, `xpPoints`, `streak` |
| `quizzes` | `{quizId}` | `id`, `title`, `description`, `category`, `type`, `questions`, `timeLimit`, `passingScore`, `createdAt`, `createdBy` |
| `questions` | `{questionId}` | `question`, `options[]`, `correctAnswer`, `explanation`, `difficulty`, `subject`, `chapter`, `marks`, `negativeMarks` |
| `results` | `{resultId}` | `userId`, `quizId`, `answers`, `correctCount`, `wrongCount`, `accuracy`, `timeTaken`, `status`, `attemptAt` |
| `leaderboard` | `{timeframe}-{subject}` | `userId`, `displayName`, `score`, `rank`, `timeframe` |
| `achievements` | `{achievementId}` | `userId`, `badge`, `unlockedAt` |
| `notifications` | `{notificationId}` | `userId`, `title`, `message`, `type`, `read`, `createdAt` |

---

## 6. CI/CD Setup (GitHub Actions)

### Backend Tests (optional)

Create `.github/workflows/backend.yml`:

```yaml
name: Backend Build

on:
  push:
    branches: [main]
    paths: ['backend/**']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd backend && npm install && npm run build
```

### Frontend Tests (optional)

Create `.github/workflows/frontend.yml`:

```yaml
name: Frontend Build

on:
  push:
    branches: [main]
    paths: ['frontend/**']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd frontend && npm install && npm run build
```

---

## 7. Monitoring & Logging

### Firebase Monitoring
- Firestore usage: **Firebase Console → Firestore → Usage**
- Authentication: **Firebase Console → Authentication → Users**
- Functions logs: **Cloud Functions → Logs**

### Backend Logs (Render/Railway)
- Render: Dashboard → Service → Logs
- Railway: Dashboard → Service → Logs

### Frontend Monitoring (Vercel)
- Vercel Analytics: **Dashboard → Analytics**
- Error tracking: Vercel integrates Sentry (optional)

---

## 8. Scaling & Performance

### Firestore Indexing
For fast queries on quizzes (e.g., by category, difficulty):
- Go to **Firestore → Indexes**
- Create composite indexes for frequently filtered queries
- Example: `quizzes` index on `category` + `difficulty`

### Caching
- Frontend: Use SWR for data fetching and caching
- Backend: Add Redis cache layer (for leaderboards, hot quizzes)

### Real-time Updates
- Firestore listeners: Use `onSnapshot()` for real-time leaderboard updates
- Socket.IO: Used for live quiz rooms and score broadcasts

---

## 9. Troubleshooting

| Issue | Solution |
|-------|----------|
| Firebase auth not working | Check API key, domain whitelisting in Firebase Console |
| Firestore writes failing | Check security rules, user authentication |
| Socket.IO connection fails | Verify `NEXT_PUBLIC_BACKEND_URL` matches backend domain |
| Build fails on Vercel | Check `tsconfig.json`, ensure all imports are valid |
| Backend env vars not loading | Verify `.env` file exists and `dotenv` is initialized |

---

## 10. Production Checklist

- [ ] Firebase Firestore security rules set (not test mode)
- [ ] Firebase Authentication configured (email, Google, etc.)
- [ ] Backend deployed (Render/Railway with env vars)
- [ ] Frontend deployed (Vercel with env vars)
- [ ] Custom domain configured
- [ ] SSL certificates active
- [ ] Database indexes created for common queries
- [ ] Error tracking/logging enabled (Sentry, DataDog, etc.)
- [ ] Rate limiting configured on backend
- [ ] Admin panel deployed and secured
- [ ] Email notifications configured
- [ ] Backup strategy for Firestore data

---

## Next Steps

- **Extend Admin Panel** with question import (CSV/Excel)
- **Add AI Features** (OpenAI for explanation generation, difficulty prediction)
- **Implement Analytics Dashboard** (Charts.js, Chart library)
- **Add Multiplayer Mode** enhancements
- **Mobile App** (React Native / Flutter)
- **API Documentation** with Swagger/OpenAPI

---

**Questions? Join our [Discord Community](#) or open an Issue on GitHub.**
