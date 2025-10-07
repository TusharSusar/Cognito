import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">Our Services</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored for your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Customer Support
            </h4>
            <p className="text-gray-300 mb-4">
              24/7 intelligent customer support that understands context and
              provides accurate solutions instantly.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Multi-language support</li>
              <li>• Context-aware responses</li>
              <li>• Seamless escalation to humans</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-blue-400/25">
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Content Creation
            </h4>
            <p className="text-gray-300 mb-4">
              Generate high-quality content, from blog posts to marketing copy,
              tailored to your brand voice.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Blog posts & articles</li>
              <li>• Social media content</li>
              <li>• Marketing copy</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-green-400/25">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Data Analysis
            </h4>
            <p className="text-gray-300 mb-4">
              Transform complex data into actionable insights with our
              AI-powered analysis tools.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Real-time analytics</li>
              <li>• Pattern recognition</li>
              <li>• Predictive modeling</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-orange-400/25">
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Process Automation
            </h4>
            <p className="text-gray-300 mb-4">
              Streamline your workflows with intelligent automation that adapts
              to your business needs.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Workflow optimization</li>
              <li>• Task automation</li>
              <li>• Integration capabilities</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-400/25">
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Personal Assistant
            </h4>
            <p className="text-gray-300 mb-4">
              Your intelligent personal assistant for scheduling, reminders, and
              daily task management.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Smart scheduling</li>
              <li>• Priority management</li>
              <li>• Calendar integration</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-indigo-400/25">
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Learning & Training
            </h4>
            <p className="text-gray-300 mb-4">
              Interactive learning experiences with personalized tutoring and
              skill development programs.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Personalized learning paths</li>
              <li>• Interactive tutorials</li>
              <li>• Progress tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
