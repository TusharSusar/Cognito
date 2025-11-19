// import { Button } from "./ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export function HeroSection() {

  const navigate = useNavigate();

  const handleAuth = (type) => {
    // In a real application: navigate('/auth', { state: { mode: type } });
    const authorizeduser = JSON.parse(sessionStorage.getItem("user"));
    if (authorizeduser) navigate(`/chat`);
    else {
      console.log(`Navigating to ${type} page`);
      navigate(`/${type}`);
    }
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(12,175,255,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent select-none">
          Chat Smarter,
          <br />
          Connect Better
        </h1>

        {/* Tagline */}
        <p className="mb-4 text-text/90 text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto">
          Experience the next generation of messaging with AI-powered
          conversations
        </p>

        {/* Description */}
        <p className="mb-12 text-text/40 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
          Cognito brings intelligence to your conversations with real-time
          collaboration, seamless media sharing, and personalized AI assistance.
          Connect with anyone, anywhere.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleAuth("signup")}
            className="px-6 py-2 bg-primary text-black rounded-lg hover:bg-cyan-300 flex items-center gap-2 transition-all duration-200 transform font-semibold shadow-lg shadow-cyan-400/25 cursor-pointer"
          >
            Try Cognito
            <span>
              <GoArrowUpRight/>
            </span>
          </button>
          {/* <button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 px-8 py-6"
          >
            Watch Demo
          </button> */}
        </div>

        {/* Stats or Social Proof */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-3xl mb-2 text-primary">10M+</div>
            <div className="text-foreground/70">Active Users</div>
          </div>
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-3xl mb-2 text-primary">99.9%</div>
            <div className="text-foreground/70">Uptime</div>
          </div>
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-3xl mb-2 text-primary">150+</div>
            <div className="text-foreground/70">Countries</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
