"use client";

import { GlowingEffect } from "./GlowingEffect";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowingCard({ children, className }: GlowingCardProps) {
  return (
    <div className={`relative rounded-2xl ${className ?? ""}`}>
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
