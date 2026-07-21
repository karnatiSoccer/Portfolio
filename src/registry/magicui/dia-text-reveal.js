'use client';

import { useState, useEffect } from 'react';

export function DiaTextReveal({ text, repeat, repeatDelay = 1.2 }) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!text || !Array.isArray(text) || text.length === 0) return;
    
    // Only repeat if there's more than one item, otherwise it's just a constant shine
    if (repeat && text.length > 1) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % text.length);
          setIsTransitioning(false);
        }, 400); // 400ms fade transition
      }, repeatDelay * 1000);
      
      return () => clearInterval(interval);
    }
  }, [text, repeat, repeatDelay]);

  if (!text || !Array.isArray(text)) return null;

  return (
    <span className="relative inline-block">
      <span
        className={`inline-block transition-all duration-400 transform ease-in-out bg-gradient-to-r from-zinc-400 via-[#c084fc] to-zinc-400 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic ${
          isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
        style={{
          animation: 'shine 2.5s linear infinite'
        }}
      >
        {text[index]}
      </span>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
      `}} />
    </span>
  );
}
