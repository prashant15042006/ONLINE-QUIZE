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
        </div>
      )}
    </main>
  );
}

