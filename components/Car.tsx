import { Circle } from "react-konva";
import { SIZE } from "./Grid";
import { Vector2d } from "konva/lib/types";

interface Props {
  pos: Vector2d;
}

export default function Car({ pos }: Props) {
  return <Circle x={pos.x * SIZE} y={pos.y * SIZE} radius={12} fill="red" />;
}
