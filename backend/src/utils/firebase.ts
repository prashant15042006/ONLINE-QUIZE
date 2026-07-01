import admin from "firebase-admin";

export function initializeFirebase() {
  if (admin.apps.length) return admin.app();

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    console.warn("Firebase admin credentials not set. Backend Firestore access will fail until configured.");
  }

  const app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: projectId || "",
      clientEmail: clientEmail || "",
      privateKey: privateKey || "",
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });

  return app;
}
