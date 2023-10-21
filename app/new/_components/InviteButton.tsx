import Button from "@/app/_components/Button";
import { useState } from "react";

interface Props {
  gameID: string;
}

export default function InviteButton({ gameID }: Props) {
  const [pressed, setPressed] = useState<boolean>(false);

  const handleClick = () => {
    // TODO: adjust URL depending on environment
    navigator.clipboard.writeText(`http://localhost:3000/new/${gameID}`);
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 3000);
  };

  return (
    <Button disabled={pressed} onClick={handleClick}>
      {pressed ? "Link in die Zwischenablage kopiert!" : "Spieler einladen"}
    </Button>
  );
}
