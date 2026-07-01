import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Online Quize — Dashboard</h1>
      <div className="mt-6 space-x-3">
        <Link href="/login">
          <a className="px-4 py-2 bg-blue-600 text-white rounded">Login</a>
        </Link>
        <Link href="/quiz/sample">
          <a className="px-4 py-2 bg-green-600 text-white rounded">Try Sample Quiz</a>
        </Link>
      </div>
    </main>
  );
}
