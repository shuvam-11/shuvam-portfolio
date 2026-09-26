import { useState, useRef, ReactNode, MouseEvent } from 'react';

interface CardTilt3DProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (e.g. 4)
  glare?: boolean;
  scale?: number; // subtle lift scale e.g. 1.01
  onClick?: () => void;
}

export default function CardTilt3D({
  children,
  className = '',
  maxTilt = 4,
  glare = true,
  scale = 1.012,
  onClick,
}: CardTilt3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<{
    transform: string;
    transition: string;
    glareX: number;
    glareY: number;
    glareOpacity: number;
  }>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Avoid expensive calculations on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 0.1s ease-out',
      glareX,
      glareY,
      glareOpacity: 0.14,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: style.transform,
        transition: style.transition,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {children}

      {/* Subtle Specular Glare Layer */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
          style={{
            opacity: style.glareOpacity,
            background: `radial-gradient(circle 350px at ${style.glareX}% ${style.glareY}%, rgba(56, 189, 248, 0.35), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
