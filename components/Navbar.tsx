import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-4 bg-dark-700 w-full p-2 h-12 flex items-center">
      <Link
        className="p-1 border-b border-b-transparent hover:border-b-primary-500 hover:text-primary-500"
        href={`/new/`}
      >
        Neues Spiel
      </Link>
    </nav>
  );
}
