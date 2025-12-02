// import React from "react";

// function Services() {
//   return (
//     <section
//       id="services"
//       className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/10"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h3 className="text-3xl font-bold text-white mb-4">Our Services</h3>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Comprehensive AI solutions tailored for your specific needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Service 1 */}
//           <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
//             <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                 />
//               </svg>
//             </div>
//             <h4 className="text-xl font-semibold text-white mb-4">
//               Customer Support
//             </h4>
//             <p className="text-gray-300 mb-4">
//               24/7 intelligent customer support that understands context and
//               provides accurate solutions instantly.
//             </p>
//             <ul className="text-sm text-gray-400 space-y-2">
//               <li>• Multi-language support</li>
//               <li>• Context-aware responses</li>
//               <li>• Seamless escalation to humans</li>
//             </ul>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-blue-400/25">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//                 />
//               </svg>
//             </div>
//             <h4 className="text-xl font-semibold text-white mb-4">
//               Content Creation
//             </h4>
//             <p className="text-gray-300 mb-4">
//               Generate high-quality content, from blog posts to marketing copy,
//               tailored to your brand voice.
//             </p>
//             <ul className="text-sm text-gray-400 space-y-2">
//               <li>• Blog posts & articles</li>
//               <li>• Social media content</li>
//               <li>• Marketing copy</li>
//             </ul>
//           </div>

//           {/* Service 3 */}
//           <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
//             <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-green-400/25">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                 />
//               </svg>
//             </div>
//             <h4 className="text-xl font-semibold text-white mb-4">
//               Data Analysis
//             </h4>
//             <p className="text-gray-300 mb-4">
//               Transform complex data into actionable insights with our
//               AI-powered analysis tools.
//             </p>
//             <ul className="text-sm text-gray-400 space-y-2">
//               <li>• Real-time analytics</li>
//               <li>• Pattern recognition</li>
//               <li>• Predictive modeling</li>
//             </ul>
//           </div>

//           {/* Service 4 */}
//           <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
//             <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-orange-400/25">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
//                 />
//               </svg>
//             </div>
//             <h4 className="text-xl font-semibold text-white mb-4">
//               Process Automation
//             </h4>
//             <p className="text-gray-300 mb-4">
//               Streamline your workflows with intelligent automation that adapts
//               to your business needs.
//             </p>
//             <ul className="text-sm text-gray-400 space-y-2">
//               <li>• Workflow optimization</li>
//               <li>• Task automation</li>
//               <li>• Integration capabilities</li>
//             </ul>
//           </div>

//           {/* Service 5 */}
//           <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
//             <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-400/25">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <h4 className="text-xl font-semibold text-white mb-4">
//               Personal Assistant
//             </h4>
//             <p className="text-gray-300 mb-4">
//               Your intelligent personal assistant for scheduling, reminders, and
//               daily task management.
//             </p>
//             <ul className="text-sm text-gray-400 space-y-2">
//               <li>• Smart scheduling</li>
//               <li>• Priority management</li>
//               <li>• Calendar integration</li>
//             </ul>
//           </div>

