import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

declare global {
  interface Window {
    VANTA?: any;
    THREE?: any;
  }
}

const GlobalBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Wait for scripts to load
    const initVanta = () => {
      if (!window.VANTA || !window.THREE || vantaEffect.current) return;

      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 0.8,
        color: 0x1e3a8a,
        backgroundColor: 0x0a0a0a,
        points: 8.00,
        maxDistance: 25.00,
        spacing: 20.00,
        backgroundAlpha: 0.9,
        showDots: true,
        forceAnimate: true
      });
    };

    // Check if scripts are loaded, if not wait a bit
    const checkAndInit = () => {
      if (window.VANTA && window.THREE) {
        initVanta();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <Box
      ref={vantaRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    />
  );
};

export default GlobalBackground;
