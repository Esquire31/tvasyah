import { useEffect, useState } from 'react';
import { fairyDustCursor } from 'cursor-effects';

const FairyDustCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#c59f596a',
        boxShadow: '0 0 18px rgba(255, 255, 255, 0.35)',
        pointerEvents: 'none',
        transition: 'transform 120ms ease, opacity 120ms ease',
        zIndex: 9999,
      }}
    />
  );
};

export default FairyDustCursor;
