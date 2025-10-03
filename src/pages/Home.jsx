import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png"
import { FaLocationArrow } from "react-icons/fa6";

const Home = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for scroll effect on header
  const [isScrolled, setIsScrolled] = useState(false);

  // State for active navbar section
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();

  // Handle scroll effect for header and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "services", "features", "reviews"];
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handler - in a real app, this would route to auth pages
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
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Section */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-10 flex items-center justify-center">
                <img src={logo} className="object-cover" alt="Logo" />
              </div>
              <h1 className="text-2xl font-bold text-white">Cognito</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "features", label: "Features" },
                { id: "reviews", label: "Reviews" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}

              <div className="flex items-center space-x-4 ml-8">
                <button
                  onClick={() => handleAuth("signin")}
                  className="px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-cyan-400/50 cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => handleAuth("signup")}
                  className="px-6 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 font-medium shadow-lg shadow-cyan-400/25 cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
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

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-3 border border-white/20">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "features", label: "Features" },
                { id: "reviews", label: "Reviews" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 transition-colors duration-200 rounded-lg hover:bg-gray-600/40 ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-3 space-y-3">
                <button
                  onClick={() => handleAuth("signin")}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-cyan-400/50 cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => handleAuth("signup")}
                  className="block w-full px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-all duration-200 font-medium shadow-lg shadow-cyan-400/25 cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="absolute bottom-0 w-full h-[400px] blur-[90px] rounded-full translate-x-[-50%] translate-y-[-50%] bg-primary/50"></div> */}
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Companion
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the future of conversation with Cognito. Our advanced
              AI chatbot understands, learns, and adapts to provide you with
              intelligent responses and meaningful interactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/chat">
                <button
                  onClick={() => handleAuth("signup")}
                  className="px-6 py-2 flex items-center gap-2 bg-cyan-400 text-black text-lg font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-400/25 cursor-pointer"
                >
                  <span>
                    <FaLocationArrow />
                  </span>
                  Try Cognito
                </button>
              </NavLink>
              {/* <button className="px-6 py-2 border-2 border-white/20 text-gray-300 text-lg font-semibold rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200">
                Watch Demo
              </button> */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Services
              </h3>
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
                  Generate high-quality content, from blog posts to marketing
                  copy, tailored to your brand voice.
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
                  Streamline your workflows with intelligent automation that
                  adapts to your business needs.
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
                  Your intelligent personal assistant for scheduling, reminders,
                  and daily task management.
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
                  Interactive learning experiences with personalized tutoring
                  and skill development programs.
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

        {/* Enhanced Features Section */}
        <section
          id="features"
          className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">
                Powerful Features
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover what makes Cognito the most advanced AI chatbot
                platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Lightning Fast
                </h4>
                <p className="text-gray-300">
                  Get instant responses with our optimized AI engine. No
                  waiting, just seamless conversation flow with sub-second
                  response times.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Smart Learning
                </h4>
                <p className="text-gray-300">
                  Our AI learns from every interaction, becoming more
                  personalized and helpful over time with advanced machine
                  learning algorithms.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Secure & Private
                </h4>
                <p className="text-gray-300">
                  Your conversations are encrypted and private. We prioritize
                  your data security with enterprise-grade protection.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Multi-Language
                </h4>
                <p className="text-gray-300">
                  Communicate in over 50 languages with perfect context
                  understanding and culturally aware responses.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Emotional Intelligence
                </h4>
                <p className="text-gray-300">
                  Advanced emotional recognition and empathetic responses that
                  understand context, mood, and sentiment.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-cyan-400/25">
                  <svg
                    className="w-6 h-6 text-white"
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
                  Advanced Customization
                </h4>
                <p className="text-gray-300">
                  Tailor the AI to your specific needs with custom training,
                  personality settings, and industry-specific knowledge bases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section
          id="reviews"
          className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">
                What Our Users Say
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Cognito for
                their AI needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Cognito has revolutionized our customer support. The AI
                  understands complex queries and provides accurate solutions
                  24/7. Our customer satisfaction has increased by 40%!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-3">
                    SM
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">Sarah Mitchell</h5>
                    <p className="text-gray-400 text-sm">
                      CEO, TechFlow Solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The content creation capabilities are phenomenal. I've
                  generated months worth of blog content in just a few hours.
                  The quality is consistently high and matches our brand voice
                  perfectly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-3">
                    MR
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">
                      Michael Rodriguez
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Marketing Director, BrandCraft
                    </p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-gray-600/40 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "As a data analyst, I'm impressed by Cognito's ability to
                  process and explain complex datasets. It's like having a
                  senior analyst available 24/7. Incredible value for our team."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-3">
                    EC
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">Emily Chen</h5>
                    <p className="text-gray-400 text-sm">
                      Data Scientist, InsightHub
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional reviews continue in same pattern... */}
            </div>

            {/* Review Summary Stats */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">4.9/5</div>
                  <div className="text-gray-300 text-sm">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">15k+</div>
                  <div className="text-gray-300 text-sm">Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">98%</div>
                  <div className="text-gray-300 text-sm">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-300 text-sm">
                    Enterprise Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-12">
              Trusted by Millions Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                  2M+
                </div>
                <div className="text-gray-300 mt-2">Active Users</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  100M+
                </div>
                <div className="text-gray-300 mt-2">Conversations</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                  99.9%
                </div>
                <div className="text-gray-300 mt-2">Uptime</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  24/7
                </div>
                <div className="text-gray-300 mt-2">Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-600/10 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of
              AI conversation. Get started today with our free tier!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleAuth("signup")}
                className="px-8 py-4 bg-cyan-400 text-black text-lg font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-400/25"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 border-2 border-white/20 text-gray-300 text-lg font-semibold rounded-xl hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
              >
                Explore Services
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Free forever plan available
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                  <span className="text-black font-bold">C</span>
                </div>
                <span className="text-xl font-bold text-white">Cognito</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The future of AI conversation, designed for everyone. Empowering
                businesses and individuals with intelligent automation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Cognito AI Technologies. All rights reserved. Built with
              passion for AI innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;