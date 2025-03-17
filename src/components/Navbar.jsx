
import React from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';

const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-cyber-blue/20 bg-cyber-black px-4 sm:px-6">
      <button 
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cyber-blue hover:text-cyber-magenta transition-colors"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      
      <div className="flex-1">
        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-cyber-blue/50" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-cyber-panel border border-cyber-blue/20 rounded-md py-2 pl-8 pr-4 text-sm text-white focus:border-cyber-magenta focus:outline-none focus:ring-1 focus:ring-cyber-magenta placeholder:text-gray-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyber-blue/20 text-cyber-blue hover:border-cyber-magenta hover:text-cyber-magenta transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          <span className="sr-only">Notifications</span>
        </button>
        
        <button className="ml-2 flex items-center gap-2 rounded-full border border-cyber-blue/20 px-2 py-1 text-sm text-white hover:border-cyber-magenta transition-colors">
          <span className="relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full">
            <User className="h-7 w-7 text-cyber-blue" />
          </span>
          <span className="hidden sm:inline-block">User</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
