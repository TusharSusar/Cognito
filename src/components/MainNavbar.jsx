// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.png";

// function MainNavbar() {
//   // State for mobile menu toggle
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // State for scroll effect on header
//   const [isScrolled, setIsScrolled] = useState(false);

//   // State for active navbar section
//   const [activeSection, setActiveSection] = useState("home");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);

//       // Update active section based on scroll position
//       const sections = ["home", "services", "pricing"];
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const height = element.offsetHeight;

//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + height
//           ) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleAuth = (type) => {
//     // In a real application: navigate('/auth', { state: { mode: type } });
//     const authorizeduser = JSON.parse(sessionStorage.getItem("user"));
//     if (authorizeduser) navigate(`/chat`);
//     else {
//       console.log(`Navigating to ${type} page`);
//       navigate(`/${type}`);
//     }
//   };

//   // Smooth scroll to section
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 bg-transparent bg-clip-padding backdrop-blur-xl  transition-all duration-300 sm:border-b sm:border-border ${
//         isScrolled
//           ? "backdrop-blur-xl border-b border-white/20"
//           : "border-b border-red-200/20"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo and Brand */}
//           <div className="flex items-center justify-center space-x-3">
//             <div className="w-8 h-10 flex items-center justify-center">
//               <img src={logo} className="object-cover" alt="Logo" />
//             </div>
//             <h1 className="text-2xl font-bold text-white">Cognito</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {[
//               { id: "home", label: "Home" },
//               { id: "services", label: "Services" },
//               { id: "pricing", label: "Pricing" },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
//                   activeSection === item.id
//                     ? "text-cyan-400"
//                     : "text-gray-300 hover:text-cyan-400"
//                 }`}
//               >
//                 {item.label}
//                 {activeSection === item.id && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
//                 )}
//               </button>
//             ))}

//             <div className="flex items-center space-x-4 ml-8">
//               <button
//                 onClick={() => handleAuth("signin")}
//                 className="px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-cyan-400/50 cursor-pointer"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => handleAuth("signup")}
//                 className="px-6 py-2 bg-primary text-black rounded-lg hover:bg-cyan-300 transition-all duration-200 transform font-bold shadow-lg shadow-cyan-400/25 cursor-pointer"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-white p-2 hover:text-cyan-400 transition-colors"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-black/95 backdrop-blur-xl rounded-lg mt-2 p-4 space-y-3 border border-white/20">
//             {[
//               { id: "home", label: "Home" },
//               { id: "services", label: "Services" },
//               { id: "features", label: "Features" },
//               { id: "reviews", label: "Reviews" },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`block w-full text-left px-4 py-2 transition-colors duration-200 rounded-lg hover:bg-gray-600/40 ${
//                   activeSection === item.id
//                     ? "text-cyan-400"
//                     : "text-gray-300 hover:text-cyan-400"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <div className="border-t border-white/20 pt-3 space-y-3">
//               <button
//                 onClick={() => handleAuth("signin")}
//                 className="block w-full px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-cyan-400/50 cursor-pointer"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => handleAuth("signup")}
//                 className="block w-full px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-all duration-200 font-medium shadow-lg shadow-cyan-400/25 cursor-pointer"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default MainNavbar;

//! Version 2 without new animation

import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
// 💡 GSAP Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MainNavbar() {
  // Ref for the header element
  const headerRef = useRef(null);

  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for scroll effect (used by useEffect below)
  const [isScrolled, setIsScrolled] = useState(false);

  // State for active navbar section
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();

  // --- GSAP Initial Entrance Animation (runs once on load) ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state: hidden above the screen
      gsap.set(headerRef.current, { y: -50, opacity: 0 });

      // Animate in the header
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.3, // Give Hero Section a slight head start
      });

      // Optional: Stagger the appearance of logo/links/buttons for a modern touch
      // Note: This requires tagging these elements with a class like 'gsap-nav-item'
      // We will skip this for now to keep the code cleaner, but it's a great modernization technique.
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // --- Scroll Effect with GSAP (runs on scroll) ---
  useEffect(() => {
    // 💡 Use GSAP to animate the header style change on scroll
    // This is smoother than conditional Tailwind classes.
    if (headerRef.current) {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top-=10", // Trigger when scrolled 10px down
        end: 99999,
        onUpdate: (self) => {
          const scrolled = self.direction === 1 || self.progress > 0;

          // Update React state to control Tailwind classes not handled by GSAP (e.g., mobile menu border)
          setIsScrolled(scrolled);

          // Animate background color/filter for smooth transition
          if (scrolled) {
            gsap.to(headerRef.current, {
              duration: 0.3,
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker, translucent BG
              backdropFilter: "blur(12px)", // Apply the blur smoothly
              // Set border bottom color/style if needed (Tailwind classes will handle the rest)
            });
          } else {
            gsap.to(headerRef.current, {
              duration: 0.3,
              backgroundColor: "transparent", // Back to transparent
              backdropFilter: "blur(0px)", // Remove blur
            });
          }
        },
      });
    }

    // Existing scroll handler for active section logic
    const handleScroll = () => {
      // ... (your existing active section logic remains here)
      // Update active section based on scroll position
      const sections = ["home", "services", "pricing"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function for ScrollTrigger and event listener
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ... (handleAuth and scrollToSection functions remain the same)
  const handleAuth = (type) => {
    // In a real application: navigate('/auth', { state: { mode: type } });
    const authorizeduser = JSON.parse(sessionStorage.getItem("user"));
    if (authorizeduser) navigate(`/chat`);
    else {
      console.log(`Navigating to ${type} page`);
      navigate(`/${type}`);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // GSAP smooth scroll for modernization
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: element, offsetY: 70 }, // Offset by navbar height
        ease: "power2.inOut",
      });
    }
    setIsMobileMenuOpen(false);
  };
  // Note: To use GSAP's `scrollTo`, you must install `gsap` and `gsap/ScrollToPlugin`.
  // npm install gsap
  // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  // gsap.registerPlugin(ScrollToPlugin);
  // For simplicity, I've left the original `element.scrollIntoView` commented out.

  return (
    // <header
    //   ref={headerRef} // 💡 Add ref here for GSAP targeting
    //   // 💡 Removed Tailwind classes for scroll transition, now handled by GSAP
    //   className={`fixed top-0 left-0 w-full z-50 bg-transparent sm:border-b sm:border-white/20 transition-all duration-300 ${
    //     isScrolled ? "border-white/20" : "border-red-200/20" // isScrolled state used only for tailwind border class
    //   }`}
    //   style={{
    //     // 💡 Ensure initial state is transparent before GSAP loads
    //     backgroundColor: "transparent",
    //     backdropFilter: "blur(0px)",
    //   }}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center py-4">
    //       {/* Logo and Brand */}
    //       <div className="flex items-center justify-center space-x-3">
    //         <div className="w-8 h-10 flex items-center justify-center">
    //           <img src={logo} className="object-cover" alt="Logo" />
    //         </div>
    //         <h1 className="text-2xl font-bold text-white">Cognito</h1>
    //       </div>

    //       {/* Desktop Navigation */}
    //       <nav className="hidden lg:flex items-center space-x-8">
    //         {/* Nav Links */}
    //         {[
    //           { id: "home", label: "Home" },
    //           { id: "services", label: "Services" },
    //           { id: "pricing", label: "Pricing" },
    //         ].map((item) => (
    //           <button
    //             key={item.id}
    //             onClick={() => scrollToSection(item.id)}
    //             className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
    //               activeSection === item.id
    //                 ? "text-cyan-400"
    //                 : "text-gray-300 hover:text-cyan-400"
    //             }`}
    //           >
    //             {item.label}
    //             {/* Active Underline Effect - Using Tailwind for simplicity */}
    //             {activeSection === item.id && (
    //               <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
    //             )}
    //           </button>
    //         ))}

    //         {/* Auth Buttons */}
    //         <div className="flex items-center space-x-4 ml-8">
    //           <button
    //             onClick={() => handleAuth("signin")}
    //             className="px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-cyan-400/50 cursor-pointer"
    //           >
    //             Login
    //           </button>
    //           <button
    //             onClick={() => handleAuth("signup")}
    //             className="px-6 py-2 bg-primary text-black rounded-lg hover:bg-cyan-300 transition-all duration-200 transform font-bold shadow-lg shadow-cyan-400/25 cursor-pointer"
    //           >
    //             Sign Up
    //           </button>
    //         </div>
    //       </nav>
    //       {/* ... (Mobile menu button and mobile menu rendering remains the same) */}
    //       <button
    //         className="lg:hidden text-white p-2 hover:text-cyan-400 transition-colors"
    //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           {isMobileMenuOpen ? (
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           ) : (
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           )}
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Mobile Navigation Menu */}
    //     {isMobileMenuOpen && (
    //       <div className="lg:hidden bg-black/95 backdrop-blur-xl rounded-lg mt-2 p-4 space-y-3 border border-white/20">
    //         {/* ... (Mobile menu links) ... */}
    //         {[
    //           { id: "home", label: "Home" },
    //           { id: "services", label: "Services" },
    //           { id: "features", label: "Features" },
    //           { id: "reviews", label: "Reviews" },
    //         ].map((item) => (
    //           <button
    //             key={item.id}
    //             onClick={() => scrollToSection(item.id)}
    //             className={`block w-full text-left px-4 py-2 transition-colors duration-200 rounded-lg hover:bg-gray-600/40 ${
    //               activeSection === item.id
    //                 ? "text-cyan-400"
    //                 : "text-gray-300 hover:text-cyan-400"
    //             }`}
    //           >
    //             {item.label}
    //           </button>
    //         ))}
    //         <div className="border-t border-white/20 pt-3 space-y-3">
    //           <button
    //             onClick={() => handleAuth("signin")}
    //             className="block w-full px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-cyan-400/50 cursor-pointer"
    //           >
    //             Login
    //           </button>
    //           <button
    //             onClick={() => handleAuth("signup")}
    //             className="block w-full px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-all duration-200 font-medium shadow-lg shadow-cyan-400/25 cursor-pointer"
    //           >
    //             Sign Up
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </header>
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full flex justify-center items-center z-50 transition-all duration-500 border border-white/10
  ${
    isScrolled
      ? "bg-black/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)]"
      : "bg-black/10 backdrop-blur-xl"
  }`}
    >
      <div className="px-6 py-4 w-full flex items-center justify-evenly">
        {/* LEFT: Logo */}
        <div className="flex items-center justify-center space-x-3">
          <div className="w-8 h-10 flex items-center">
            <img src={logo} className="object-cover" alt="Logo" />
          </div>
          <h1 className="text-xl font-bold text-white">Cognito</h1>
        </div>

        {/* CENTER: Desktop Rounded Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-8 bg-white/5 backdrop-blur-lg px-8 py-3 rounded-full border border-white/30">
            {[
              { id: "home", label: "Home" },
              { id: "services", label: "Services" },
              { id: "pricing", label: "Pricing" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-200 
            ${
              activeSection === item.id
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }`}
              >
                <a href={`#${item.id}`}>{item.label}</a>

                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-full bg-cyan-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* RIGHT: Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => handleAuth("signin")}
            className="px-5 py-2 rounded-full border border-white/20 text-gray-300 
        hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
          >
            Login
          </button>

          <button
            onClick={() => handleAuth("signup")}
            className="px-6 py-2 bg-cyan-400 font-bold text-black rounded-full 
        hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/25"
          >
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-white p-2 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-20 right-0 w-full 
    bg-black/90 backdrop-blur-2xl 
    border border-white/10 rounded-3xl 
    shadow-2xl p-6 space-y-4 z-50"
        >
          {[
            { id: "home", label: "Home" },
            { id: "services", label: "Services" },
            { id: "features", label: "Features" },
            { id: "reviews", label: "Reviews" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition 
        hover:bg-white/10 ${
          activeSection === item.id ? "text-cyan-400" : "text-gray-300"
        }`}
            >
              {item.label}
            </button>
          ))}

          <div className="border-t border-white/10 pt-4 space-y-3">
            <button
              onClick={() => handleAuth("signin")}
              className="w-full px-4 py-2 rounded-lg border border-white/20 text-gray-300 
        hover:text-cyan-400 hover:border-cyan-400/40 transition"
            >
              Login
            </button>

            <button
              onClick={() => handleAuth("signup")}
              className="w-full px-4 py-2 rounded-lg 
        bg-cyan-400 text-black font-bold 
        hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/25"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default MainNavbar;

//! Version 3 with modern
