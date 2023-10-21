import { PlayerLobby } from "@/types/types";
import PlayerListItem from "./PlayerListItem";
import H2 from "@/app/_components/H2";

interface Props {
  players: PlayerLobby[];
  name: string;
}

export default function PlayerList({ players, name }: Props) {
  const list =
    players.length !== 0
      ? [
          players.find((p) => p.name === name)!,
          ...players.filter((p) => p.name !== name),
        ]
      : [];

  return (
    <div className="bg-dark-700 p-4 rounded-md">
      <H2>Spieler</H2>
      <div className="flex flex-col gap-4">
        {list.map((p, i) => (
          <PlayerListItem key={p.name} player={p} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
