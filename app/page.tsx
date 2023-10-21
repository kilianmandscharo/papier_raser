"use client";

import { useRouter } from "next/navigation";
import Button from "./_components/Button";
import { v4 as uuidv4 } from "uuid";
import H1 from "./_components/H1";

export default function Home() {
  const router = useRouter();

  const newGame = () => {
    const uuid = uuidv4();
    router.push(`/new/${uuid}`);
  };

  return (
    <main>
      <H1>Papierraser</H1>
      <Button onClick={newGame}>Neues Spiel</Button>
    </main>
  );
}
