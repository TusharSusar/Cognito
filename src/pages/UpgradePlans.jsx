// import React, { useState } from 'react';
// import { FaCheck, FaTimes, FaBolt, FaUpload, FaCog, FaHeadset, FaUsers, FaEnvelope, FaShieldAlt, FaRobot } from 'react-icons/fa';

// // Plan configuration - easily updatable
// const PLANS = [
//   {
//     id: 'Free',
//     name: 'Free',
//     badge: 'Best for individuals',
//     badgeColor: 'bg-yellow-500',
//     price: 0,
//     period: 'month',
//     features: [
//       { text: '50 messages/day', included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: 'Standard response speed', included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: 'Basic support', included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: 'No file uploads', included: false, icon: <FaTimes className="w-5 h-5" /> },
//       { text: 'No priority access', included: false, icon: <FaTimes className="w-5 h-5" /> }
//     ],
//     highlighted: false,
//     buttonText: 'Continue with Free',
//     buttonVariant: 'secondary'
//   },
//   {
//     id: 'pro',
//     name: 'Pro',
//     badge: 'Most popular',
//     badgeColor: 'bg-yellow-500',
//     price: 499,
//     period: 'month',
//     features: [
//       { text: 'Unlimited messages', included: true, icon: <FaCheck className="w-5 h-5" /> },
//       { text: 'Faster responses', included: true, icon: <FaBolt className="w-5 h-5" /> },
//       { text: 'File uploads (PDF, CSV, images)', included: true, icon: <FaUpload className="w-5 h-5" /> },
//       { text: 'Advanced models access', included: true, icon: <FaCog className="w-5 h-5" /> },
//       { text: 'Priority email support', included: true, icon: <FaHeadset className="w-5 h-5" /> }
//     ],
//     highlighted: true,
//     buttonText: 'Choose Pro – ₹499',
//     buttonVariant: 'primary'
//   },
//   {
//     id: 'team',
//     name: 'Team',
//     badge: 'For small teams',
//     badgeColor: 'bg-yellow-500',
//     price: 2499,
//     period: 'month',
//     features: [
//       { text: '5 seats included', included: true, icon: <FaUsers className="w-5 h-5" /> },
//       { text: 'Shared chat spaces', included: true, icon: <FaEnvelope className="w-5 h-5" /> },
//       { text: 'Role-based permissions', included: true, icon: <FaShieldAlt className="w-5 h-5" /> },
//       { text: 'Priority compute', included: true, icon: <FaBolt className="w-5 h-5" /> },
//       { text: 'Dedicated support channel', included: true, icon: <FaRobot className="w-5 h-5" /> }
//     ],
//     highlighted: false,
//     buttonText: 'Contact sales',
//     buttonVariant: 'secondary'
//   }
// ];

// const UpgradePlan = () => {
//   const [selectedPlan, setSelectedPlan] = useState('Free');

//   // Handle plan selection
//   const handleSelectPlan = (planId) => {
//     setSelectedPlan(planId);
//     console.log(`Selected plan: ${planId}`);
//   };

//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       {/* Header */}
//       <header className="border-b border-border border-opacity-20 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <FaRobot className="w-6 h-6 text-cyan-400" />
//             <span className="text-xl font-semibold text-gray-100">Cognito</span>
//           </div>
//           <button className="text-gray-300 px-4 py-1 rounded-lg border border-border hover:text-white transition-colors">
//             Back to app
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-6 py-12">
//         {/* Title Section */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-bold text-white mb-3">
//             Upgrade your plan
//           </h1>
//           <p className="text-gray-400 text-lg">
//             Choose the plan that fits your usage. Prices shown in INR (₹), billed monthly.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {PLANS.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative bg-gray-900 bg-opacity-40 rounded-2xl p-6 transition-all duration-300 ${
//                 plan.highlighted
//                   ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/20'
//                   : 'border border-border border-opacity-20'
//               }`}
//             >
//               {/* Plan Header */}
//               <div className="mb-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-2xl font-bold text-white">
//                     {plan.name}
//                   </h3>
//                   <span className={`${plan.badgeColor} text-black text-xs font-semibold px-3 py-1 rounded-full`}>
//                     {plan.badge}
//                   </span>
//                 </div>
                
//                 {/* Price */}
//                 <div className="mb-6">
//                   <div className="flex items-baseline">
//                     <span className="text-4xl font-bold text-white">
//                       ₹{plan.price.toLocaleString('en-IN')}
//                     </span>
//                     <span className="text-gray-400 ml-2">
//                       / {plan.period}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Features List */}
//               <div className="space-y-3 mb-6">
//                 {plan.features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <div className={`flex-shrink-0 mt-0.5 ${
//                       feature.included ? 'text-cyan-400' : 'text-gray-600'
//                     }`}>
//                       {feature.icon}
//                     </div>
//                     <span className={`text-sm ${
//                       feature.included ? 'text-gray-200' : 'text-gray-500'
//                     }`}>
//                       {feature.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <button
//                 onClick={() => handleSelectPlan(plan.id)}
//                 className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
//                   plan.buttonVariant === 'primary'
//                     ? 'bg-cyan-400 text-black hover:bg-cyan-300'
//                     : 'bg-gray-700 bg-opacity-60 text-white hover:bg-opacity-80 border border-border border-opacity-20'
//                 }`}
//               >
//                 {plan.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div className="bg-gray-900 bg-opacity-40 border border-border border-opacity-20 rounded-xl p-6 mb-8">
//           <p className="text-gray-400 text-sm text-center">
//             All paid plans include data encryption at rest and in transit. Cancel anytime. Taxes may apply.
//           </p>
//         </div>

//         {/* Ready to Upgrade Section */}
//         <div className="bg-gray-900 bg-opacity-40 border border-border border-opacity-20 rounded-xl p-8 flex items-center justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-white mb-2">
//               Ready to upgrade?
//             </h2>
//             <p className="text-gray-400">
//               Unlock faster responses and advanced capabilities.
//             </p>
//           </div>
//           <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
//             Upgrade Now
//           </button>
//         </div>

//         {/* Footer Links */}
//         <footer className="mt-12 pt-8 border-t border-border border-opacity-20">
//           <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
//             <a href="#" className="hover:text-cyan-400 transition-colors">
//               Contact: support@cognito.ai
//             </a>
//             <a href="#" className="hover:text-cyan-400 transition-colors">
//               Terms & Conditions
//             </a>
//             <a href="#" className="hover:text-cyan-400 transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-cyan-400 transition-colors">
//               Help Center
//             </a>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default UpgradePlan;
import React, { useState } from 'react';
import { FaCheck, FaTimes, FaBolt, FaUpload, FaCog, FaHeadset, FaUsers, FaEnvelope, FaShieldAlt, FaRobot } from 'react-icons/fa';
import PricingSection from '../components/PricingSection';
import { useNavigate } from 'react-router-dom';

const UpgradePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('Free');

  // Handle plan selection
  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    console.log(`Selected plan: ${planId}`);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="border-b border-border border-opacity-20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaRobot className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-semibold text-gray-100">Cognito</span>
          </div>
          <button onClick={()=> navigate("/chat")} className="text-gray-300 px-4 py-1 rounded-lg border border-border hover:text-white transition-colors">
            Back to app
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <PricingSection/> 
        {/* Footer Links */}
        <footer className="mt-12 pt-8 border-t border-border border-opacity-20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Contact: support@cognito.ai
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Help Center
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default UpgradePlan;