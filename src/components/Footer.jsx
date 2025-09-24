import { useState } from "react";
import logo from "../assets/Logo.png"
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const [emailSubscription, setEmailSubscription] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (emailSubscription) {
      setIsSubscribed(true);
      setEmailSubscription('');
    }
  };

  return (
    <footer className="relative bg-black border-t border-blue-800 text-white font-mono">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Stay in the Loop
          </h3>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Get the latest updates, tips, and exclusive features delivered to your inbox.
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={emailSubscription}
              onChange={(e) => setEmailSubscription(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-neutral-900 border border-blue-800 rounded-none focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
            <button
              onClick={handleSubscribe}
              className={`px-6 py-3 rounded-none font-semibold transition-all duration-300 ${isSubscribed ? 'bg-green-600 text-white': 'bg-gradient-to-r from-blue-600 to-cyan-600'}`}>
              {isSubscribed ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Resources</h4>
            <ul className="my-6">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block" >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block" >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Community</h4>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block" >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-lg pixel-font">Connect</h4>
            <div className="flex gap-4">
              <Github className="cursor-pointer text-white hover:text-blue-950 hover:scale-110 transition-all duration-75" />
              <Linkedin className="cursor-pointer text-white hover:text-blue-400 hover:scale-110 transition-all duration-75" />
              <Instagram className="cursor-pointer text-white hover:text-pink-400 hover:scale-110 transition-all duration-75" />
              <Mail className="cursor-pointer text-white hover:text-green-400 hover:scale-110 transition-all duration-75 " />
              <Twitter className="cursor-pointer text-white hover:text-sky-400 hover:scale-110 transition-all duration-75 " />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-800">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-none flex items-center justify-center mr-3">
              <img className="w-16" src={logo} alt="logo" />
            </div>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              VirtualHQ
            </span>
          </div>

          <p className="text-gray-700 text-sm">
            © 2025 VirtualHQ. All rights reserved. Building the future of virtual collaboration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
