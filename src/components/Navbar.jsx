
import React, { useState } from 'react';
import { BellIcon, MenuIcon, UserIcon, SearchIcon } from 'lucide-react';

const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cyber-black/80 backdrop-blur-xl border-b border-white/10 px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md hover:bg-white/5 transition-colors"
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="h-5 w-5 text-white" />
          </button>
          <div className="flex items-center gap-2">
            <span className="cyber-text text-xl md:text-2xl">NEOCITY</span>
            <div className="hidden md:block text-xs font-cyber bg-cyber-blue/20 text-cyber-blue px-2 py-0.5 rounded">
              v1.0
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center px-2 py-1 bg-black/30 rounded-full border border-white/10">
          <SearchIcon className="h-4 w-4 text-white/50 mr-2" />
          <input 
            type="text"
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm text-white w-48 placeholder:text-white/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors relative">
            <BellIcon className="h-5 w-5 text-white" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-cyber-magenta animate-pulse"></span>
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-white/5 transition-colors"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-cyber-blue to-cyber-magenta p-[1px]">
                <div className="absolute inset-0 rounded-full bg-cyber-black flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="hidden md:inline text-sm text-white">Admin</span>
            </button>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 cyber-panel cyber-panel-glow py-1 z-50 animate-fade-in">
                <a href="#profile" className="block px-4 py-2 text-sm text-white hover:bg-white/5">Your Profile</a>
                <a href="#settings" className="block px-4 py-2 text-sm text-white hover:bg-white/5">Settings</a>
                <div className="border-t border-white/10 my-1"></div>
                <a href="#logout" className="block px-4 py-2 text-sm text-cyber-red hover:bg-white/5">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
