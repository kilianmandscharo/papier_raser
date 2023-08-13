import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-4 bg-emerald-700 w-full p-2">
      <Link href="/play">Spielen</Link>
    </nav>
  );
}
