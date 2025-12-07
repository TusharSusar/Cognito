// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
// import { FaUsers, FaComments, FaClock, FaGlobe, FaStar, FaThumbsUp, FaBuilding, FaChartLine } from 'react-icons/fa';

// export default function InteractiveStats() {
//   const [activeTab, setActiveTab] = useState('growth');
//   const [animatedValues, setAnimatedValues] = useState({
//     users: 0,
//     conversations: 0,
//     uptime: 0,
//     rating: 0,
//     reviews: 0,
//     satisfaction: 0,
//     enterprise: 0
//   });

//   // Growth data for line chart
//   const growthData = [
//     { month: 'Jan', users: 0.5, conversations: 20 },
//     { month: 'Feb', users: 0.8, conversations: 35 },
//     { month: 'Mar', users: 1.2, conversations: 50 },
//     { month: 'Apr', users: 1.5, conversations: 65 },
//     { month: 'May', users: 1.8, conversations: 82 },
//     { month: 'Jun', users: 2.0, conversations: 100 }
//   ];

//   // Distribution data for bar chart
//   const distributionData = [
//     { category: 'Developers', value: 45 },
//     { category: 'Students', value: 25 },
//     { category: 'Enterprise', value: 20 },
//     { category: 'Researchers', value: 10 }
//   ];

//   const colors = ['#0CAFFF', '#098FCC', '#06A0E8', '#0580B8'];

//   // Animate numbers on mount
//   useEffect(() => {
//     const duration = 2000;
//     const steps = 60;
//     const interval = duration / steps;

//     let currentStep = 0;
//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;
      
//       setAnimatedValues({
//         users: Math.floor(2 * progress * 100) / 100,
//         conversations: Math.floor(100 * progress),
//         uptime: Math.floor(99.9 * progress * 10) / 10,
//         rating: Math.floor(4.9 * progress * 10) / 10,
//         reviews: Math.floor(15 * progress),
//         satisfaction: Math.floor(98 * progress),
//         enterprise: Math.floor(500 * progress)
//       });

//       if (currentStep >= steps) {
//         clearInterval(timer);
//         setAnimatedValues({
//           users: 2,
//           conversations: 100,
//           uptime: 99.9,
//           rating: 4.9,
//           reviews: 15,
//           satisfaction: 98,
//           enterprise: 500
//         });
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const StatCard = ({ icon: Icon, value, label, color, suffix = '' }) => (
//     <div 
//       className="p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
//       style={{
//         backgroundColor: 'rgba(69, 69, 69, 0.5)',
//         borderWidth: '1px',
//         borderStyle: 'solid',
//         borderColor: 'rgba(255, 255, 255, 0.2)',
//       }}
//     >
//       <div className="flex items-center justify-center mb-3">
//         <Icon className="text-3xl" style={{ color }} />
//       </div>
//       <div className="text-3xl font-bold text-center" style={{ color: '#f1f1f1' }}>
//         {value}{suffix}
//       </div>
//       <div className="text-sm text-center mt-2" style={{ color: 'rgba(241, 241, 241, 0.7)' }}>
//         {label}
//       </div>
//     </div>
//   );

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-20 bg-bacground">
//       <div className="max-w-6xl mx-auto">
//         <h3 className="text-3xl font-bold text-center mb-4" style={{ color: '#f1f1f1' }}>
//           Trusted by Million Developers
//         </h3>
//         <p className="text-center mb-12" style={{ color: 'rgba(241, 241, 241, 0.7)' }}>
//           Real-time analytics and performance metrics
//         </p>

//         {/* Tab Navigation */}
//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           {[
//             { id: 'overview', label: 'Overview', icon: FaChartLine },
//             { id: 'growth', label: 'Growth', icon: FaUsers },
//             { id: 'distribution', label: 'Distribution', icon: FaBuilding }
//           ].map(tab => {
//             const TabIcon = tab.icon;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
//                 style={{
//                   backgroundColor: activeTab === tab.id ? '#0CAFFF' : 'rgba(69, 69, 69, 0.5)',
//                   color: activeTab === tab.id ? '#000' : '#f1f1f1',
//                   borderWidth: '1px',
//                   borderStyle: 'solid',
//                   borderColor: activeTab === tab.id ? '#0CAFFF' : 'rgba(255, 255, 255, 0.2)',
//                 }}
//               >
//                 <TabIcon />
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Overview Tab */}
//         {activeTab === 'overview' && (
//           <div className="space-y-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <StatCard 
//                 icon={FaUsers} 
//                 value={`${animatedValues.users}M`} 
//                 label="Active Users" 
//                 color="#0CAFFF"
//               />
//               <StatCard 
//                 icon={FaComments} 
//                 value={`${animatedValues.conversations}M`} 
//                 label="Conversations" 
//                 color="#098FCC"
//               />
//               <StatCard 
//                 icon={FaClock} 
//                 value={animatedValues.uptime} 
//                 label="Uptime" 
//                 color="#0CAFFF"
//                 suffix="%"
//               />
//               <StatCard 
//                 icon={FaGlobe} 
//                 value="24/7" 
//                 label="Available" 
//                 color="#098FCC"
//               />
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <StatCard 
//                 icon={FaStar} 
//                 value={`${animatedValues.rating}/5`} 
//                 label="Average Rating" 
//                 color="#0CAFFF"
//               />
//               <StatCard 
//                 icon={FaComments} 
//                 value={`${animatedValues.reviews}k`} 
//                 label="Reviews" 
//                 color="#098FCC"
//               />
//               <StatCard 
//                 icon={FaThumbsUp} 
//                 value={animatedValues.satisfaction} 
//                 label="Satisfaction Rate" 
//                 color="#0CAFFF"
//                 suffix="%"
//               />
//               <StatCard 
//                 icon={FaBuilding} 
//                 value={`${animatedValues.enterprise}+`} 
//                 label="Enterprise Clients" 
//                 color="#098FCC"
//               />
//             </div>
//           </div>
//         )}

