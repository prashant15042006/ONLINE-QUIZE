"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeFirebase = initializeFirebase;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
function initializeFirebase() {
    if (firebase_admin_1.default.apps.length)
        return firebase_admin_1.default.app();
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    if (!projectId || !clientEmail || !privateKey) {
        console.warn("Firebase admin credentials not set. Backend Firestore access will fail until configured.");
    }
    const app = firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert({
            projectId: projectId || "",
            clientEmail: clientEmail || "",
            privateKey: privateKey || "",
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
    return app;
}
