"use client";

import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function BubbleBackground({ count = 22 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate on client to prevent Next.js SSR hydration mismatches
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 24 + 6,        // 6px to 30px
      left: Math.random() * 100,           // 0% to 100% horizontal position
      duration: Math.random() * 10 + 8,    // 8s to 18s float speed
      delay: Math.random() * 8,            // 0s to 8s staggered start
      opacity: Math.random() * 0.35 + 0.15 // Subtle glassy look
    }));
    setBubbles(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble-particle absolute -bottom-10 rounded-full"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            opacity: b.opacity,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}