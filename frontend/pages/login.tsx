import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initFirebase } from "../utils/firebaseClient";

// Skip static generation for this page
export const getServerSideProps = async () => {
  return { props: {} };
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initFirebase();
    setReady(true);
  }, []);

  const auth = getAuth();

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!ready) return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  }

  async function handleGoogle() {
    if (!ready) return;
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google");
    } catch (err) {
      console.error(err);
      alert("Google login failed");
    }
  }

  if (!ready) return <div className="p-8">Loading...</div>;

  return (
    <main className="min-h-screen p-8">
      <h2 className="text-2xl font-semibold">Login</h2>
      <form onSubmit={handleEmailLogin} className="mt-4 space-y-3 max-w-md">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
          <button type="button" onClick={handleGoogle} className="px-4 py-2 bg-red-600 text-white rounded">Google</button>
        </div>
      </form>
    </main>
  );
}

