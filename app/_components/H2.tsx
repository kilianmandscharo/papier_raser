import { PropsWithChildren } from "react";

export default function H2({ children }: PropsWithChildren<unknown>) {
  return <h2 className="text-4xl mb-4">{children}</h2>;
}
