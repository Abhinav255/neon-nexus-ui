
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-cyber-black">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(0,114,255,0.03)_0%,transparent_20%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,0,255,0.05)_0%,transparent_30%)]"></div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          
          {/* Animated circle border */}
          <div className="absolute left-[calc(50%-250px)] top-[calc(50%-250px)] w-[500px] h-[500px] rounded-full border border-cyber-blue/20 opacity-20 animate-rotate-glow"></div>
          <div className="absolute left-[calc(50%-200px)] top-[calc(50%-200px)] w-[400px] h-[400px] rounded-full border border-cyber-magenta/10 opacity-10 animate-rotate-glow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
        </div>
      </div>
      
      <div className="relative flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 z-10">
        <div className="absolute top-6 left-6">
          <a href="/" className="cyber-text text-2xl">NEOCITY</a>
        </div>
        
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
