
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CyberButton = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className,
  magneticEffect = true,
  glowIntensity = 'medium',
  ...props 
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Variants styling
  const variants = {
    default: 'border-cyber-blue/30 bg-gradient-to-b from-cyber-blue/10 to-cyber-blue/5 text-cyber-blue hover:text-white',
    primary: 'border-cyber-cyan/30 bg-gradient-to-b from-cyber-cyan/20 to-cyber-cyan/5 text-cyber-cyan hover:text-white',
    secondary: 'border-cyber-magenta/30 bg-gradient-to-b from-cyber-magenta/10 to-cyber-magenta/5 text-cyber-magenta hover:text-white',
    accent: 'border-cyber-purple/30 bg-gradient-to-b from-cyber-purple/10 to-cyber-purple/5 text-cyber-purple hover:text-white',
    outline: 'border-white/20 bg-transparent text-white hover:border-cyber-blue/50 hover:text-cyber-blue',
    ghost: 'border-transparent bg-transparent text-white hover:bg-white/5',
    destructive: 'border-cyber-red/30 bg-gradient-to-b from-cyber-red/10 to-cyber-red/5 text-cyber-red hover:text-white',
  };
  
  // Sizes styling
  const sizes = {
    default: 'h-10 px-6 py-2 text-sm',
    sm: 'h-8 px-4 py-1 text-xs',
    lg: 'h-12 px-8 py-3 text-base',
    icon: 'h-10 w-10'
  };
  
  // Glow intensity settings
  const glowSettings = {
    low: '0 0 5px',
    medium: '0 0 10px',
    high: '0 0 20px', 
    none: '0 0 0'
  };
  
  const glowColors = {
    default: 'rgba(0, 114, 255, 0.3)',
    primary: 'rgba(0, 255, 255, 0.3)',
    secondary: 'rgba(255, 0, 255, 0.3)',
    accent: 'rgba(153, 51, 255, 0.3)',
    outline: 'rgba(255, 255, 255, 0.15)',
    ghost: 'transparent',
    destructive: 'rgba(255, 0, 51, 0.3)'
  };
  
  const glow = glowSettings[glowIntensity] || glowSettings.medium;
  const glowColor = glowColors[variant] || glowColors.default;
  
  useEffect(() => {
    if (!magneticEffect || !buttonRef.current || !isHovered) {
      setPosition({ x: 0, y: 0 });
      return;
    }
    
    const handleMouseMove = (e) => {
      const button = buttonRef.current;
      if (!button) return;
      
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Magnetic strength - lower number means stronger pull
      const strength = 15;
      
      setPosition({
        x: distanceX / strength,
        y: distanceY / strength
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [magneticEffect, isHovered]);
  
  return (
    <button
      ref={buttonRef}
      className={cn(
        'relative inline-flex items-center justify-center whitespace-nowrap rounded-md border font-cyber transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        boxShadow: isHovered ? `${glow} ${glowColor}` : `0 0 0 transparent`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default CyberButton;
