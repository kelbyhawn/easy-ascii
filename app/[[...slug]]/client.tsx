"use client";

import dynamic from "next/dynamic";

const Container = dynamic(() => import("../../src/Container"), { ssr: false });

export function ClientOnly() {
  return <Container />;
}
