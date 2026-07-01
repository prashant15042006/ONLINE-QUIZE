import { Router } from "express";
import admin from "firebase-admin";

const router = Router();

// Create a quiz (admin)
router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const db = admin.firestore();
    const ref = await db.collection("quizzes").add({
      ...data,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.json({ id: ref.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed" });
  }
});

// Get quiz by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const db = admin.firestore();
    const doc = await db.collection("quizzes").doc(id).get();
    if (!doc.exists) return res.status(404).json({ error: "not found" });
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed" });
  }
});

export default router;
