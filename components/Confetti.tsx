import React, { useEffect, useRef } from 'react';

export const Confetti: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 150; // Reduced from 400 to 150 for "normal" density
    const colors = ['#14b8a6', '#facc15', '#3b82f6', '#f43f5e', '#a855f7', '#10b981']; 

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        // Start from above the viewport to rain down
        this.y = Math.random() * -canvas!.height; 
        
        // Slower horizontal drift
        this.vx = (Math.random() - 0.5) * 4; 
        
        // Slower, more natural fall speed
        this.vy = Math.random() * 6 + 4; 
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 10 + 5; 
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 8; // Slower spin
      }

      update(elapsed: number, duration: number) {
        this.y += this.vy;
        this.x += this.vx;
        this.rotation += this.rotationSpeed;
        
        // Add a slight oscillation to x for paper drift effect
        this.vx += (Math.random() - 0.5) * 0.2;
        
        // Cap max horizontal speed
        if(this.vx > 3) this.vx = 3;
        if(this.vx < -3) this.vx = -3;

        // Reset if it goes off bottom, BUT only if we are in the first 60% of animation
        if (this.y > canvas!.height) {
          if (elapsed < duration * 0.6) {
             this.y = -20;
             this.x = Math.random() * canvas!.width;
             this.vy = Math.random() * 6 + 4;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        // Draw confetti as rectangle for a paper slip look
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6); 
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;
    let startTime = Date.now();
    const duration = 3000;
    const fadeDuration = 1000; // Duration of the fade out at the end

    const animate = () => {
      if (!ctx) return;
      
      const elapsed = Date.now() - startTime;
      
      // Check for timeout
      if (elapsed > duration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      // Calculate opacity for fade out
      let opacity = 1;
      const fadeStart = duration - fadeDuration;
      if (elapsed > fadeStart) {
        opacity = Math.max(0, 1 - (elapsed - fadeStart) / fadeDuration);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply opacity
      ctx.globalAlpha = opacity;

      particles.forEach((p) => {
        p.update(elapsed, duration);
        p.draw();
      });
      
      // Reset opacity for next frame (though clearing rect handles canvas, state persists)
      ctx.globalAlpha = 1; 

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  );
};