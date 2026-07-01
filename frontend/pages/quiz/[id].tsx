import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { initFirebase } from "../../utils/firebaseClient";

// Skip static generation for this page
export const getServerSideProps = async () => {
  return { props: {} };
};

export default function QuizPage() {
  const [joined, setJoined] = useState(false);
  const [room, setRoom] = useState("sample-room");
  const [liveScores, setLiveScores] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    initFirebase();
    const socketInstance = io(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000");
    setSocket(socketInstance);

    socketInstance.on("connect", () => console.log("socket connected", socketInstance.id));
    socketInstance.on("live-score-update", ({ result }) => {
      setLiveScores((s) => [...s, result]);
    });

    return () => {
      socketInstance.off("connect");
      socketInstance.off("live-score-update");
      socketInstance.disconnect();
    };
  }, []);

  function join() {
    if (socket) {
      socket.emit("join-room", { roomId: room, user: { name: "Guest" } });
      setJoined(true);
    }
  }

  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAIAnswer = async () => {
    if (!aiQuestion) return;
    setLoading(true);
    try {
      const res = await fetch('/api/quizzes/generate-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: aiQuestion }),
      });
      const data = await res.json();
      setAiAnswer(data.answer || 'No answer');
    } catch (e) {
      console.error(e);
      setAiAnswer('Error fetching answer');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <h2 className="text-2xl">Live Quiz Room</h2>
      {!joined ? (
        <div className="mt-4">
          <input value={room} onChange={(e) => setRoom(e.target.value)} className="p-2 border rounded" />
          <button onClick={join} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">Join</button>
        </div>
      ) : (
        <div className="mt-4">
          <p>Joined room: {room}</p>
          <div className="mt-3">
            <h3 className="font-semibold">Live Scores</h3>
            <pre className="bg-gray-100 p-2 rounded max-w-md">{JSON.stringify(liveScores, null, 2)}</pre>
          </div>
          {/* AI Hint Section */}
          <div className="mt-6 glass p-4 max-w-lg">
            <h3 className="font-semibold mb-2">AI Hint</h3>
            <input
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              placeholder="Enter your question"
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={fetchAIAnswer}
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
            >
              {loading ? 'Thinking…' : 'Get Answer'}
            </button>
            {aiAnswer && (
              <p className="mt-3 p-2 bg-gray-100 rounded">{aiAnswer}</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

