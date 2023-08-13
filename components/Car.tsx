import { Circle } from "react-konva";
import { SIZE } from "./Canvas";
import { Vector2d } from "konva/lib/types";

interface Props {
  pos: Vector2d;
  color: string;
}

export default function Car({ pos, color }: Props) {
  return <Circle x={pos.x * SIZE} y={pos.y * SIZE} radius={13} fill={color} />;
}
