"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const firebase_1 = require("./utils/firebase");
const quizzes_1 = __importDefault(require("./routes/quizzes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
    },
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Initialize Firebase Admin
(0, firebase_1.initializeFirebase)();
// API routes
app.use("/api/quizzes", quizzes_1.default);
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
