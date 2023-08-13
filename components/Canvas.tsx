import { Layer, Stage } from "react-konva";
import Car from "./Car";
import Grid from "./Grid";
import useRace from "@/hooks/useRace";
import { Fragment, useState } from "react";
import Trail from "./Trail";
import Options from "./Options";

export const ROWS = 41;
export const COLS = 58;
export const WIDTH = 1280;
export const HEIGHT = 905;
export const SIZE = WIDTH / COLS;

const color = (i: number, total: number): string => {
  const step = 360 / total;
  const hue = i * step;
  return `hsl(${hue}, 80%, 50%)`;
};

const players = [
  {
    name: "Dominik",
    startingPos: { x: 20, y: 20 },
  },
  {
    name: "Peter",
    startingPos: { x: 24, y: 20 },
  },
];

export default function Canvas() {
  const { racers, addPos } = useRace(players);
  const [activeRacer, _] = useState<string>(racers[0].name);

  return (
    <Stage width={WIDTH} height={HEIGHT}>
      <Grid />
      <Layer>
        {racers.map((r, i) => (
          <Fragment key={r.name}>
            <Trail
              trail={r.trail}
              pos={r.pos}
              color={color(i, racers.length)}
            />
            <Car pos={r.pos} color={color(i, racers.length)} />
            <Options
              options={r.options}
              onClick={(pos) => addPos(r.name, pos)}
              show={activeRacer === r.name}
            />
          </Fragment>
        ))}
      </Layer>
    </Stage>
  );
}
