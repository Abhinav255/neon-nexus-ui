
import React, { useState, useRef, useEffect } from 'react';

const CyberButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  glitch = false,
  magnetic = false,
  onClick,
  ...props 
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = useRef(null);
  
  // Magnetic effect
  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    
    setPos({ x, y });
  };
  
  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
    setIsHovering(false);
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  // Glitch effect
  useEffect(() => {
    if (glitch && isHovering) {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }, 2000);
      
      return () => clearInterval(glitchInterval);
    }
  }, [glitch, isHovering]);
  
  // Generate button classes based on props
  const variantClasses = {
    primary: 'bg-cyber-blue hover:bg-cyber-blue/90 text-white',
    secondary: 'bg-cyber-magenta hover:bg-cyber-magenta/90 text-white',
    outline: 'bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10',
    ghost: 'bg-transparent text-cyber-blue hover:bg-cyber-blue/10'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  const baseClasses = 'relative inline-flex items-center justify-center rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const computedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      ref={ref}
      className={`${computedClasses} ${isGlitching ? 'glitch' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      {...props}
    >
      {glitch && (
        <>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 glitch-effect">{children}</span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 glitch-effect-2">{children}</span>
        </>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CyberButton;
