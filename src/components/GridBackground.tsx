'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function GridBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const gridX = useTransform(mouseX, [-500, 500], [15, -15]);
  const gridY = useTransform(mouseY, [-500, 500], [15, -15]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 grid-pattern opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-transparent to-surface-0" />
    </div>
  );
}
