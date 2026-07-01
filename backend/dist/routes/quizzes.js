"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const router = (0, express_1.Router)();
// Create a quiz (admin)
router.post("/", async (req, res) => {
    const data = req.body;
    try {
        const db = firebase_admin_1.default.firestore();
        const ref = await db.collection("quizzes").add({
            ...data,
            createdAt: firebase_admin_1.default.firestore.FieldValue.serverTimestamp(),
        });
        res.json({ id: ref.id });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "failed" });
    }
});
// Get quiz by id
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const db = firebase_admin_1.default.firestore();
        const doc = await db.collection("quizzes").doc(id).get();
        if (!doc.exists)
            return res.status(404).json({ error: "not found" });
        res.json({ id: doc.id, ...doc.data() });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "failed" });
    }
});
exports.default = router;
