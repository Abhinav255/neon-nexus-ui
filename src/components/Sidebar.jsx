
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  DashboardIcon, 
  UsersIcon, 
  BoxIcon, 
  SettingsIcon, 
  ChevronLeftIcon,
  LogOutIcon,
  BriefcaseIcon,
  BarChartIcon,
  CalendarIcon
} from 'lucide-react';

const NavItem = ({ to, icon: Icon, children, isActive }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group ${
        isActive 
          ? 'bg-cyber-blue/10 text-white' 
          : 'text-white/70 hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon 
        className={`h-5 w-5 ${
          isActive 
            ? 'text-cyber-blue' 
            : 'text-white/70 group-hover:text-white'
        }`} 
      />
      <span className="text-sm font-medium">{children}</span>
      {isActive && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyber-blue"></span>
      )}
    </Link>
  </li>
);

const Sidebar = ({ isOpen, isMobile, toggle }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { to: '/', label: 'Dashboard', icon: DashboardIcon },
    { to: '/users', label: 'Users', icon: UsersIcon },
    { to: '/products', label: 'Products', icon: BoxIcon },
    { to: '/analytics', label: 'Analytics', icon: BarChartIcon },
    { to: '/projects', label: 'Projects', icon: BriefcaseIcon },
    { to: '/schedule', label: 'Schedule', icon: CalendarIcon },
    { to: '/settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggle}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-cyber-black/90 backdrop-blur-xl border-r border-white/10 transition-transform duration-300 ease-in-out pt-16 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-4 right-4 md:hidden">
          <button 
            onClick={toggle}
            className="p-1 rounded-md hover:bg-white/5 transition-colors"
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="h-full flex flex-col cyber-scrollbar overflow-y-auto">
          <div className="px-4 py-2">
            <p className="cyber-subheading text-xs">Navigation</p>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-1 px-2">
              {navItems.map(item => (
                <NavItem 
                  key={item.to} 
                  to={item.to} 
                  icon={item.icon}
                  isActive={pathname === item.to}
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </nav>

          <div className="p-4">
            <div className="cyber-panel p-4">
              <div className="flex flex-col items-center">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-cyber-blue to-cyber-magenta p-[1px] mb-3">
                  <div className="absolute inset-0 rounded-full bg-cyber-black flex items-center justify-center">
                    <UsersIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-xs text-white/70">Logged in as</p>
                <p className="text-sm font-medium text-white">Administrator</p>
                <button className="mt-3 flex items-center gap-2 text-white/70 hover:text-white text-xs">
                  <LogOutIcon className="h-3 w-3" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
