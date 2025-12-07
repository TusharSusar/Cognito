// // import { Button } from "./ui/button";
// import { MessageCircle, Sparkles } from "lucide-react";
// import { GoArrowUpRight } from "react-icons/go";
// import { useNavigate } from "react-router-dom";

// export function HeroSection() {

//   const navigate = useNavigate();

//   const handleAuth = (type) => {
//     // In a real application: navigate('/auth', { state: { mode: type } });
//     const authorizeduser = JSON.parse(sessionStorage.getItem("user"));
//     if (authorizeduser) navigate(`/chat`);
//     else {
//       console.log(`Navigating to ${type} page`);
//       navigate(`/${type}`);
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
//       {/* Background gradient effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(12,175,255,0.1),transparent_50%)] pointer-events-none" />

//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         {/* Main Heading */}
//         <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent select-none">
//           Chat Smarter,
//           <br />
//           Connect Better
//         </h1>

//         {/* Tagline */}
//         <p className="mb-4 text-text/90 text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto">
//           Experience the next generation of messaging with AI-powered
//           conversations
//         </p>

//         {/* Description */}
//         <p className="mb-12 text-text/40 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
//           Cognito brings intelligence to your conversations with real-time
//           collaboration, seamless media sharing, and personalized AI assistance.
//           Connect with anyone, anywhere.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             onClick={() => handleAuth("signup")}
//             className="px-6 py-2 bg-primary text-black rounded-lg hover:bg-cyan-300 flex items-center gap-2 transition-all duration-200 transform font-semibold shadow-lg shadow-cyan-400/25 cursor-pointer"
//           >
//             Try Cognito
//             <span>
//               <GoArrowUpRight/>
//             </span>
//           </button>
//           {/* <button
//             size="lg"
//             variant="outline"
//             className="border-primary/50 hover:bg-primary/10 px-8 py-6"
//           >
//             Watch Demo
//           </button> */}
//         </div>

//         {/* Stats or Social Proof */}
//         {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
//             <div className="text-3xl mb-2 text-primary">10M+</div>
//             <div className="text-foreground/70">Active Users</div>
//           </div>
//           <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
//             <div className="text-3xl mb-2 text-primary">99.9%</div>
//             <div className="text-foreground/70">Uptime</div>
//           </div>
//           <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
//             <div className="text-3xl mb-2 text-primary">150+</div>
//             <div className="text-foreground/70">Countries</div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

