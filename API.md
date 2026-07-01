# Online Quize — API Documentation

This document describes REST endpoints and Socket.IO events for the Online Quize backend.

---

## Base URL

- **Local**: `http://localhost:4000`
- **Production**: `https://api.your-domain.com`

---

## REST Endpoints

### Health Check

```http
GET /health
```

**Response:**
```json
{ "ok": true }
```

---

### Quizzes

#### Create Quiz (Admin)

```http
POST /api/quizzes
Content-Type: application/json
Authorization: Bearer {JWT_TOKEN}

{
  "title": "GATE CS 2024",
  "description": "Mock test for GATE CS exam",
  "category": "GATE CS",
  "type": "MockTest",
  "questions": [
    {
      "question": "What is the time complexity of binary search?",
      "options": ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      "correctAnswer": 1,
      "explanation": "Binary search halves the search space each iteration.",
      "difficulty": "Easy",
      "subject": "Data Structures",
      "chapter": "Searching",
      "marks": 1,
      "negativeMarks": -0.25
    }
  ],
  "timeLimit": 180,
  "passingScore": 50,
  "createdBy": "admin_user_id"
}
```

**Response:**
```json
{ "id": "quiz_abc123" }
```

**Status Codes:**
- `200` — Quiz created
- `400` — Invalid data
- `401` — Unauthorized (not admin)

---

#### Get Quiz by ID

```http
GET /api/quizzes/{quizId}
```

**Response:**
```json
{
  "id": "quiz_abc123",
  "title": "GATE CS 2024",
  "description": "...",
  "category": "GATE CS",
  "type": "MockTest",
  "questions": [...],
  "timeLimit": 180,
  "passingScore": 50,
  "createdAt": 1717680000000,
  "createdBy": "admin_user_id"
}
```

---

#### List Quizzes

```http
GET /api/quizzes?category=GATE CS&type=MockTest&limit=20&offset=0
```

**Query Params:**
- `category` (optional) — Filter by category
- `type` (optional) — Filter by quiz type
- `limit` (optional, default 20) — Number of results
- `offset` (optional, default 0) — Pagination offset

**Response:**
```json
{
  "quizzes": [...],
  "total": 100,
  "limit": 20,
  "offset": 0
}
```

---

#### Update Quiz (Admin)

```http
PUT /api/quizzes/{quizId}
Content-Type: application/json
Authorization: Bearer {JWT_TOKEN}

{
  "title": "GATE CS 2024 — Updated",
  "description": "..."
}
```

---

#### Delete Quiz (Admin)

```http
DELETE /api/quizzes/{quizId}
Authorization: Bearer {JWT_TOKEN}
```

---

### Results/Attempts

#### Submit Quiz Result

```http
POST /api/results
Content-Type: application/json
Authorization: Bearer {JWT_TOKEN}

{
  "userId": "user_123",
  "quizId": "quiz_abc123",
  "answers": [
    {
      "questionId": "q1",
      "selectedOption": 1,
      "isCorrect": true,
      "timeSpent": 45,
      "markedForReview": false
    },
    {
      "questionId": "q2",
      "selectedOption": null,
      "isCorrect": false,
      "timeSpent": 0,
      "markedForReview": false
    }
  ],
  "correctCount": 8,
  "wrongCount": 2,
  "skippedCount": 0,
  "totalMarks": 10,
  "obtainedMarks": 7,
  "accuracy": 80,
  "timeTaken": 900
}
```

**Response:**
```json
{
  "id": "result_xyz789",
  "userId": "user_123",
  "quizId": "quiz_abc123",
  "accuracy": 80,
  "obtainedMarks": 7,
  "status": "Submitted",
  "completedAt": 1717680060000
}
```

---

#### Get User Results

```http
GET /api/results?userId={userId}&limit=20
Authorization: Bearer {JWT_TOKEN}
```

**Response:**
```json
{
  "results": [...],
  "total": 50
}
```

---

### Leaderboard

#### Get Global Leaderboard

```http
GET /api/leaderboard/global?limit=100
```

**Response:**
```json
[
  {
    "userId": "user_123",
    "displayName": "John Doe",
    "photoURL": "https://...",
    "score": 9850,
    "rank": 1,
    "timeframe": "Global"
  },
  ...
]
```

---

#### Get Subject Leaderboard

```http
GET /api/leaderboard/subject/{subject}?timeframe=Weekly&limit=50
```

**Timeframe Options:** `Daily`, `Weekly`, `Monthly`, `Global`

---

### Users

#### Get User Profile

```http
GET /api/users/{userId}
Authorization: Bearer {JWT_TOKEN}
```

**Response:**
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "displayName": "John Doe",
  "photoURL": "https://...",
  "createdAt": 1717600000000,
  "xpPoints": 5000,
  "streak": 12
}
```

---

#### Update User Profile

```http
PUT /api/users/{userId}
Content-Type: application/json
Authorization: Bearer {JWT_TOKEN}

