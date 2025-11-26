// import React from "react";
// import {
//   FaCheck,
//   FaTimes,
//   FaBolt,
//   FaUpload,
//   FaCog,
//   FaHeadset,
//   FaUsers,
//   FaEnvelope,
//   FaShieldAlt,
//   FaRobot,
// } from "react-icons/fa";

// const PLANS = [
//   {
//     id: "Free",
//     name: "Free",
//     badge: "Best for individuals",
//     badgeColor: "bg-yellow-500",
//     price: 0,
//     period: "month",
//     features: [
//       { text: "50 messages/day", included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: "Standard response speed", included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: "Basic support", included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: "No file uploads", included: false, icon: <FaTimes className="w-5 h-5" /> },
//       { text: "No priority access", included: false, icon: <FaTimes className="w-5 h-5" /> },
//     ],
//     highlighted: false,
//     buttonText: "Continue with Free",
//     buttonVariant: "secondary",
//   },
//   {
//     id: "pro",
//     name: "Pro",
//     badge: "Most popular",
//     badgeColor: "bg-yellow-500",
//     price: 499,
//     period: "month",
//     features: [
//       { text: "Unlimited messages", included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: "Faster responses", included: true, icon: <FaBolt className="w-5 h-5" /> },
//       { text: "File uploads (PDF, CSV, images)", included: true, icon: <FaUpload className="w-5 h-5" /> },
//       { text: "Advanced models access", included: true, icon: <FaCog className="w-5 h-5" /> },
//       { text: "Priority email support", included: true, icon: <FaHeadset className="w-5 h-5" /> },
//     ],
//     highlighted: true,
//     buttonText: "Choose Pro – ₹499",
//     buttonVariant: "primary",
//   },
//   {
//     id: "team",
//     name: "Team",
//     badge: "For small teams",
//     badgeColor: "bg-yellow-500",
//     price: 2499,
//     period: "month",
//     features: [
//       { text: "5 seats included", included: true, icon: <FaUsers className="w-5 h-5" /> },
//       { text: "Shared chat spaces", included: true, icon: <FaEnvelope className="w-5 h-5" /> },
//       { text: "Role-based permissions", included: true, icon: <FaShieldAlt className="w-5 h-5" /> },
//       { text: "Priority compute", included: true, icon: <FaBolt className="w-5 h-5" /> },
//       { text: "Dedicated support channel", included: true, icon: <FaRobot className="w-5 h-5" /> },
//     ],
//     highlighted: false,
//     buttonText: "Contact sales",
//     buttonVariant: "secondary",
//   },
// ];

// const PricingSection = () => {
//   const handleSelectPlan = (planId) => {
//     console.log("Selected plan:", planId);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       {/* Title */}
//       <div className="mb-12">
//         <h1 className="text-4xl font-bold text-white mb-3">Upgrade your plan</h1>
//         <p className="text-gray-400 text-lg">
//           Choose the plan that fits your usage. Prices shown in INR (₹), billed monthly.
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div
//         id="pricing"
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
//       >
//         {PLANS.map((plan) => (
//           <div
//             key={plan.id}
//             className={`relative bg-gray-900 bg-opacity-40 rounded-2xl p-6 transition-all duration-300 ${
//               plan.highlighted
//                 ? "border-2 border-cyan-400 shadow-lg shadow-cyan-400/20"
//                 : "border border-border border-opacity-20"
//             }`}
//           >
//             {/* Header */}
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
//                 <span
//                   className={`${plan.badgeColor} text-black text-xs font-semibold px-3 py-1 rounded-full`}
//                 >
//                   {plan.badge}
//                 </span>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-baseline">
//                   <span className="text-4xl font-bold text-white">
//                     ₹{plan.price.toLocaleString("en-IN")}
//                   </span>
//                   <span className="text-gray-400 ml-2">/ {plan.period}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="space-y-3 mb-6">
//               {plan.features.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div
//                     className={`flex-shrink-0 mt-0.5 ${
//                       feature.included ? "text-cyan-400" : "text-gray-600"
//                     }`}
//                   >
//                     {feature.icon}
//                   </div>
//                   <span
//                     className={`text-sm ${
//                       feature.included ? "text-gray-200" : "text-gray-500"
//                     }`}
//                   >
//                     {feature.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <button
//               onClick={() => handleSelectPlan(plan.id)}
//               className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
//                 plan.buttonVariant === "primary"
//                   ? "bg-cyan-400 text-black hover:bg-cyan-300"
//                   : "bg-gray-700 bg-opacity-60 text-white hover:bg-opacity-80 border border-border border-opacity-20"
//               }`}
//             >
//               {plan.buttonText}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Footer Note */}
//       <p className="text-gray-400 text-sm text-center my-8">
//         All paid plans include data encryption at rest and in transit.
//         Cancel anytime. Taxes may apply.
//       </p>

