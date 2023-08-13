import { Circle } from "react-konva";
import { SIZE } from "./Canvas";
import { Vector2d } from "konva/lib/types";

interface Props {
  options: Vector2d[];
  onClick: (pos: Vector2d) => void;
  show: boolean;
}

export default function Options({ options, onClick, show }: Props) {
  if (!show) return null;

  return (
    <>
      {options.map((p, i) => (
        <Circle
          key={i}
          x={p.x * SIZE}
          y={p.y * SIZE}
          radius={8}
          fill="orange"
          onClick={() => onClick(p)}
          opacity={0.5}
        />
      ))}
    </>
  );
}
