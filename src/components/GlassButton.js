'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GlassButton({ href, children, className, isExternal }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: `relative overflow-hidden transition-all duration-200 ${className || ''}`,
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 45px at ${position.x}px ${position.y}px, rgba(255,255,255,0.2), transparent 100%)`,
        }}
      />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...commonProps}>
      {content}
    </Link>
  );
}
