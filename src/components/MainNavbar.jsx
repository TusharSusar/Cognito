import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

function MainNavbar() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for scroll effect on header
  const [isScrolled, setIsScrolled] = useState(false);

  // State for active navbar section
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

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
    <header
      className={`fixed top-0 w-full z-50 bg-transparent bg-clip-padding backdrop-blur-xl border-transparent transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl border-b border-white/20"
          : "border-b border-red-200/20"
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
          <div className="lg:hidden bg-black/95 backdrop-blur-xl rounded-lg mt-2 p-4 space-y-3 border border-white/20">
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
  );
}

export default MainNavbar;
