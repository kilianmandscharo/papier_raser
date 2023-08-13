import { Layer, Line } from "react-konva";
import { ROWS, COLS, SIZE, WIDTH, HEIGHT } from "./Canvas";
import { memo } from "react";

function Grid() {
  return (
    <Layer>
      {Array(ROWS + 1)
        .fill(0)
        .map((_, i) => (
          <Line
            stroke="gray"
            strokeWidth={1}
            key={i}
            points={[0, i * SIZE, WIDTH, i * SIZE]}
          />
        ))}
      {Array(COLS + 1)
        .fill(0)
        .map((_, i) => (
          <Line
            key={i}
            stroke="lightgray"
            strokeWidth={1}
            points={[i * SIZE, 0, i * SIZE, HEIGHT]}
          />
        ))}
    </Layer>
  );
}

export default memo(Grid);
