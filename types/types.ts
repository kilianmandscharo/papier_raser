import { Vector2d } from "konva/lib/types";

export interface Racer {
  name: string;
  path: Path;
}

export interface Player {
  name: string;
  startingPos: Position;
}

export type Position = Vector2d;
export type Path = Vector2d[];
export type Options = Vector2d[];
export type Velocity = Vector2d;

export type Race = Record<string, Racer>;
