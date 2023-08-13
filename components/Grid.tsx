import { Layer, Line, Stage } from "react-konva";
import Car from "./Car";
import { useState } from "react";
import { Vector2d } from "konva/lib/types";
import Option from "./Option";
import TrailPoint from "./TrailPoint";

export const ROWS = 41;
export const COLS = 58;
export const WIDTH = 1300;
export const HEIGHT = 919;
export const SIZE = WIDTH / COLS;

export default function Grid() {
  const [path, setPath] = useState<Vector2d[]>([{ x: 20, y: 20 }]);

  const currentPos = (): Vector2d => {
    return path[path.length - 1];
  };

  const currentTrail = (): Vector2d[] => {
    if (path.length === 1) return [];

    return path.slice(0, path.length - 1);
  };

  const currentVelocity = (): Vector2d => {
    if (path.length === 1) return { x: 0, y: 0 };

    const p1 = path[path.length - 1];
    const p2 = path[path.length - 2];

    return {
      x: p1.x - p2.x,
      y: p1.y - p2.y,
    };
  };

  const currentOptions = (): Vector2d[] => {
    const pos = currentPos();
    const velocity = currentVelocity();
    const newPos = {
      x: pos.x + velocity.x,
      y: pos.y + velocity.y,
    };

    const options: Vector2d[] = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (newPos.x + i === pos.x && newPos.y + j === pos.y) continue;
        options.push({
          x: newPos.x + i,
          y: newPos.y + j,
        });
      }
    }

    return options;
  };

  const chooseOption = (pos: Vector2d) => {
    setPath((prev) => [...prev, pos]);
  };

  return (
    <Stage width={WIDTH} height={HEIGHT}>
      <Layer>
        {Array(ROWS)
          .fill(0)
          .map((_, i) => (
            <Line
              stroke="gray"
              strokeWidth={1}
              key={i}
              points={[0, i * SIZE, WIDTH, i * SIZE]}
            />
          ))}
        {Array(COLS)
          .fill(0)
          .map((_, i) => (
            <Line
              stroke="lightgray"
              strokeWidth={1}
              key={i}
              points={[i * SIZE, 0, i * SIZE, HEIGHT]}
            />
          ))}
      </Layer>
      <Layer>
        <Car pos={currentPos()} />
      </Layer>
      <Layer>
        {currentTrail().map((p, i) => (
          <TrailPoint key={i} pos={p} />
        ))}
      </Layer>
      <Layer>
        {currentOptions().map((p, i) => (
          <Option key={i} pos={p} onClick={() => chooseOption(p)} />
        ))}
      </Layer>
    </Stage>
  );
}
