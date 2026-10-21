"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

type ParticlesProps = {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
};

const remap = (value: number, start1: number, end1: number, start2: number, end2: number) => {
  const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
  return remapped > 0 ? remapped : 0;
};

// Port of chronark.com's mouse-reactive particle field, with the particle colour
// read from the --particle CSS variable so it follows the active theme.
export function Particles({ className, quantity = 30, staticity = 50, ease = 50 }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef("255, 255, 255");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    colorRef.current =
      getComputedStyle(document.documentElement).getPropertyValue("--particle").trim() || colorRef.current;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !container || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;
    const size = { w: 0, h: 0 };
    const mouse = { x: 0, y: 0 };
    let circles: Circle[] = [];
    let frame = 0;

    const createCircle = (): Circle => ({
      x: Math.floor(Math.random() * size.w),
      y: Math.floor(Math.random() * size.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + 0.1,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
    });

    const drawCircle = ({ x, y, translateX, translateY, size: radius, alpha }: Circle) => {
      context.translate(translateX, translateY);
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fillStyle = `rgba(${colorRef.current}, ${alpha})`;
      context.fill();
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      size.w = container.offsetWidth;
      size.h = container.offsetHeight;
      canvas.width = size.w * dpr;
      canvas.height = size.h * dpr;
      canvas.style.width = `${size.w}px`;
      canvas.style.height = `${size.h}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      circles = Array.from({ length: quantity }, createCircle);
      if (reducedMotion) {
        context.clearRect(0, 0, size.w, size.h);
        circles.forEach((c) => drawCircle({ ...c, alpha: c.targetAlpha }));
      }
    };

    const animate = () => {
      context.clearRect(0, 0, size.w, size.h);
      circles = circles.map((circle) => {
        const closestEdge = Math.min(
          circle.x + circle.translateX - circle.size,
          size.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          size.h - circle.y - circle.translateY - circle.size,
        );
        const edgeFactor = parseFloat(remap(closestEdge, 0, 20, 0, 1).toFixed(2));
        if (edgeFactor > 1) {
          circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha);
        } else {
          circle.alpha = circle.targetAlpha * edgeFactor;
        }
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;

        const outside =
          circle.x < -circle.size ||
          circle.x > size.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > size.h + circle.size;
        const next = outside ? createCircle() : circle;
        drawCircle(next);
        return next;
      });
      frame = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left - size.w / 2;
      const y = event.clientY - rect.top - size.h / 2;
      if (Math.abs(x) < size.w / 2 && Math.abs(y) < size.h / 2) {
        mouse.x = x;
        mouse.y = y;
      }
    };

    init();
    window.addEventListener("resize", init);
    if (!reducedMotion) {
      window.addEventListener("mousemove", onMouseMove);
      frame = window.requestAnimationFrame(animate);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [quantity, staticity, ease]);

  return (
    <div className={className} ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
