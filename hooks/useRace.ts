import { Race, Path, Position, Velocity, Options, Player } from "@/types/types";
import { useState } from "react";

export default function useRace(players: Player[]): {
  racers: { name: string; pos: Position; trail: Path; options: Options }[];
  addPos: (name: string, pos: Position) => void;
} {
  const [race, setRace] = useState<Race>(
    Object.fromEntries(
      players.map((p) => [p.name, { name: p.name, path: [p.startingPos] }])
    )
  );

  const pos = (name: string): Position => {
    const path = race[name].path;
    return path[path.length - 1];
  };

  const trail = (name: string): Path => {
    const path = race[name].path;
    return path.length > 1 ? path.slice(0, path.length - 1) : [];
  };

  const velocity = (name: string): Velocity => {
    const path = race[name].path;

    if (path.length === 1) return { x: 0, y: 0 };

    const p1 = path[path.length - 1];
    const p2 = path[path.length - 2];

    return {
      x: p1.x - p2.x,
      y: p1.y - p2.y,
    };
  };

  const options = (name: string): Options => {
    const p = pos(name);
    const v = velocity(name);
    const newPos = {
      x: p.x + v.x,
      y: p.y + v.y,
    };

    const options: Options = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (newPos.x + i === p.x && newPos.y + j === p.y) continue;
        options.push({
          x: newPos.x + i,
          y: newPos.y + j,
        });
      }
    }

    return options;
  };

  const addPos = (name: string, pos: Position) => {
    setRace(
      Object.fromEntries(
        Object.entries(race).map(([n, racer]) =>
          n !== name
            ? [n, racer]
            : [n, { ...racer, path: [...racer.path, pos] }]
        )
      )
    );
  };

  const allRacers = () => {
    return Object.keys(race).map((name) => ({
      name,
      pos: pos(name),
      trail: trail(name),
      options: options(name),
    }));
  };

  return {
    racers: allRacers(),
    addPos,
  };
}
