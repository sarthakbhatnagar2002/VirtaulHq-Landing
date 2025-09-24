import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import logo from "../assets/Logo.png"

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (

    <div className="container px-6 mx-auto relative font-mono">
      <div className="flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <img className="w-16" src={logo} alt="logo" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            VirtualHQ
          </span>
        </div>

        <ul className="hidden lg:flex ml-14 space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-neutral-300 hover:text-white transition-colors duration-300 relative group" >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex justify-center space-x-4 items-center">
          <a href="#" className="py-2 px-6 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-none">
            Log In
          </a>
          <a href="#" className="bg-gradient-to-r from-blue-600 to-cyan-600 py-2 px-6 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 rounded-none font-mono">
            Sign up
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="p-2 hover:bg-neutral-800 transition-colors duration-300 rounded-none"
          >
            {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleNavbar}></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-neutral-900/95 border-l border-blue-500/20 p-6 transform animate-slide-in rounded-none">
            <div className="flex flex-col h-full">
              <button onClick={toggleNavbar} className="self-end p-2 hover:bg-neutral-800 transition-colors duration-300 mb-8 rounded-none" >
                <X className="w-6 h-6" />
              </button>
              <ul className="space-y-6 mb-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block text-lg text-neutral-300 hover:text-white transition-colors duration-300"
                      onClick={toggleNavbar}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 mt-auto">
                <a href="#" className="block text-center py-3 px-6 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-none" >
                  Sign In
                </a>
                <a href="#" className="block text-center bg-gradient-to-r from-blue-600 to-cyan-600 py-3 px-6 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-none" >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