//           {/* Service 6 */}
//           <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
//             <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-indigo-400/25">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <h4 className="text-xl font-semibold text-white mb-4">
//               Learning & Training
//             </h4>
//             <p className="text-gray-300 mb-4">
//               Interactive learning experiences with personalized tutoring and
//               skill development programs.
//             </p>
//             <ul className="text-sm text-gray-400 space-y-2">
//               <li>• Personalized learning paths</li>
//               <li>• Interactive tutorials</li>
//               <li>• Progress tracking</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Service Data ---
const services = [
  {
    id: 1,
    title: "Customer Support",
    description: "24/7 intelligent customer support that understands context and provides accurate solutions instantly.",
    features: ["Multi-language support", "Context-aware responses", "Seamless escalation to humans"],
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    gradient: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-400/25",
    bgGradient: "from-cyan-500/10 to-blue-500/5",
  },
  {
    id: 2,
    title: "Content Creation",
    description: "Generate high-quality content, from blog posts to marketing copy, tailored to your brand voice.",
    features: ["Blog posts & articles", "Social media content", "Marketing copy"],
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-400/25",
    bgGradient: "from-blue-500/10 to-purple-500/5",
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Transform complex data into actionable insights with our AI-powered analysis tools.",
    features: ["Real-time analytics", "Pattern recognition", "Predictive modeling"],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    gradient: "from-green-400 to-emerald-600",
    shadow: "shadow-green-400/25",
    bgGradient: "from-green-500/10 to-emerald-500/5",
  },
  {
    id: 4,
    title: "Process Automation",
    description: "Streamline your workflows with intelligent automation that adapts to your business needs.",
    features: ["Workflow optimization", "Task automation", "Integration capabilities"],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
    gradient: "from-orange-400 to-red-600",
    shadow: "shadow-orange-400/25",
    bgGradient: "from-orange-500/10 to-red-500/5",
  },
  {
    id: 5,
    title: "Personal Assistant",
    description: "Your intelligent personal assistant for scheduling, reminders, and daily task management.",
    features: ["Smart scheduling", "Priority management", "Calendar integration"],
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    gradient: "from-pink-400 to-rose-600",
    shadow: "shadow-pink-400/25",
    bgGradient: "from-pink-500/10 to-rose-500/5",
  },
  {
    id: 6,
    title: "Learning & Training",
    description: "Interactive learning experiences with personalized tutoring and skill development programs.",
    features: ["Personalized learning paths", "Interactive tutorials", "Progress tracking"],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    gradient: "from-indigo-400 to-purple-600",
    shadow: "shadow-indigo-400/25",
    bgGradient: "from-indigo-500/10 to-purple-500/5",
  },
];

// --- Service Card Component ---
const ServiceCard = React.memo(({ service, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const borderRef = useRef(null);
  const tlRef = useRef(gsap.timeline({ paused: true }));

  useLayoutEffect(() => {
    const tl = tlRef.current;
    
    gsap.set(borderRef.current, { opacity: 0.3, boxShadow: "none" });

    tl
      .to(iconRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: "back.out",
      }, 0)
      .to(borderRef.current, {
        opacity: 1,
        boxShadow: `0 0 30px rgba(34, 211, 238, 0.5)`, 
        duration: 0.3,
      }, 0)
      .to(cardRef.current, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      }, 0);
    
    tl.reverse();

    return () => {
      tl.kill();
    };
  }, []);

  const handleHover = (isHovering) => {
    isHovering ? tlRef.current.play() : tlRef.current.reverse();
  };

  return (
    <div
      ref={cardRef}
      className="gsap-service-card group relative overflow-hidden rounded-2xl flex-shrink-0 snap-center w-80 h-96 transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Glow Effect */}
      <div
        className={`absolute -inset-px bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500 -z-10`}
      />

      {/* Border with glow */}
      <div
        ref={borderRef}
        className={`absolute inset-0 rounded-2xl border border-white/20 pointer-events-none`}
        style={{ opacity: 0.3 }}
      />

      {/* Content */}
      <div className="relative p-8 backdrop-blur-sm h-full flex flex-col justify-between">
        {/* Icon Container */}
        <div className="mb-4 relative">
          <div
            ref={iconRef}
            className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-2xl ${service.shadow} relative z-10`}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={service.icon}
              />
            </svg>
          </div>
          <div
            className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
          />
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
          {service.title}
        </h4>

        {/* Description */}
        <p className="text-gray-300 text-xs leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-1 mb-4">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              <div
                className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className={`h-0.5 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`} />
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

// --- Main Services Component ---
export default function Services() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, subtitleRef.current], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      const cards = gsap.utils.toArray(".gsap-service-card");
      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 60,
          scale: 0.95,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="relative pt-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-6"
          >
            Our Services
          </h3>
          <p
            ref={subtitleRef}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive AI solutions tailored for your specific needs
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative overflow-hidden">
        {/* Hide scrollbar with custom CSS */}
        <style>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div
          ref={scrollContainerRef}
          className="hide-scrollbar flex gap-8 px-8 pb-8 overflow-x-auto scroll-smooth snap-x snap-mandatory will-change-transform"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Left Blur Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
        
        {/* Right Blur Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}