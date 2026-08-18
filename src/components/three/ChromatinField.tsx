"use client";

import { useEffect, useRef } from "react";

export function ChromatinField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    function drawFibers() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const count = 22;
      for (let i = 0; i < count; i++) {
        const seed = i * 137.5;
        const x0 = (Math.sin(seed) * 0.5 + 0.5) * w;
        const y0 = (i / count) * h;

        ctx.beginPath();
        ctx.moveTo(x0, y0);

        const segments = 6;
        for (let s = 1; s <= segments; s++) {
          const progress = s / segments;
          const cx = x0 + Math.sin(seed + t * 0.3 + s) * 60;
          const cy = y0 + progress * 120 - 60;
          const ex = x0 + Math.cos(seed + t * 0.2 + s * 1.3) * 80;
          const ey = y0 + progress * 140;
          ctx.bezierCurveTo(cx, cy, ex, ey, ex, ey);
        }

        ctx.strokeStyle = `rgba(0, 194, 255, ${0.06 + (i % 3) * 0.015})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      t += 0.004;
      raf = requestAnimationFrame(drawFibers);
    }

    resize();
    drawFibers();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="chromatin-canvas absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
