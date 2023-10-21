import { PropsWithChildren } from "react";

export default function H1({ children }: PropsWithChildren<unknown>) {
  return <h1 className="text-6xl mb-4">{children}</h1>;
}
