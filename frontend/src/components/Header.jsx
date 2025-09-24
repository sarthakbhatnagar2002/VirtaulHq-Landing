import { useState, useEffect } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { navItems } from "../constants/Data";
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log('Checking auth...');
      const response = await fetch('http://localhost:5000/user/verify', {
        method: 'GET',
        credentials: 'include',
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('User data:', data);
        setUser(data.user);
      } else {
        console.log('Not authenticated');
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      console.log('Logging out...');
      const response = await fetch('http://localhost:5000/user/logout', {
        method: 'POST',
        credentials: 'include',
      });

      console.log('Logout response status:', response.status);

      if (response.ok) {
        console.log('Logout successful');
        setUser(null);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
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
              <a 
                href={item.href} 
                className="text-neutral-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden lg:flex">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              <span className="text-neutral-400">Loading...</span>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-neutral-300 font-medium">{user.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 py-2 px-4 border border-red-500/50 hover:border-red-400 hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-all duration-300 rounded-none"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center space-x-4 items-center">
              <Link 
                to="/Login"
                className="py-2 px-6 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-none"
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 py-2 px-6 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 rounded-none font-mono"
              >
                Sign up
              </Link>
            </div>
          )}
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

      {/* Mobile Menu */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleNavbar}></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-neutral-900/95 border-l border-blue-500/20 p-6 transform animate-slide-in rounded-none">
            <div className="flex flex-col h-full">
              <button 
                onClick={toggleNavbar} 
                className="self-end p-2 hover:bg-neutral-800 transition-colors duration-300 mb-8 rounded-none"
              >
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

              {/* Mobile Auth */}
              <div className="mt-auto">
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2 py-4">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                    <span className="text-neutral-400">Loading...</span>
                  </div>
                ) : user ? (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2 justify-center">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-neutral-300 font-medium">{user.username}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 py-2 px-4 border border-red-500/50 hover:border-red-400 hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-all duration-300 rounded-none justify-center w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Link 
                      to="/Login"
                      className="py-2 px-6 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-none block text-center"
                    >
                      Log In
                    </Link>
                    <Link 
                      to="/Signup" 
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 py-2 px-6 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 rounded-none font-mono block text-center"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;