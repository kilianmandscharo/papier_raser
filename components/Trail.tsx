import { Circle, Group, Line } from "react-konva";
import { SIZE } from "./Canvas";
import { Path, Position } from "@/types/types";

interface Props {
  trail: Path;
  pos: Position;
  color: string;
}

export default function Trail({ trail, pos, color }: Props) {
  return (
    <Group>
      <Line
        points={[...trail, pos].flatMap((p) => [p.x * SIZE, p.y * SIZE])}
        stroke={color}
        strokeWidth={4}
        tension={0}
      />
      {trail.map((p, i) => (
        <Circle key={i} x={p.x * SIZE} y={p.y * SIZE} radius={7} fill={color} />
      ))}
    </Group>
  );
}
