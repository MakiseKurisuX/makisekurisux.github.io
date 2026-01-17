import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

const colors = ['#61dafb', '#f50057', '#ffffff', '#ffff00', '#00ff00'];

const ParticleExplosion: React.FC = () => {
  const [explosions, setExplosion] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    // Only trigger if clickable element? No, trigger everywhere for fun
    // Limit number of active explosions to prevent performance issues
    setExplosion(prev => [
      ...prev.slice(-4),
      { id: Date.now(), x: e.clientX, y: e.clientY }
    ]);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9998 }}>
      <AnimatePresence>
        {explosions.map(explosion => (
          <ExplosionGroup key={explosion.id} x={explosion.x} y={explosion.y} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ExplosionGroup: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  // Create ~12 particles
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    angle: (i / 12) * 360,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x, y, scale: 1, opacity: 1 }}
          animate={{
            x: x + Math.cos((p.angle * Math.PI) / 180) * 100,
            y: y + Math.sin((p.angle * Math.PI) / 180) * 100,
            scale: 0,
            opacity: 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }}
        />
      ))}
    </>
  );
};

export default ParticleExplosion;