import React, { useLayoutEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

// Bubble Background Component
// const BubbleBackground = ({ className }) => {
//   return (
//     <div className={`absolute inset-0 overflow-hidden ${className}`}>
//       <style jsx="true">{`
//         @keyframes pulse-glow {
//           0% { transform: scale(1) translate(-20%, -20%); opacity: 0.5; }
//           100% { transform: scale(1.1) translate(0%, 0%); opacity: 0.7; }
//         }

//         .bg-dot-grid {
//           --dot-color: rgba(12, 175, 255, 0.15);
//           --dot-size: 2px;
//           background-image: radial-gradient(var(--dot-color) var(--dot-size), transparent 0);
//           background-size: 30px 30px;
//         }
//       `}</style>

//       {/* Radial Gradient Glow Point 1 (Top Left) */}
//       <div
//         className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl opacity-50 pointer-events-none"
//         style={{ animation: 'pulse-glow 6s ease-in-out infinite alternate' }}
//       ></div>

//       {/* Radial Gradient Glow Point 2 (Bottom Right) */}
//       <div
//         className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl opacity-40 pointer-events-none"
//         style={{ animation: 'pulse-glow 8s ease-in-out infinite alternate-reverse', transform: 'translate(50%, 50%)' }}
//       ></div>

//       {/* Pulsing Grid Overlay */}
//       <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none"></div>
//     </div>
//   );
// };

const BubbleBackground = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      <style jsx="true">{`
        @keyframes pulse-glow {
          0% {
            transform: scale(1) translate(-20%, -20%);
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: scale(1.2) translate(0%, 0%);
            opacity: 0.5;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .bg-dot-grid {
          --dot-color: rgba(12, 175, 255, 0.08);
          --dot-size: 1px;
          background-image: radial-gradient(
            var(--dot-color) var(--dot-size),
            transparent 1px
          );
          background-size: 40px 40px;
          background-position: 0 0;
        }

        .gradient-line {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(12, 175, 255, 0.2),
            transparent
          );
          animation: shimmer 4s ease-in-out infinite;
        }
      `}</style>

      {/* Base dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none"></div>

      {/* Horizontal gradient lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px gradient-line"></div>
      <div
        className="absolute top-1/2 left-0 right-0 h-px gradient-line"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-3/4 left-0 right-0 h-px gradient-line"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Primary Glow Point 1 (Top Left) - Cyan dominant */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12, 175, 255, 0.15) 0%, rgba(12, 175, 255, 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      ></div>

      {/* Secondary Glow Point 2 (Bottom Right) - Cyan with slight blue tint */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12, 175, 255, 0.1) 0%, rgba(9, 143, 204, 0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "pulse-glow 10s ease-in-out infinite 1s",
        }}
      ></div>

      {/* Accent Glow Point 3 (Top Right) - Subtle cyan accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12, 175, 255, 0.08) 0%, transparent 60%)",
          filter: "blur(50px)",
          animation: "pulse-glow 7s ease-in-out infinite 2s",
          transform: "translate(30%, -30%)",
        }}
      ></div>

      {/* Accent Glow Point 4 (Bottom Left) - Secondary color */}
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(9, 143, 204, 0.1) 0%, transparent 60%)",
          filter: "blur(70px)",
          animation: "pulse-glow 9s ease-in-out infinite 1.5s",
          transform: "translate(-20%, 20%)",
        }}
      ></div>

      {/* Floating particle elements */}
      <div
        className="absolute -z-10 top-1/3 left-1/3 w-[380px] h-[380px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(12,175,255,0.6), rgba(12,175,255,0.15))",
          animation: "float-slow 15s ease-in-out infinite",
        }}
      ></div>

      {/*  */}
      {/* TOP-LEFT BUBBLE */}
      {/* <div
  className="absolute top-0 left-0 w-[45vw] h-[45vw] max-w-[350px] max-h-[350px] rounded-full pointer-events-none"
  style={{
    background: "rgba(12, 175, 255, 0.45)",
    filter: "blur(70px)",
    animation: "float-slow 18s ease-in-out infinite",
  }}
></div> */}

      {/* TOP-RIGHT BUBBLE */}
      <div
        className="absolute top-0 right-10 w-[45vw] h-[45vw] max-w-[350px] max-h-[350px] rounded-full pointer-events-none"
        style={{
          background: "rgba(12, 175, 255, 0.25)",
          filter: "blur(70px)",
          animation: "float-slow 20s ease-in-out infinite 2s",
        }}
      ></div>

      {/* BOTTOM-LEFT BUBBLE */}
      <div
        className="absolute bottom-0 left-50 w-[45vw] h-[45vw] max-w-[350px] max-h-[350px] rounded-full pointer-events-none"
        style={{
          background: "rgba(12, 175, 255, 0.25)",
          filter: "blur(70px)",
          animation: "float-slow 22s ease-in-out infinite 1s",
        }}
      ></div>

      {/* BOTTOM-RIGHT BUBBLE */}
      <div
        className="absolute bottom-10 right-0 w-[45vw] h-[45vw] max-w-[350px] max-h-[350px] rounded-full pointer-events-none"
        style={{
          background: "rgba(12, 175, 255, 0.25)",
          filter: "blur(70px)",
          animation: "float-slow 24s ease-in-out infinite 3s",
        }}
      ></div>

      <div
        id="home"
        className="absolute top-10 left-2 w-1.5 h-1.5 rounded-full pointer-events-none"
        style={{
          background: "rgba(12, 175, 255, 0.4)",
          animation: "float-slow 12s ease-in-out infinite 3s",
          filter: "blur(0.5px)",
        }}
      ></div>

      <div
        className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full pointer-events-none"
        style={{
          background: "rgba(12, 175, 255, 0.5)",
          animation: "float-slow 18s ease-in-out infinite 1.5s",
          filter: "blur(0.5px)",
        }}
      ></div>

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(12, 175, 255, 0.02) 0px,
              transparent 2px,
              transparent 4px,
              rgba(12, 175, 255, 0.01) 6px
            )
          `,
          opacity: 0.4,
        }}
      ></div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      ></div>
    </div>
  );
};

// export BubbleBackground;

export function HeroSection() {
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate()

  // Text animations
  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      contentRef.current.style.transform = "translateY(30px)";
      contentRef.current.style.animation = "slideUp 1s ease-out forwards";
    }

    if (scrollRef.current) {
      scrollRef.current.style.opacity = "0";
      scrollRef.current.style.animation = "fadeIn 1.5s ease-out 0.3s forwards";
    }

    // Animate each heading word
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll(".word");
      words.forEach((word, index) => {
        word.style.opacity = "0";
        word.style.transform = "translateY(40px) rotateX(90deg)";
        word.style.animation = `wordFlip 0.8s ease-out ${
          0.2 + index * 0.15
        }s forwards`;
      });
    }

    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.animation = "slideUp 0.8s ease-out 0.8s forwards";
    }
  }, []);

  const handleAuth = (type) => {
    const authorizeduser = JSON.parse(sessionStorage.getItem("user"));
    if (authorizeduser) navigate(`/chat`);
    else {
      console.log(`Navigating to ${type} page`);
      navigate(`/${type}`);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes wordFlip {
          0% {
            opacity: 0;
            transform: translateY(40px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes textShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(12, 175, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(12, 175, 255, 0.6);
          }
        }

        .word {
          display: inline-block;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .glow-text {
          background: linear-gradient(135deg, #f1f1f1 0%, #0CAFFF 50%, #f1f1f1 100%);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 4s ease-in-out infinite;
        }

        .highlight-box {
          position: relative;
          display: inline-block;
          padding: 0 8px;
        }

        .highlight-box::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid #0CAFFF;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(12, 175, 255, 0.1), rgba(12, 175, 255, 0.05));
          z-index: -1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .button-glow {
          box-shadow: 0 0 20px rgba(12, 175, 255, 0.3);
          transition: all 0.3s ease;
        }

        .button-glow:hover {
          box-shadow: 0 0 40px rgba(12, 175, 255, 0.6), inset 0 0 20px rgba(12, 175, 255, 0.2);
        }

        canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
        <BubbleBackground className="z-0" />

        <div className="content-wrapper max-w-4xl mx-auto w-full text-center relative z-10">
          {/* Scroll hint at top */}
          {/* <div ref={scrollRef} className="mb-12 text-sm tracking-widest text-gray-400 uppercase font-light">
            Scroll to explore
          </div> */}

          {/* Main content */}
          <div ref={contentRef} className="space-y-8">
            {/* Subtitle */}
            {/* <div className="text-sm md:text-base tracking-wider text-gray-500 uppercase font-light">
              UX/UI & Developer Tools
            </div> */}

            {/* Main Heading with word animations */}
            <div ref={headingRef} className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="word">Chat</span>
                <br />
                <span className="word">Smarter,</span>
                <br />
                <span className="word highlight-box glow-text">
                  Connect Better
                </span>
              </h1>
            </div>

            {/* Description with fade */}
            {/* <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Experience the future of intelligent conversations with AI-powered insights, real-time collaboration, and seamless connectivity that transforms how teams work together.
            </p> */}

            {/* CTA Button */}
            <div ref={ctaRef} className="pt-6">
              <button
                onClick={() => handleAuth("signup")}
                className="button-glow group px-6 py-3 bg-gradient-to-r from-[#0CAFFF] to-blue-600 text-black rounded-lg hover:shadow-2xl flex items-center gap-3 transition-all duration-300 transform font-semibold text-base mx-auto cursor-pointer"
              >
                Start a Chat
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  {/* <GoArrowUpRight className="w-5 h-5" /> */}
                  <GoArrowUpRight size={20} />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#0CAFFF]/30 to-transparent" />
        </div>
      </section>
    </>
  );
}
// import React, { useLayoutEffect, useRef, useEffect } from "react";
// import { GoArrowUpRight } from "react-icons/go";

// export function HeroSection() {
//   const contentRef = useRef(null);
//   const headingRef = useRef(null);
//   const ctaRef = useRef(null);
//   const scrollRef = useRef(null);
//   const canvasRef = useRef(null);

//   // 3D Canvas background animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let particles = [];
//     let time = 0;

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.z = Math.random() * 100;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.speedY = (Math.random() - 0.5) * 0.5;
//         this.color = Math.random() > 0.5 ? '#0CAFFF' : '#09' + Math.floor(Math.random() * 100 + 100) + 'CC';
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.z -= 0.5;

//         if (this.z <= 0) {
//           this.z = 100;
//           this.x = Math.random() * canvas.width;
//           this.y = Math.random() * canvas.height;
//         }

//         if (this.x > canvas.width) this.x = 0;
//         if (this.x < 0) this.x = canvas.width;
//         if (this.y > canvas.height) this.y = 0;
//         if (this.y < 0) this.y = canvas.height;
//       }

//       draw() {
//         const scale = this.z / 100;
//         const opacity = scale;
//         ctx.fillStyle = this.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
//         ctx.fillRect(this.x, this.y, this.size * scale, this.size * scale);
//       }
//     }

//     // Initialize particles
//     for (let i = 0; i < 100; i++) {
//       particles.push(new Particle());
//     }

//     // Draw flowing lines/shapes
//     const drawFlowingShapes = () => {
//       time += 0.01;

//       // Create flowing wave patterns
//       ctx.strokeStyle = 'rgba(12, 175, 255, 0.1)';
//       ctx.lineWidth = 2;

//       for (let i = 0; i < 5; i++) {
//         ctx.beginPath();
//         const startX = (time * 50 + i * 100) % canvas.width;
//         const startY = canvas.height * 0.3 + Math.sin(time + i) * 100;

//         for (let x = startX; x < startX + 300; x += 20) {
//           const y = startY + Math.sin((x * 0.01 + time) * Math.PI) * 80;
//           ctx.lineTo(x, y);
//         }
//         ctx.stroke();
//       }

//       // Draw gradient circles
//       ctx.fillStyle = 'rgba(12, 175, 255, 0.05)';
//       const circle1X = Math.sin(time * 0.3) * 200 + canvas.width * 0.25;
//       const circle1Y = Math.cos(time * 0.4) * 150 + canvas.height * 0.4;
//       ctx.beginPath();
//       ctx.arc(circle1X, circle1Y, 150, 0, Math.PI * 2);
//       ctx.fill();

//       ctx.fillStyle = 'rgba(12, 175, 255, 0.03)';
//       const circle2X = Math.sin(time * 0.2 + Math.PI) * 250 + canvas.width * 0.75;
//       const circle2Y = Math.cos(time * 0.3) * 200 + canvas.height * 0.5;
//       ctx.beginPath();
//       ctx.arc(circle2X, circle2Y, 200, 0, Math.PI * 2);
//       ctx.fill();
//     };

//     const animate = () => {
//       // Clear with semi-transparent black for motion blur
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       drawFlowingShapes();

//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Text animations
//   useLayoutEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.style.opacity = "0";
//       contentRef.current.style.transform = "translateY(30px)";
//       contentRef.current.style.animation = "slideUp 1s ease-out forwards";
//     }

//     if (scrollRef.current) {
//       scrollRef.current.style.opacity = "0";
//       scrollRef.current.style.animation = "fadeIn 1.5s ease-out 0.3s forwards";
//     }

//     // Animate each heading word
//     if (headingRef.current) {
//       const words = headingRef.current.querySelectorAll('.word');
//       words.forEach((word, index) => {
//         word.style.opacity = "0";
//         word.style.transform = "translateY(40px) rotateX(90deg)";
//         word.style.animation = `wordFlip 0.8s ease-out ${0.2 + index * 0.15}s forwards`;
//       });
//     }

//     if (ctaRef.current) {
//       ctaRef.current.style.opacity = "0";
//       ctaRef.current.style.animation = "slideUp 0.8s ease-out 0.8s forwards";
//     }
//   }, []);

//   const handleAuth = (type) => {
//     console.log(`Navigating to ${type} page`);
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes wordFlip {
//           0% {
//             opacity: 0;
//             transform: translateY(40px) rotateX(90deg);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) rotateX(0);
//           }
//         }

//         @keyframes textShimmer {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(12, 175, 255, 0.3);
//           }
//           50% {
//             box-shadow: 0 0 40px rgba(12, 175, 255, 0.6);
//           }
//         }

//         .word {
//           display: inline-block;
//           transform-style: preserve-3d;
//           perspective: 1000px;
//         }

//         .glow-text {
//           background: linear-gradient(135deg, #f1f1f1 0%, #0CAFFF 50%, #f1f1f1 100%);
//           background-size: 200% 200%;
//           background-clip: text;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: textShimmer 4s ease-in-out infinite;
//         }

//         .highlight-box {
//           position: relative;
//           display: inline-block;
//           padding: 0 8px;
//         }

//         .highlight-box::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border: 2px solid #0CAFFF;
//           border-radius: 12px;
//           background: linear-gradient(135deg, rgba(12, 175, 255, 0.1), rgba(12, 175, 255, 0.05));
//           z-index: -1;
//           animation: pulse-glow 3s ease-in-out infinite;
//         }

//         .button-glow {
//           box-shadow: 0 0 20px rgba(12, 175, 255, 0.3);
//           transition: all 0.3s ease;
//         }

//         .button-glow:hover {
//           box-shadow: 0 0 40px rgba(12, 175, 255, 0.6), inset 0 0 20px rgba(12, 175, 255, 0.2);
//         }

//         canvas {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 0;
//         }

//         .content-wrapper {
//           position: relative;
//           z-index: 10;
//         }
//       `}</style>

