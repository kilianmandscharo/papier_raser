"use client";

import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("../../components/Canvas"), {
  ssr: false,
});

// TODO:
// - Make lobby screen
// - Make track draw screen
// - integrate sockets

export default function Play() {
  return (
    <main>
      <Canvas />
    </main>
  );
}
