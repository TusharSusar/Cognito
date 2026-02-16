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
import MainNavbar from "../components/MainNavbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { HeroSection } from "../components/Hero";
// import CompanyCarousel from "../components/UI/CompanyCorousel";
import InteractiveStats from "../components/HomeStats";
import PricingSection from "../components/PricingSection";
import { AuthContext } from "../context/context";
import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const Home = () => {

  // Handle scroll effect for header and active section

  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center bg-bacground">
        <HashLoader color="#0CAFFF" size={24} />
        {/* <PacmanLoader color="#0CAFFF" /> */}
      </div>
    );
  if (user) return <Navigate to="/chat" />;

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Section */}
      <MainNavbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
       <HeroSection/>

        {/* Services Section */}
        <Services />

        {/* Enhanced Features Section */}
        <main className="max-w-7xl mx-auto py-12">
          {/* Title Section */}
          {/* <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">
              Upgrade your plan
            </h1>
            <p className="text-gray-400 text-lg">
              Choose the plan that fits your usage. Prices shown in INR (₹),
              billed monthly.
            </p>
          </div> */}

          {/* Pricing Cards */}
          <PricingSection/>
        </main>

        {/* Customer Reviews Section */}
        {/* <CompanyCarousel/> */}

        <InteractiveStats/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

// Home.jsx