{
  "displayName": "John Doe Updated",
  "photoURL": "https://new-photo.jpg"
}
```

---

### Achievements

#### Get User Achievements

```http
GET /api/achievements/{userId}
Authorization: Bearer {JWT_TOKEN}
```

**Response:**
```json
[
  {
    "id": "ach_1",
    "userId": "user_123",
    "badge": "Streak10",
    "unlockedAt": 1717650000000
  },
  {
    "id": "ach_2",
    "userId": "user_123",
    "badge": "Accuracy95",
    "unlockedAt": 1717660000000
  }
]
```

---

## Socket.IO Events

### Real-Time Quiz Rooms

#### Client → Server

**Join Room**
```javascript
socket.emit('join-room', {
  roomId: 'room-gate-cs-001',
  user: {
    id: 'user_123',
    displayName: 'John Doe',
    photoURL: '...'
  }
});
```

**Answer Submitted**
```javascript
socket.emit('answer-submitted', {
  roomId: 'room-gate-cs-001',
  result: {
    userId: 'user_123',
    score: 85,
    correctCount: 17,
    wrongCount: 3
  }
});
```

**Leave Room**
```javascript
socket.emit('leave-room', {
  roomId: 'room-gate-cs-001',
  user: { id: 'user_123', displayName: 'John Doe' }
});
```

---

#### Server → Client

**Participant Joined**
```javascript
socket.on('participant-joined', {
  id: 'socket_xyz',
  user: { id: 'user_456', displayName: 'Jane' }
});
```

**Live Score Update**
```javascript
socket.on('live-score-update', {
  result: {
    userId: 'user_123',
    displayName: 'John Doe',
    score: 85,
    rank: 2
  }
});
```

**Participant Left**
```javascript
socket.on('participant-left', {
  id: 'socket_xyz',
  user: { id: 'user_456', displayName: 'Jane' }
});
```

**Timer Tick** (for real-time timer sync)
```javascript
socket.on('timer-update', {
  roomId: 'room-gate-cs-001',
  timeRemaining: 120
});
```

---

## Authentication

### JWT Token

Backend expects JWT token in `Authorization` header:

```
Authorization: Bearer {JWT_TOKEN}
```

**Token issued by:**
- Frontend: Firebase ID token (auto-attached via interceptor)
- Backend: Validates Firebase token server-side

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "error": "Error message here",
  "code": "ERROR_CODE"
}
```

**Common Codes:**
- `INVALID_INPUT` — Request body validation failed
- `UNAUTHORIZED` — Missing/invalid JWT token
- `FORBIDDEN` — Insufficient permissions (not admin)
- `NOT_FOUND` — Resource not found
- `CONFLICT` — Duplicate entry
- `INTERNAL_ERROR` — Server error

---

## Rate Limiting

- **Endpoints**: 100 requests per minute per IP
- **WebSocket**: 10 events per second per socket

If rate limit exceeded, returns `429 Too Many Requests`

---

## Example: Create Quiz & Join Room

### 1. Admin creates a quiz

```bash
curl -X POST http://localhost:4000/api/quizzes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {JWT_TOKEN}" \
  -d '{
    "title": "GATE CS 2024",
    "description": "Mock test",
    "category": "GATE CS",
    "type": "MockTest",
    "questions": [...],
    "timeLimit": 180,
    "passingScore": 50,
    "createdBy": "admin_123"
  }'
```

### 2. User fetches the quiz

```javascript
const quiz = await fetch('/api/quizzes/quiz_abc123').then(r => r.json());
```

### 3. User joins a live room via Socket.IO

```javascript
const socket = io('http://localhost:4000');
socket.emit('join-room', {
  roomId: 'gate-cs-room-001',
  user: { id: 'user_123', displayName: 'John' }
});

socket.on('participant-joined', (data) => {
  console.log('Participant joined:', data.user.displayName);
});
```

### 4. User submits answer

```javascript
socket.emit('answer-submitted', {
  roomId: 'gate-cs-room-001',
  result: {
    userId: 'user_123',
    score: 85,
    correctCount: 17
  }
});

socket.on('live-score-update', (data) => {
  console.log('Live score update:', data.result);
});
```

### 5. User submits final result

```javascript
const result = await fetch('/api/results', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${idToken}`
  },
  body: JSON.stringify({
    userId: 'user_123',
    quizId: 'quiz_abc123',
    answers: [...],
    accuracy: 80,
    timeTaken: 900
  })
}).then(r => r.json());

console.log('Quiz submitted:', result.id);
```

---

## WebSocket Connection

**URL**: `ws://localhost:4000` (Socket.IO auto-handles upgrades)

**Connection Params**:
```javascript
const socket = io('http://localhost:4000', {
  auth: {
    token: firebase_id_token
  }
});
```

---

## Extending the API

To add new endpoints:

1. Create route file: `backend/src/routes/newFeature.ts`
2. Add route handler in `backend/src/server.ts`:
   ```typescript
   import newFeatureRouter from "./routes/newFeature";
   app.use("/api/new-feature", newFeatureRouter);
   ```
3. Document in this file

---

**For more details, see the [backend source code](./backend/src) or open an issue on GitHub.**
