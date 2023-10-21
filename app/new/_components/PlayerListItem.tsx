import { PlayerLobby } from "@/types/types";

interface Props {
  index: number;
  player: PlayerLobby;
}

export default function PlayerListItem({ index, player }: Props) {
  return (
    <div className="flex items-center gap-4">
      <p>{index}.</p>
      <p className="bg-secondary-500 rounded-md p-2">{player.name}</p>
      {player.ready ? <p>Bereit</p> : <p>Warten...</p>}
    </div>
  );
}
