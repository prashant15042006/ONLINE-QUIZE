import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import { initializeFirebase } from "./utils/firebase";
import quizzesRouter from "./routes/quizzes";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

// Initialize Firebase Admin
initializeFirebase();

// API routes
app.use("/api/quizzes", quizzesRouter);

// Basic health
app.get("/health", (req, res) => res.json({ ok: true }));

// Socket.IO for real-time quiz rooms
io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  socket.on("join-room", ({ roomId, user }) => {
    socket.join(roomId);
    io.to(roomId).emit("participant-joined", { id: socket.id, user });
  });

  socket.on("leave-room", ({ roomId, user }) => {
    socket.leave(roomId);
    io.to(roomId).emit("participant-left", { id: socket.id, user });
  });

  socket.on("answer-submitted", (payload) => {
    // Broadcast updated score/result to the room
    const { roomId, result } = payload;
    io.to(roomId).emit("live-score-update", { result });
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