//         {/* Growth Tab */}
//         {activeTab === 'growth' && (
//           <div 
//             className="p-8 rounded-xl"
//             style={{
//               backgroundColor: 'rgba(69, 69, 69, 0.5)',
//               borderWidth: '1px',
//               borderStyle: 'solid',
//               borderColor: 'rgba(255, 255, 255, 0.2)',
//             }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-center" style={{ color: '#f1f1f1' }}>
//               User & Conversation Growth
//             </h4>
//             <ResponsiveContainer width="100%" height={400}>
//               <LineChart data={growthData}>
//                 <XAxis 
//                   dataKey="month" 
//                   stroke="rgba(241, 241, 241, 0.5)"
//                   style={{ fontSize: '14px', fill: '#f1f1f1' }}
//                 />
//                 <YAxis 
//                   stroke="rgba(241, 241, 241, 0.5)"
//                   style={{ fontSize: '14px', fill: '#f1f1f1' }}
//                 />
//                 <Tooltip 
//                   contentStyle={{
//                     backgroundColor: '#353535',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     borderRadius: '8px',
//                     color: '#f1f1f1'
//                   }}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="users" 
//                   stroke="#0CAFFF" 
//                   strokeWidth={3}
//                   name="Users (M)"
//                   dot={{ fill: '#0CAFFF', r: 5 }}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="conversations" 
//                   stroke="#098FCC" 
//                   strokeWidth={3}
//                   name="Conversations (M)"
//                   dot={{ fill: '#098FCC', r: 5 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Distribution Tab */}
//         {activeTab === 'distribution' && (
//           <div 
//             className="p-8 rounded-xl"
//             style={{
//               backgroundColor: 'rgba(69, 69, 69, 0.5)',
//               borderWidth: '1px',
//               borderStyle: 'solid',
//               borderColor: 'rgba(255, 255, 255, 0.2)',
//             }}
//           >
//             <h4 className="text-xl font-bold mb-6 text-center" style={{ color: '#f1f1f1' }}>
//               User Distribution by Category
//             </h4>
//             <ResponsiveContainer width="100%" height={400}>
//               <BarChart data={distributionData}>
//                 <XAxis 
//                   dataKey="category" 
//                   stroke="rgba(241, 241, 241, 0.5)"
//                   style={{ fontSize: '14px', fill: '#f1f1f1' }}
//                 />
//                 <YAxis 
//                   stroke="rgba(241, 241, 241, 0.5)"
//                   style={{ fontSize: '14px', fill: '#f1f1f1' }}
//                   label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#f1f1f1' }}
//                 />
//                 <Tooltip 
//                   contentStyle={{
//                     backgroundColor: '#353535',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     borderRadius: '8px',
//                     color: '#f1f1f1'
//                   }}
//                   formatter={(value) => [`${value}%`, 'Percentage']}
//                 />
//                 <Bar dataKey="value" radius={[8, 8, 0, 0]}>
//                   {distributionData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FaUsers, FaComments, FaClock, FaGlobe, FaStar, FaThumbsUp, FaBuilding, FaChartLine } from 'react-icons/fa';

