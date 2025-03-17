
import React, { useState } from 'react';

const Card = ({ children, className, glowColor = 'blue', hoverEffect = true }) => {
  const [transform, setTransform] = useState('');
  
  // Glow color options
  const glowColors = {
    blue: 'rgba(0, 114, 255, 0.3)',
    cyan: 'rgba(0, 255, 255, 0.3)',
    magenta: 'rgba(255, 0, 255, 0.3)',
    purple: 'rgba(153, 51, 255, 0.3)',
    multi: 'linear-gradient(to right, rgba(0, 114, 255, 0.2), rgba(255, 0, 255, 0.2))'
  };
  
  const color = glowColors[glowColor] || glowColors.blue;
  
  // Tilt effect handlers
  const handleMouseMove = (e) => {
    if (!hoverEffect) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };
  
  const handleMouseLeave = () => {
    setTransform('');
  };
  
  return (
    <div 
      className={`cyber-panel transition-all duration-200 ${className}`}
      onMouseMove={hoverEffect ? handleMouseMove : undefined}
      onMouseLeave={hoverEffect ? handleMouseLeave : undefined}
      style={{ 
        transform,
        boxShadow: `0 0 15px ${color}`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default Card;
