
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen flex-col bg-cyber-black">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} isMobile={isMobile} toggle={toggleSidebar} />
        <main className={`flex-1 overflow-auto transition-all duration-300 ease-in-out cyber-scrollbar p-4 md:p-6 ${sidebarOpen && !isMobile ? 'ml-64' : ''}`}>
          <div className="container mx-auto animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
