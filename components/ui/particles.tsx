"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: 0,
      maxOpacity: Math.random() * 0.2 + 0.05,
      life: 0,
      maxLife: Math.random() * 600 + 400,
    });

    // Seed initial particles at random heights
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      p.opacity = p.maxOpacity * Math.min(1, p.life / 100);
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        // Fade in
        if (p.life < 100) {
          p.opacity = p.maxOpacity * (p.life / 100);
        }
        // Fade out
        else if (p.life > p.maxLife - 100) {
          p.opacity = p.maxOpacity * ((p.maxLife - p.life) / 100);
        }

        // Reset if dead or off screen
        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle();
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 1 }}
    />
  );
}
