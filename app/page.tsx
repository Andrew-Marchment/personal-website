"use client";

import About from "./_components/about";
import Hero from "./_components/hero";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main id="main">
      <div className="background">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <Hero />
      <About />
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
      <div className="section"></div>
    </main>
  );
}
