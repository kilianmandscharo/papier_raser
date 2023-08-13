import { Circle } from "react-konva";
import { SIZE } from "./Grid";
import { Vector2d } from "konva/lib/types";

interface Props {
  pos: Vector2d;
  onClick: () => void;
}

export default function Option({ pos, onClick }: Props) {
  return (
    <Circle
      x={pos.x * SIZE}
      y={pos.y * SIZE}
      radius={8}
      fill="orange"
      onClick={onClick}
    />
  );
}
