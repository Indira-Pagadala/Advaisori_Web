import React from 'react';
import logoImage from '../assets/images/Logo.png';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <img 
      src={logoImage}
      alt="Advaisori Logo"
      style={{ width: size, height: 'auto' }}
      className={className}
    />
  );
};

export default Logo;
