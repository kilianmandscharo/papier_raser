import { Circle } from "react-konva";
import { SIZE } from "./Grid";
import { Vector2d } from "konva/lib/types";

interface Props {
  pos: Vector2d;
}

export default function TrailPoint({ pos }: Props) {
  return <Circle x={pos.x * SIZE} y={pos.y * SIZE} radius={6} fill="blue" />;
}
