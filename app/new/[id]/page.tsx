"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const URL = "http://localhost:8000";

const socket = io(URL);

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [players, setPlayers] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [nameSet, setNameSet] = useState<boolean>(false);

  const submitName = () => {
    socket.emit("newPlayer", { name, id: params.id });
    setNameSet(true);
  };

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    function onNewPlayer(name: string) {
      setPlayers((prev) => [...prev, name]);
    }
    function onNewPlayerInit(names: string[]) {
      setPlayers(names);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("newPlayerResponse", onNewPlayer);
    socket.on("newPlayerInit", onNewPlayerInit);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("newPlayerResponse", onNewPlayer);
      socket.off("newPlayerInit", onNewPlayerInit);
    };
  }, []);

  return (
    <>
      <h1>Lobby</h1>
      {nameSet ? (
        <>
          <div
            className={`${
              isConnected ? "bg-green-500" : "bg-red-500"
            } w-4 h-4 rounded-full`}
          />
          <div>
            {players.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <p>Please enter your name:</p>
          <input
            className="text-black p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="bg-orange-900 rounded-md p-2" onClick={submitName}>
            Submit name
          </button>
        </div>
      )}
    </>
  );
}
