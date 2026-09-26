import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  color: string;
  vx: number;
  vy: number;
  vz: number;
}

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Detect mobile / touch device
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Very gentle particle count - lightweight and subtle
    const particleCount = isTouch ? 14 : 32;
    const particles: Particle[] = [];

    const colors = [
      'rgba(6, 182, 212,',   // Cyan
      'rgba(56, 189, 248,',  // Sky blue
      'rgba(59, 130, 246,',  // Blue
      'rgba(99, 102, 241,',  // Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = Math.random() * 1.8 + 0.8;
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 800 + 100, // 3D depth space
        baseRadius,
        radius: baseRadius,
        alpha: Math.random() * 0.35 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.4,
      });
    }

    // Parallax mouse follow tracking (subtle)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      // Normalized between -1 and 1
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const fov = 450; // Field of view for 3D projection

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse parallax
      if (!isTouch) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      }

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate particles slowly through 3D space
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          // Wrap around depth
          if (p.z <= 20) p.z = 800;
          if (p.z > 800) p.z = 20;

          // Wrap horizontal / vertical
          if (p.x < -width) p.x = width;
          if (p.x > width) p.x = -width;
          if (p.y < -height) p.y = height;
          if (p.y > height) p.y = -height;
        }

        // Apply mouse 3D parallax offset
        const parallaxX = p.x - mouseX * (800 - p.z) * 0.06;
        const parallaxY = p.y - mouseY * (800 - p.z) * 0.06;

        // 3D Perspective projection
        const scale = fov / (fov + p.z);
        const projectedX = cx + parallaxX * scale;
        const projectedY = cy + parallaxY * scale;
        const projectedRadius = Math.max(0.4, p.baseRadius * scale * 1.5);

        // Render particle if within screen bounds
        if (
          projectedX >= -20 &&
          projectedX <= width + 20 &&
          projectedY >= -20 &&
          projectedY <= height + 20
        ) {
          const depthAlpha = p.alpha * Math.min(1, Math.max(0.15, (800 - p.z) / 700));

          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedRadius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${depthAlpha.toFixed(3)})`;
          ctx.fill();

          // Subtle glowing halo for particles closer to the camera
          if (p.z < 350) {
            ctx.beginPath();
            ctx.arc(projectedX, projectedY, projectedRadius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color} ${(depthAlpha * 0.25).toFixed(3)})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isTouch) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-1000"
    />
  );
}
