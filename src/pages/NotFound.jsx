
import React from 'react';
import AuthLayout from '../components/AuthLayout';
import CyberButton from '../components/CyberButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h1 className="cyber-text text-8xl font-bold text-cyber-blue mb-4">404</h1>
        <div className="relative mb-8 w-60 h-60 mx-auto">
          <div className="absolute inset-0 border-2 border-cyber-blue rounded-full animate-pulse-slow opacity-20"></div>
          <div className="absolute inset-2 border border-cyber-magenta rounded-full animate-reverse-spin opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="cyber-text text-white text-xl font-bold">CONNECTION LOST</span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,#000_80%)]"></div>
        </div>
        
        <h2 className="mb-2 cyber-text text-2xl font-bold text-white">SYSTEM ERROR</h2>
        <p className="mb-6 max-w-md text-gray-400">The neural pathway you're searching for does not exist in our database. Check your coordinates and try again.</p>
        
        <div className="flex space-x-4">
          <CyberButton
            onClick={() => navigate(-1)}
            variant="outline"
          >
            Go Back
          </CyberButton>
          
          <CyberButton
            onClick={() => navigate('/')}
          >
            Return to Base
          </CyberButton>
        </div>
      </div>
    </AuthLayout>
  );
};

export default NotFound;
