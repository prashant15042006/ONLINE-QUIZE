import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

export function initFirebase() {
  if (getApps().length) return;
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  initializeApp(config);
}

export function getClientAuth() {
  return getAuth();
}
