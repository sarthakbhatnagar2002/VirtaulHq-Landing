import { CheckCircle2, Star, Zap } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900/20 to-cyan-900/20 text-white font-mono">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Choose the perfect plan for your team's virtual workspace needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div key={index} className={`group relative ${option.title === "Pro" ? "scale-105 z-10" : ""}`}>
              {option.title === "Pro" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-none flex items-center gap-2 text-sm font-mono">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`relative p-6 border transition-all duration-300 h-full flex flex-col ${
                option.title === "Pro"
                  ? "bg-gradient-to-br from-blue-800/60 to-cyan-800/60 border-blue-500/50 shadow-xl shadow-blue-500/20"
                  : "bg-gradient-to-br from-neutral-900/60 to-neutral-800/60 border-neutral-700/50 hover:border-blue-500/30"
              }`} style={{ borderRadius: "0px" }}>
                <div className={`w-16 h-16 rounded-none flex items-center justify-center mb-4 ${
                  option.title === "Pro"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                    : "bg-gradient-to-r from-neutral-700 to-neutral-600"
                }`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">
                    <span className={option.title === "Pro" ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" : "text-white"}>
                      {option.title}
                    </span>
                  </h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{option.price}</span>
                    <span className="text-neutral-400">/month</span>
                  </div>
                  <p className="text-neutral-400 text-sm mt-1">
                    {option.title === "Free" ? "Perfect for getting started" : 
                     option.title === "Pro" ? "Best value for teams" : "For large organizations"}
                  </p>
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 mt-1 ${option.title === "Pro" ? "text-blue-400" : "text-neutral-400"}`} />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button className={`w-full py-3 font-mono font-semibold transition-all duration-300 ${
                    option.title === "Pro"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105"
                      : "border border-neutral-600 text-neutral-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
                  }`} style={{ borderRadius: "0px" }}>
                    {option.title === "Free" ? "Get Started" : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-neutral-400 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button className="px-6 py-2 border border-blue-500 text-blue-400 hover:border-blue-400 hover:bg-blue-500/10 font-mono transition-all duration-300" style={{ borderRadius: "0px" }}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
