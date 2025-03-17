
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Package, Settings, X } from 'lucide-react';

const Sidebar = ({ isOpen, isMobile, toggle }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  
  if (!isOpen) return null;
  
  return (
    <div className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-cyber-blue/20 bg-cyber-panel/80 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMobile ? 'translate-x-0' : ''}`}>
      <div className="flex h-14 items-center border-b border-cyber-blue/20 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-cyber-blue cyber-text">NEOCITY</span>
        </Link>
        
        {isMobile && (
          <button onClick={toggle} className="absolute right-2 top-2 rounded-sm opacity-70 transition-opacity hover:opacity-100">
            <X className="h-6 w-6 text-cyber-blue" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
      
      <div className="flex-1 overflow-auto py-4 cyber-scrollbar">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={index}
                to={item.path}
                className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active 
                    ? 'bg-cyber-blue/20 text-cyber-blue' 
                    : 'text-gray-400 hover:bg-cyber-blue/10 hover:text-cyber-blue'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
                {active && (
                  <span className="absolute right-0 h-6 w-1 rounded-l-full bg-cyber-blue"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="border-t border-cyber-blue/20 p-4">
        <div className="cyber-panel-sm bg-cyber-blue/5 p-4 text-xs text-cyber-blue">
          <div className="mb-2 font-mono">SYSTEM STATUS</div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
