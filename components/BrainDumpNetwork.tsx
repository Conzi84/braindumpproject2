'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function BrainDumpNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isDarkModeRef = useRef(false);

  useEffect(() => {
    // Prevent SSR issues
    if (!mounted) {
      setMounted(true);
      return;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with DPI scaling
    const resizeCanvas = () => {
      if (!container) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();

    // Initialize dots
    const dotCount = 12;
    const dots: Dot[] = [];
    const rect = container.getBoundingClientRect();
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    dotsRef.current = dots;

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      // Reinitialize dots with new dimensions
      const newRect = container?.getBoundingClientRect();
      if (newRect) {
        dotsRef.current.forEach((dot) => {
          dot.x = Math.min(dot.x, newRect.width);
          dot.y = Math.min(dot.y, newRect.height);
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Update dark mode ref efficiently
    const updateDarkMode = () => {
      isDarkModeRef.current = document.documentElement.classList.contains('dark');
    };
    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    // Animation loop
    const animate = () => {
      if (!container) return;
      
      try {
        const rect = container.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        const dots = dotsRef.current;
        const currentIsDarkMode = isDarkModeRef.current;
        const connectionDist = isHovered ? 150 : 100;
        const connectionDistSq = connectionDist ** 2; // Use squared distance to avoid sqrt
        
        // Update dot positions
        dots.forEach((dot) => {
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x <= 0 || dot.x >= rect.width) dot.vx *= -1;
          if (dot.y <= 0 || dot.y >= rect.height) dot.vy *= -1;

          // Keep within bounds
          dot.x = Math.max(0, Math.min(rect.width, dot.x));
          dot.y = Math.max(0, Math.min(rect.height, dot.y));
        });

        // Draw connections - optimized with squared distance check
        const strokeColor = isHovered
          ? (currentIsDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.3)')
          : (currentIsDarkMode ? 'rgba(209, 213, 219, 0.15)' : 'rgba(161, 161, 170, 0.15)');
        
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;

        // Use squared distance to avoid expensive sqrt until needed
        for (let i = 0; i < dots.length; i++) {
          const dot1 = dots[i];
          for (let j = i + 1; j < dots.length; j++) {
            const dot2 = dots[j];
            const dx = dot2.x - dot1.x;
            const dy = dot2.y - dot1.y;
            const distanceSq = dx * dx + dy * dy;

            // Only calculate sqrt if within connection distance
            if (distanceSq < connectionDistSq) {
              const distance = Math.sqrt(distanceSq);
              const opacity = 1 - distance / connectionDist;
              ctx.globalAlpha = opacity * (isHovered ? 0.4 : 0.2);
              ctx.beginPath();
              ctx.moveTo(dot1.x, dot1.y);
              ctx.lineTo(dot2.x, dot2.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }

        // Draw dots - keep individual draws for correct rendering
        const dotColor = isHovered
          ? (currentIsDarkMode ? 'rgb(59, 130, 246)' : 'rgb(37, 99, 235)')
          : (currentIsDarkMode ? 'rgb(209, 213, 219)' : 'rgb(161, 161, 170)');
        
        ctx.fillStyle = dotColor;
        const dotRadius = isHovered ? 4 : 3;
        
        dots.forEach((dot) => {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Glow effect on hover - only if needed
        if (isHovered) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = currentIsDarkMode 
            ? 'rgba(59, 130, 246, 0.5)' 
            : 'rgba(37, 99, 235, 0.5)';
          
          dots.forEach((dot) => {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
            ctx.fill();
          });
          
          ctx.shadowBlur = 0;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Canvas animation error:', error);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative h-64 w-full bg-light-surface dark:bg-dark-surface rounded-lg border border-light-text/10 dark:border-dark-text/10 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-mono text-sm">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/brain-dump-project"
      className="group relative block overflow-hidden rounded-lg bg-light-surface dark:bg-dark-surface border border-light-text/10 dark:border-dark-text/10 hover:border-light-accent dark:hover:border-dark-accent transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="relative h-64 w-full"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text mb-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors text-center px-2">
            Brain Dump Project
          </h3>
          <p className="text-xs sm:text-sm font-ibm-plex-sans text-light-text-secondary dark:text-dark-text-secondary text-center max-w-md group-hover:text-light-text dark:group-hover:text-dark-text transition-colors px-2">
            More information about the Brain Dump Project
          </p>
          <div className="mt-4 text-xs font-ibm-plex-mono text-light-accent dark:text-dark-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more →
          </div>
        </div>
      </div>
    </Link>
  );
}
