import React, { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const maxStaticStars = 150;

    // Resize canvas to match the window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor(x, y, isTrail = false) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = isTrail ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5;
        this.speedX = isTrail ? (Math.random() - 0.5) * 3 : (Math.random() - 0.5) * 0.5;
        this.speedY = isTrail ? (Math.random() - 0.5) * 3 : (Math.random() - 0.5) * 0.5;
        this.isTrail = isTrail;
        this.life = isTrail ? 1 : Infinity;
        this.decay = Math.random() * 0.03 + 0.02;
        // Trail particles can have slight color variations (blue/purple/white)
        const colors = ["255, 255, 255", "147, 197, 253", "196, 181, 253"];
        this.color = isTrail ? colors[Math.floor(Math.random() * colors.length)] : "255, 255, 255";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.isTrail) {
          this.life -= this.decay;
        } else {
          // Wrap static stars around edges
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.isTrail ? this.life : 0.6})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow to trail particles
        if (this.isTrail) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${this.color}, ${this.life})`;
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    // Initialize static stars
    for (let i = 0; i < maxStaticStars; i++) {
      particles.push(new Particle());
    }

    // Handle mouse move to create trail
    const handleMouseMove = (e) => {
      // Spawn 3-5 particles at cursor position
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = 0; i < 4; i++) {
        particles.push(new Particle(x, y, true));
      }
    };

    // Also spawn on scroll to create a "scroll trail" effect in the center
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      if (scrollSpeed > 2) {
        // Spawn particles randomly horizontally, but near the vertical center
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(
            Math.random() * canvas.width, 
            canvas.height / 2 + (Math.random() - 0.5) * 200, 
            true
          ));
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const animate = () => {
      // Clear with slight trailing effect
      ctx.fillStyle = "rgba(10, 15, 30, 0.4)"; // Dark space color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        // Remove dead trail particles
        if (p.isTrail && p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'auto' }}
    />
  );
}