//       <canvas ref={canvasRef} />

//       <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
//         <div className="content-wrapper max-w-4xl mx-auto w-full text-center">

//           {/* Scroll hint at top */}
//           {/* <div ref={scrollRef} className="mb-12 text-sm tracking-widest text-gray-400 uppercase font-light">
//             Scroll to explore
//           </div> */}

//           {/* Main content */}
//           <div ref={contentRef} className="space-y-8">
//             {/* Subtitle */}
//             {/* <div className="text-sm md:text-base tracking-wider text-gray-500 uppercase font-light">
//               UX/UI & Developer Tools
//             </div> */}

//             {/* Main Heading with word animations */}
//             <div ref={headingRef} className="space-y-4">
//               <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
//                 <span className="word">Chat</span>
//                 <br />
//                 <span className="word">Smarter,</span>
//                 <br />
//                 <span className="word highlight-box glow-text">Connect Better</span>
//               </h1>
//             </div>

//             {/* Description with fade */}
//             {/* <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
//               Experience the future of intelligent conversations with AI-powered insights, real-time collaboration, and seamless connectivity that transforms how teams work together.
//             </p> */}

//             {/* CTA Button */}
//             <div ref={ctaRef} className="pt-6">
//               <button
//                 onClick={() => handleAuth("signup")}
//                 className="button-glow group px-8 py-4 bg-gradient-to-r from-[#0CAFFF] to-blue-600 text-black rounded-lg hover:shadow-2xl flex items-center gap-3 transition-all duration-300 transform font-semibold text-base mx-auto"
//               >
//                 Start a Project
//                 <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
//                   <GoArrowUpRight className="w-5 h-5" />
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Bottom accent */}
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#0CAFFF]/30 to-transparent" />
//         </div>
//       </section>
//     </>
//   );
// }
