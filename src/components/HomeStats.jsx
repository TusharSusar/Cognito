import React, { useState, useEffect } from 'react';
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

  const StatCard = ({ icon: Icon, value, label, color, suffix = '' }) => (
    <div 
      className="p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        backgroundColor: 'rgba(69, 69, 69, 0.5)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="flex items-center justify-center mb-3">
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div className="text-3xl font-bold text-center" style={{ color: '#f1f1f1' }}>
        {value}{suffix}
      </div>
      <div className="text-sm text-center mt-2" style={{ color: 'rgba(241, 241, 241, 0.7)' }}>
        {label}
      </div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-bacground">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-4" style={{ color: '#f1f1f1' }}>
          Trusted by Million Developers
        </h3>
        <p className="text-center mb-12" style={{ color: 'rgba(241, 241, 241, 0.7)' }}>
          Real-time analytics and performance metrics
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {[
            { id: 'overview', label: 'Overview', icon: FaChartLine },
            { id: 'growth', label: 'Growth', icon: FaUsers },
            { id: 'distribution', label: 'Distribution', icon: FaBuilding }
          ].map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                style={{
                  backgroundColor: activeTab === tab.id ? '#0CAFFF' : 'rgba(69, 69, 69, 0.5)',
                  color: activeTab === tab.id ? '#000' : '#f1f1f1',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: activeTab === tab.id ? '#0CAFFF' : 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <TabIcon />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard 
                icon={FaUsers} 
                value={`${animatedValues.users}M`} 
                label="Active Users" 
                color="#0CAFFF"
              />
              <StatCard 
                icon={FaComments} 
                value={`${animatedValues.conversations}M`} 
                label="Conversations" 
                color="#098FCC"
              />
              <StatCard 
                icon={FaClock} 
                value={animatedValues.uptime} 
                label="Uptime" 
                color="#0CAFFF"
                suffix="%"
              />
              <StatCard 
                icon={FaGlobe} 
                value="24/7" 
                label="Available" 
                color="#098FCC"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard 
                icon={FaStar} 
                value={`${animatedValues.rating}/5`} 
                label="Average Rating" 
                color="#0CAFFF"
              />
              <StatCard 
                icon={FaComments} 
                value={`${animatedValues.reviews}k`} 
                label="Reviews" 
                color="#098FCC"
              />
              <StatCard 
                icon={FaThumbsUp} 
                value={animatedValues.satisfaction} 
                label="Satisfaction Rate" 
                color="#0CAFFF"
                suffix="%"
              />
              <StatCard 
                icon={FaBuilding} 
                value={`${animatedValues.enterprise}+`} 
                label="Enterprise Clients" 
                color="#098FCC"
              />
            </div>
          </div>
        )}

        {/* Growth Tab */}
        {activeTab === 'growth' && (
          <div 
            className="p-8 rounded-xl"
            style={{
              backgroundColor: 'rgba(69, 69, 69, 0.5)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <h4 className="text-xl font-bold mb-6 text-center" style={{ color: '#f1f1f1' }}>
              User & Conversation Growth
            </h4>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={growthData}>
                <XAxis 
                  dataKey="month" 
                  stroke="rgba(241, 241, 241, 0.5)"
                  style={{ fontSize: '14px', fill: '#f1f1f1' }}
                />
                <YAxis 
                  stroke="rgba(241, 241, 241, 0.5)"
                  style={{ fontSize: '14px', fill: '#f1f1f1' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#353535',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#f1f1f1'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#0CAFFF" 
                  strokeWidth={3}
                  name="Users (M)"
                  dot={{ fill: '#0CAFFF', r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="conversations" 
                  stroke="#098FCC" 
                  strokeWidth={3}
                  name="Conversations (M)"
                  dot={{ fill: '#098FCC', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Distribution Tab */}
        {activeTab === 'distribution' && (
          <div 
            className="p-8 rounded-xl"
            style={{
              backgroundColor: 'rgba(69, 69, 69, 0.5)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <h4 className="text-xl font-bold mb-6 text-center" style={{ color: '#f1f1f1' }}>
              User Distribution by Category
            </h4>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={distributionData}>
                <XAxis 
                  dataKey="category" 
                  stroke="rgba(241, 241, 241, 0.5)"
                  style={{ fontSize: '14px', fill: '#f1f1f1' }}
                />
                <YAxis 
                  stroke="rgba(241, 241, 241, 0.5)"
                  style={{ fontSize: '14px', fill: '#f1f1f1' }}
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#f1f1f1' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#353535',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#f1f1f1'
                  }}
                  formatter={(value) => [`${value}%`, 'Percentage']}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
}