export default function InteractiveStats() {
  const [activeTab, setActiveTab] = useState('growth');
  const [animatedValues, setAnimatedValues] = useState({
    users: 0,
    conversations: 0,
    uptime: 0,
    rating: 0,
    reviews: 0,
    satisfaction: 0,
    enterprise: 0
  });

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);

  // Growth data for line chart
  const growthData = [
    { month: 'Jan', users: 0.5, conversations: 20 },
    { month: 'Feb', users: 0.8, conversations: 35 },
    { month: 'Mar', users: 1.2, conversations: 50 },
    { month: 'Apr', users: 1.5, conversations: 65 },
    { month: 'May', users: 1.8, conversations: 82 },
    { month: 'Jun', users: 2.0, conversations: 100 }
  ];

  // Distribution data for bar chart
  const distributionData = [
    { category: 'Developers', value: 45 },
    { category: 'Students', value: 25 },
    { category: 'Enterprise', value: 20 },
    { category: 'Researchers', value: 10 }
  ];

  const colors = ['#0CAFFF', '#098FCC', '#06A0E8', '#0580B8'];

  // Animate numbers on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        users: Math.floor(2 * progress * 100) / 100,
        conversations: Math.floor(100 * progress),
        uptime: Math.floor(99.9 * progress * 10) / 10,
        rating: Math.floor(4.9 * progress * 10) / 10,
        reviews: Math.floor(15 * progress),
        satisfaction: Math.floor(98 * progress),
        enterprise: Math.floor(500 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues({
          users: 2,
          conversations: 100,
          uptime: 99.9,
          rating: 4.9,
          reviews: 15,
          satisfaction: 98,
          enterprise: 500
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // GSAP-style animations
  useLayoutEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
      titleRef.current.style.animation = "fadeInUp 0.8s ease-out forwards";
    }

    if (tabsRef.current) {
      tabsRef.current.style.opacity = "0";
      tabsRef.current.style.animation = "fadeIn 0.8s ease-out 0.2s forwards";
    }

    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      contentRef.current.style.animation = "fadeIn 0.8s ease-out 0.4s forwards";
    }
  }, []);

  const StatCard = ({ icon: Icon, value, label, color, suffix = '', index }) => {
    const cardRef = useRef(null);

    useLayoutEffect(() => {
      if (cardRef.current) {
        cardRef.current.style.opacity = "0";
        cardRef.current.style.transform = "translateY(30px) scale(0.95)";
        cardRef.current.style.animation = `cardEnter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + index * 0.08}s forwards`;
      }
    }, [index]);

    return (
      <div 
        ref={cardRef}
        className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      >
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/30" />
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl" />

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative p-6 md:p-8 z-10">
          <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Icon className="text-2xl md:text-3xl" style={{ color }} />
            </div>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            {value}{suffix}
          </div>
          <div className="text-sm md:text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {label}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
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

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bubblePulse {
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

        @keyframes tabSlideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <section ref={sectionRef} className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-black">
        {/* Bubble Background */}
        <div className="absolute inset-0 overflow-hidden">
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
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent mb-6">
              Trusted by Millions
            </h2>
            {/* <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time analytics showcasing our platform's impact and performance
            </p> */}
          </div>

          {/* Tab Navigation */}
          <div ref={tabsRef} className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              // { id: 'overview', label: 'Overview', icon: FaChartLine },
              { id: 'growth', label: 'Growth', icon: FaUsers },
              { id: 'distribution', label: 'Distribution', icon: FaBuilding }
            ].map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    animation: `tabSlideIn 0.6s ease-out ${idx * 0.1}s backwards`,
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-400/50'
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-cyan-400/30 hover:border-cyan-400/60'
                  }`}
                >
                  <TabIcon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div ref={contentRef}>
            {/* Overview Tab */}
            {/* {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <StatCard 
                    icon={FaUsers} 
                    value={`${animatedValues.users}M`} 
                    label="Active Users" 
                    color="#0CAFFF"
                    index={0}
                  />
                  <StatCard 
                    icon={FaComments} 
                    value={`${animatedValues.conversations}M`} 
                    label="Conversations" 
                    color="#098FCC"
                    index={1}
                  />
                  <StatCard 
                    icon={FaClock} 
                    value={animatedValues.uptime} 
                    label="Uptime" 
                    color="#0CAFFF"
                    suffix="%"
                    index={2}
                  />
                  <StatCard 
                    icon={FaGlobe} 
                    value="24/7" 
                    label="Available" 
                    color="#098FCC"
                    index={3}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <StatCard 
                    icon={FaStar} 
                    value={`${animatedValues.rating}/5`} 
                    label="Avg Rating" 
                    color="#0CAFFF"
                    index={4}
                  />
                  <StatCard 
                    icon={FaComments} 
                    value={`${animatedValues.reviews}k`} 
                    label="Reviews" 
                    color="#098FCC"
                    index={5}
                  />
                  <StatCard 
                    icon={FaThumbsUp} 
                    value={animatedValues.satisfaction} 
                    label="Satisfaction" 
                    color="#0CAFFF"
                    suffix="%"
                    index={6}
                  />
                  <StatCard 
                    icon={FaBuilding} 
                    value={`${animatedValues.enterprise}+`} 
                    label="Enterprise" 
                    color="#098FCC"
                    index={7}
                  />
                </div>
              </div>
            )} */}

            {/* Growth Tab */}
            {activeTab === 'growth' && (
              <div 
                className="p-8 rounded-2xl backdrop-blur-xl border border-cyan-400/20"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(12, 175, 255, 0.05) 0%, transparent 70%)",
                }}
              >
                <h4 className="text-2xl font-bold mb-8 text-center text-white">
                  User & Conversation Growth
                </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={growthData}>
                    <XAxis 
                      dataKey="month" 
                      stroke="rgba(241, 241, 241, 0.3)"
                      style={{ fontSize: '14px', fill: '#f1f1f1' }}
                    />
                    <YAxis 
                      stroke="rgba(241, 241, 241, 0.3)"
                      style={{ fontSize: '14px', fill: '#f1f1f1' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(53, 53, 53, 0.9)',
                        border: '1px solid rgba(12, 175, 255, 0.3)',
                        borderRadius: '12px',
                        color: '#f1f1f1',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#0CAFFF" 
                      strokeWidth={3}
                      name="Users (M)"
                      dot={{ fill: '#0CAFFF', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="conversations" 
                      stroke="#098FCC" 
                      strokeWidth={3}
                      name="Conversations (M)"
                      dot={{ fill: '#098FCC', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Distribution Tab */}
            {activeTab === 'distribution' && (
              <div 
                className="p-8 rounded-2xl backdrop-blur-xl border border-cyan-400/20"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(12, 175, 255, 0.05) 0%, transparent 70%)",
                }}
              >
                <h4 className="text-2xl font-bold mb-8 text-center text-white">
                  User Distribution by Category
                </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={distributionData}>
                    <XAxis 
                      dataKey="category" 
                      stroke="rgba(241, 241, 241, 0.3)"
                      style={{ fontSize: '14px', fill: '#f1f1f1' }}
                    />
                    <YAxis 
                      stroke="rgba(241, 241, 241, 0.3)"
                      style={{ fontSize: '14px', fill: '#f1f1f1' }}
                      label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#f1f1f1', offset: 10 }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(53, 53, 53, 0.9)',
                        border: '1px solid rgba(12, 175, 255, 0.3)',
                        borderRadius: '12px',
                        color: '#f1f1f1',
                        backdropFilter: 'blur(10px)'
                      }}
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                    <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}