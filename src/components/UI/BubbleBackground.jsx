// import React from 'react';

// // The BubbleBackground component creates a subtle, dynamic background 
// // using radial gradients, blur, and an animated grid pattern (via inline CSS).

// const BubbleBackground = ({ interactive, className }) => {
//   return (
//     <div className={`absolute inset-0 overflow-hidden ${className}`}>
//       {/* Inline CSS for necessary keyframes. 
//         Tailwind cannot define keyframes directly, so we use a style block.
//       */}
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
      
//       {/* Radial Gradient Glow Point 1 (Top Left) - Pulsing animation */}
//       <div 
//         className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl opacity-50 pointer-events-none"
//         style={{ animation: 'pulse-glow 6s ease-in-out infinite alternate' }}
//       ></div>

//       {/* Radial Gradient Glow Point 2 (Bottom Right) - Pulsing animation */}
//       <div 
//         className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl opacity-40 pointer-events-none"
//         style={{ animation: 'pulse-glow 8s ease-in-out infinite alternate-reverse', transform: 'translate(50%, 50%)' }}
//       ></div>

//       {/* Pulsing Grid Overlay (Modernizing the look) */}
//       <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none"></div>
//     </div>
//   );
// };

// export default BubbleBackground;
// // ```
// // eof

// // To use this, you would update your `HeroSection.jsx` imports:

// // ```javascript
// // HeroSection.jsx
// // import BubbleBackground from './components/ui/BubbleBackground.jsx'; 
// // ...
// // Then replace the canvas in the return block:
// // <canvas ref={canvasRef} />
// // with:
// {/* <BubbleBackground className="absolute inset-0" interactive /> */}