//       {/* Upgrade Box */}
//       <div className="bg-gray-900 bg-opacity-40 border border-border border-opacity-20 rounded-xl p-8 flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-2">Ready to upgrade?</h2>
//           <p className="text-gray-400">Unlock faster responses and advanced capabilities.</p>
//         </div>
//         <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
//           Upgrade Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

import React, { useLayoutEffect, useRef } from "react";
import {
  FaCheck,
  FaTimes,
  FaBolt,
  FaUpload,
  FaCog,
  FaHeadset,
  FaUsers,
  FaEnvelope,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";

const PLANS = [
  {
    id: "Free",
    name: "Free",
    badge: "Best for individuals",
    badgeColor: "bg-blue-500/80",
    price: 0,
    period: "month",
    features: [
      { text: "50 messages/day", included: true, icon: <FaCheck className="w-5 h-5" /> },
      { text: "Standard response speed", included: true, icon: <FaCheck className="w-5 h-5" /> },
      { text: "Basic support", included: true, icon: <FaCheck className="w-5 h-5" /> },
      { text: "No file uploads", included: false, icon: <FaTimes className="w-5 h-5" /> },
      { text: "No priority access", included: false, icon: <FaTimes className="w-5 h-5" /> },
    ],
    highlighted: false,
    buttonText: "Continue with Free",
    buttonVariant: "secondary",
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Most popular",
    badgeColor: "bg-cyan-500",
    price: 499,
    period: "month",
    features: [
      { text: "Unlimited messages", included: true, icon: <FaCheck className="w-5 h-5" /> },
      { text: "Faster responses", included: true, icon: <FaBolt className="w-5 h-5" /> },
      { text: "File uploads (PDF, CSV, images)", included: true, icon: <FaUpload className="w-5 h-5" /> },
      { text: "Advanced models access", included: true, icon: <FaCog className="w-5 h-5" /> },
      { text: "Priority email support", included: true, icon: <FaHeadset className="w-5 h-5" /> },
    ],
    highlighted: true,
    buttonText: "Choose Pro – ₹499",
    buttonVariant: "primary",
  },
  {
    id: "team",
    name: "Team",
    badge: "For small teams",
    badgeColor: "bg-blue-500/80",
    price: 2499,
    period: "month",
    features: [
      { text: "5 seats included", included: true, icon: <FaUsers className="w-5 h-5" /> },
      { text: "Shared chat spaces", included: true, icon: <FaEnvelope className="w-5 h-5" /> },
      { text: "Role-based permissions", included: true, icon: <FaShieldAlt className="w-5 h-5" /> },
      { text: "Priority compute", included: true, icon: <FaBolt className="w-5 h-5" /> },
      { text: "Dedicated support channel", included: true, icon: <FaRobot className="w-5 h-5" /> },
    ],
    highlighted: false,
    buttonText: "Contact sales",
    buttonVariant: "secondary",
  },
];

const PricingCard = ({ plan, index }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    cardRef.current.style.opacity = "0";
    cardRef.current.style.transform = "translateY(50px) scale(0.95)";
    cardRef.current.style.animation = `cardEnter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s forwards`;
    
    // Animate features
    if (contentRef.current) {
      const features = contentRef.current.querySelectorAll('.feature-item');
      features.forEach((feature, idx) => {
        feature.style.opacity = "0";
        feature.style.transform = "translateX(-20px)";
        feature.style.animation = `featureSlide 0.6s ease-out ${0.8 + index * 0.15 + idx * 0.08}s forwards`;
      });
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
        plan.highlighted ? "md:scale-105" : ""
      }`}
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl" />
      
      {/* Glowing border for highlighted */}
      {plan.highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 rounded-2xl p-[1px] ${
          plan.highlighted
            ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
            : "bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/30"
        }`}
      >
        <div className="absolute inset-[1px] bg-black rounded-2xl" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative p-8 z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              {plan.name}
            </h3>
            <span
              className={`${plan.badgeColor} text-black text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm`}
            >
              {plan.badge}
            </span>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">
                {plan.price === 0 ? "Free" : `₹${plan.price.toLocaleString("en-IN")}`}
              </span>
              <span className="text-gray-400 text-lg">/{plan.period}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-item flex items-start gap-3 group/feature"
            >
              <div
                className={`flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-md transition-all duration-300 ${
                  feature.included
                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white"
                    : "bg-gray-700/50 text-gray-600"
                }`}
              >
                {feature.icon}
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  feature.included ? "text-gray-200 group-hover/feature:text-cyan-300" : "text-gray-500"
                }`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform cursor-pointer ${
            plan.buttonVariant === "primary"
              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/80"
              : "bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-cyan-400/30 hover:border-cyan-400/60"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const upgradeBoxRef = useRef(null);

  useLayoutEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
      titleRef.current.style.animation = "slideUp 0.8s ease-out forwards";
    }

    if (descRef.current) {
      descRef.current.style.opacity = "0";
      descRef.current.style.transform = "translateY(20px)";
      descRef.current.style.animation = "slideUp 0.8s ease-out 0.2s forwards";
    }

    if (upgradeBoxRef.current) {
      upgradeBoxRef.current.style.opacity = "0";
      upgradeBoxRef.current.style.transform = "translateY(40px)";
      upgradeBoxRef.current.style.animation = "slideUp 0.8s ease-out 0.6s forwards";
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

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

        @keyframes featureSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <section id="pricing" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-black">
        {/* Bubble Background Component */}
        <div className="absolute inset-0 overflow-hidden">
          <style>{`
            @keyframes bubblePulse {
              0% { transform: scale(1) translate(-20%, -20%); opacity: 0.4; }
              50% { opacity: 0.7; }
              100% { transform: scale(1.2) translate(0%, 0%); opacity: 0.5; }
            }
          `}</style>

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(rgba(12, 175, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Primary Glow - Top Left */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(12, 175, 255, 0.15) 0%, rgba(12, 175, 255, 0.05) 40%, transparent 70%)",
              filter: "blur(60px)",
              animation: "bubblePulse 8s ease-in-out infinite",
            }}
          />

          {/* Secondary Glow - Bottom Right */}
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(12, 175, 255, 0.1) 0%, rgba(9, 143, 204, 0.05) 40%, transparent 70%)",
              filter: "blur(80px)",
              animation: "bubblePulse 10s ease-in-out infinite 1s",
            }}
          />

          {/* Accent Glow - Top Right */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(12, 175, 255, 0.08) 0%, transparent 60%)",
              filter: "blur(50px)",
              animation: "bubblePulse 7s ease-in-out infinite 2s",
              transform: "translate(30%, -30%)",
            }}
          />

          {/* Accent Glow - Bottom Left */}
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(9, 143, 204, 0.1) 0%, transparent 60%)",
              filter: "blur(70px)",
              animation: "bubblePulse 9s ease-in-out infinite 1.5s",
              transform: "translate(-20%, 20%)",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Title Section */}
          <div className="mb-24 text-center">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent md:mb-10"
            >
              Upgrade Your Plan
            </h1>
            {/* <p
              ref={descRef}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Choose the perfect plan for your needs. Scale up or down whenever you want.
              All plans include data encryption and priority support.
            </p> */}
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PLANS.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-gray-500 text-center text-sm mb-12">
            All prices shown in INR (₹), billed monthly. Taxes may apply. Cancel anytime.
          </p>

          {/* Upgrade CTA Box */}
          <div
            ref={upgradeBoxRef}
            className="relative group rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/30 rounded-2xl" />

            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-8 py-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Ready to unlock full potential?
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Upgrade to Pro today and experience faster responses, unlimited messages, and priority support.
                  </p>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;