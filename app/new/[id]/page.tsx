"use client";

import { PlayerLobby } from "@/types/types";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PlayerList from "../_components/PlayerList";
import Button from "@/app/_components/Button";
import H1 from "@/app/_components/H1";
import InviteButton from "../_components/InviteButton";

const URL = "http://localhost:8000";

const socket = io(URL);

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [players, setPlayers] = useState<PlayerLobby[]>([]);
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
    function onNewPlayer(player: PlayerLobby) {
      setPlayers((prev) => [...prev, player]);
    }
    function onNewPlayerInit(players: PlayerLobby[]) {
      setPlayers(players);
    }
    function onReady(name: string) {
      setPlayers((prev) =>
        prev.map((p) => (p.name === name ? { ...p, ready: true } : p))
      );
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("newPlayerResponse", onNewPlayer);
    socket.on("newPlayerInit", onNewPlayerInit);
    socket.on("readyResponse", onReady);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("newPlayerResponse", onNewPlayer);
      socket.off("newPlayerInit", onNewPlayerInit);
      socket.off("readyResponse", onReady);
    };
  }, []);

  const handleReady = () => {
    socket.emit("ready", { name, id: params.id });
  };

  return (
    <>
      <H1>Neues Spiel</H1>
      <div className="grid gap-4">
        {nameSet ? (
          <>
            <PlayerList players={players} name={name} />
            <Button onClick={handleReady}>Bereit</Button>
            <InviteButton gameID={params.id} />
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <p>Gib deinen Namen ein:</p>
            <input
              className="text-black p-2 rounded-md"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button onClick={submitName}>Fertig</Button>
          </div>
        )}
      </div>
    </>
  );
}
