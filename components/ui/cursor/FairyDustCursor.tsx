import { useEffect, useState } from 'react';
import { fairyDustCursor } from 'cursor-effects';

const FairyDustCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('cursor-hover') || target.closest('a') || target.closest('button') || target.closest('.cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  useEffect(() => {
    const cursor = fairyDustCursor({
      colors: ['#c7a17a', '#c5a059', '#7c9082'],
    });

    return () => {
      cursor?.destroy?.();
    };
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="fairy-dust-core"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? '60px' : '18px',
        height: isHovering ? '60px' : '18px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: isHovering ? '#c59f5946' : '#c59f596a',
        boxShadow: '0 0 18px rgba(255, 255, 255, 0.35)',
        pointerEvents: 'none',
        transition: 'width 200ms ease, height 200ms ease, background 200ms ease',
        zIndex: 9999,
      }}
    />
  );
};

export default FairyDustCursor;
