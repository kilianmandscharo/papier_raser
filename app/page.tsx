"use client";

import dynamic from "next/dynamic";

const Grid = dynamic(() => import("../components/Grid"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Grid />
    </main>
  );
}
