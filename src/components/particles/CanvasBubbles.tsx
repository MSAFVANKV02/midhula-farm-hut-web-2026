"use client";

import React, { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  wobble: number;
  wobbleSpeed: number;
  alpha: number;
  isBurst?: boolean;
}

interface PopRing {
  x: number;
  y: number;
  r: number;
  maxR: number;
  alpha: number;
}

export default function InteractiveBubbles({ count = 28 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Helper to create a bubble
    const createBubble = (
      x = Math.random() * canvas.width,
      y = Math.random() * canvas.height,
      isBurst = false
    ): Bubble => {
      const angle = Math.random() * Math.PI * 2;
      const burstForce = isBurst ? Math.random() * 4.5 + 1.5 : 0;
      return {
        x,
        y,
        vx: isBurst ? Math.cos(angle) * burstForce : 0,
        vy: isBurst
          ? Math.sin(angle) * burstForce - 1.5
          : -(Math.random() * 0.8 + 0.4),
        r: isBurst ? Math.random() * 9 + 4 : Math.random() * 14 + 6,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.015,
        alpha: 1,
        isBurst,
      };
    };

    const bubbles: Bubble[] = Array.from({ length: count }, () =>
      createBubble()
    );
    const popRings: PopRing[] = [];

    // Click handler: Pop/blow away nearby bubbles + spawn new clear bubbles
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // 1. Check existing bubbles: pop very close ones, blow away nearby ones
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        const dx = b.x - clickX;
        const dy = b.y - clickY;
        const dist = Math.hypot(dx, dy);

        if (dist < b.r + 35) {
          // Pop bubble directly under click
          popRings.push({
            x: b.x,
            y: b.y,
            r: b.r * 0.8,
            maxR: b.r * 2.4,
            alpha: 0.7,
          });
          // Respawn at bottom if it's a permanent background bubble
          if (!b.isBurst) {
            bubbles[i] = createBubble(
              Math.random() * canvas.width,
              canvas.height + 20
            );
          } else {
            bubbles.splice(i, 1);
          }
        } else if (dist < 160) {
          // Blow away nearby bubbles with a shockwave push
          const force = ((160 - dist) / 160) * 7;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }
      }

      // 2. Add a subtle water ripple at click point
      popRings.push({
        x: clickX,
        y: clickY,
        r: 4,
        maxR: 45,
        alpha: 0.5,
      });

      // 3. Blow a cluster of fresh bubbles from the click point
      const spawnCount = 8;
      for (let i = 0; i < spawnCount; i++) {
        bubbles.push(createBubble(clickX, clickY, true));
      }

      // Cap total bubbles so rapid clicking never lags the page
      if (bubbles.length > 90) {
        bubbles.splice(0, bubbles.length - 90);
      }
    };

    window.addEventListener("click", handleClick);

    // Draw crystal-clear realistic water bubble
    const drawClearBubble = (x: number, y: number, r: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;

      // Subtle transparent glassy body with crisp sky-blue rim
      const grad = ctx.createRadialGradient(
        x - r * 0.3,
        y - r * 0.3,
        r * 0.05,
        x,
        y,
        r
      );
      grad.addColorStop(0, "rgba(255, 255, 255, 0.75)");
      grad.addColorStop(0.25, "rgba(224, 242, 254, 0.12)");
      grad.addColorStop(0.82, "rgba(56, 189, 248, 0.18)");
      grad.addColorStop(1, "rgba(14, 165, 233, 0.45)");

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Crisp outer edge so it stands out on white backgrounds
      ctx.strokeStyle = "rgba(14, 165, 233, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Primary glossy curved shine (top-left)
      ctx.beginPath();
      ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();

      // Secondary tiny reflection dot (bottom-right)
      ctx.beginPath();
      ctx.arc(x + r * 0.38, y + r * 0.38, r * 0.09, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw bubbles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];

        // Apply velocity + water drag so blown bubbles smoothly return to floating
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.95;

        // Smoothly transition vertical velocity back to natural upward buoyancy
        const targetVy = -(0.5 + b.r * 0.04);
        b.vy += (targetVy - b.vy) * 0.04;

        b.wobble += b.wobbleSpeed;
        const drawX = b.x + Math.sin(b.wobble) * 1.2;

        // Recycle or remove when off-screen at the top
        if (b.y + b.r < -10) {
          if (b.isBurst) {
            bubbles.splice(i, 1);
            continue;
          } else {
            b.y = canvas.height + b.r + 10;
            b.x = Math.random() * canvas.width;
            b.vx = 0;
          }
        }

        drawClearBubble(drawX, b.y, b.r, b.alpha);
      }

      // Update & draw pop ripples
      for (let i = popRings.length - 1; i >= 0; i--) {
        const ring = popRings[i];
        ring.r += (ring.maxR - ring.r) * 0.18;
        ring.alpha *= 0.86;

        ctx.save();
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${ring.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        if (ring.alpha < 0.03) {
          popRings.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}