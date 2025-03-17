
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react';
import CyberButton from '@/components/CyberButton';
import AuthLayout from '@/components/AuthLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect would happen here in a real app
      window.location.href = '/';
    }, 1500);
  };
  
  return (
    <AuthLayout>
      <div className="cyber-panel cyber-border p-6 w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="cyber-text text-3xl mb-1">LOGIN</h1>
          <p className="text-white/60 text-sm">Enter your credentials to access your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-white/80 font-cyber">
                EMAIL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-white/40" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="cyber-input pl-10 w-full"
                  placeholder="user@neocity.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-white/80 font-cyber">
                  PASSWORD
                </label>
                <Link to="/forgot-password" className="text-xs text-cyber-blue hover:text-cyber-cyan transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-white/40" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="cyber-input pl-10 pr-10 w-full"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-white/40" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-white/40" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <CyberButton
              type="submit"
              variant="primary"
              className="w-full py-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                  <span>AUTHENTICATING...</span>
                </div>
              ) : (
                <span>LOG IN</span>
              )}
            </CyberButton>
          </div>
          
          <div className="text-center text-sm text-white/60">
            Don't have an account?{' '}
            <Link to="/register" className="text-cyber-blue hover:text-cyber-cyan transition-colors">
              Sign up now
            </Link>
          </div>
        </form>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="text-center text-xs text-white/40">
            <p>Accessing this system means you agree to</p>
            <p>NEOCITY's <a href="#" className="text-white/60 hover:text-white">Terms of Service</a> and <a href="#" className="text-white/60 hover:text-white">Privacy Policy</a></p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pointer-events-none">
        <div className="opacity-10 text-cyber-blue font-cyber text-9xl rotate-90">
          ネオシティ
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-xs text-white/30 font-cyber">
        SYSTEM v1.0.235 • SECURE CONNECTION
      </div>
    </AuthLayout>
  );
};

export default Login;
