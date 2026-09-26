import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer & is not touch/mobile
    const hasTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (hasTouch) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.getAttribute('role') === 'button' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.closest('[role="dialog"]') !== null ||
          target.closest('.cursor-pointer') !== null;
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision Central Dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '7px' : '5px',
          height: isPointer ? '7px' : '5px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isPointer ? '#22d3ee' : '#38bdf8',
          boxShadow: isPointer ? '0 0 12px #22d3ee' : '0 0 8px #38bdf8',
        }}
      />
      {/* Soft Outer Ring expanding on hover */}
      <div
        className="pointer-events-none fixed z-40 rounded-full border transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '44px' : '26px',
          height: isPointer ? '44px' : '26px',
          transform: 'translate(-50%, -50%)',
          borderColor: isPointer ? 'rgba(34, 211, 238, 0.55)' : 'rgba(56, 189, 248, 0.25)',
          backgroundColor: isPointer ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          boxShadow: isPointer ? '0 0 20px rgba(6, 182, 212, 0.25)' : 'none',
        }}
      />
    </>
  );
}
