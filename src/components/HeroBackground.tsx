
import React from 'react';
import MovingBus from './MovingBus';

const HeroBackground: React.FC = () => {
  return (
    <div className="hero-gradient absolute inset-0 overflow-hidden">
      {/* City skyline - buildings */}
      <div className="absolute bottom-[35%] right-0 w-full h-[30%] flex justify-end items-end">
        <div className="w-16 h-32 bg-sky-blue/30 mx-1 rounded-t"></div>
        <div className="w-12 h-48 bg-sky-blue/30 mx-1 rounded-t"></div>
        <div className="w-20 h-64 bg-sky-blue/30 mx-1 rounded-t"></div>
        <div className="w-14 h-36 bg-sky-blue/30 mx-1 rounded-t"></div>
        <div className="w-10 h-24 bg-sky-blue/30 mx-1 rounded-t"></div>
      </div>
      
      {/* Hills */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full h-32 md:h-64">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg viewBox="0 0 1440 320" className="w-full h-full">
              <path 
                fill="#8ED1B5" 
                fillOpacity="0.6" 
                d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg viewBox="0 0 1440 320" className="w-full h-full">
              <path 
                fill="#BAC8E0" 
                fillOpacity="0.4" 
                d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
              </path>
            </svg>
          </div>
          
          {/* Road */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-800"></div>
          <div className="absolute bottom-3 left-0 w-full h-2">
            <div className="h-full flex items-center">
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
              <div className="w-12 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trees */}
      <div className="absolute bottom-[15%] left-[10%] animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-8 h-8 bg-soft-green rounded-full"></div>
        <div className="w-2 h-6 bg-gray-700 mx-auto"></div>
      </div>
      <div className="absolute bottom-[12%] left-[25%] animate-float" style={{ animationDelay: '1.2s' }}>
        <div className="w-10 h-10 bg-soft-green rounded-full"></div>
        <div className="w-2 h-8 bg-gray-700 mx-auto"></div>
      </div>
      <div className="absolute bottom-[18%] right-[15%] animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="w-12 h-12 bg-soft-green rounded-full"></div>
        <div className="w-3 h-10 bg-gray-700 mx-auto"></div>
      </div>
      
      {/* Clouds */}
      <div className="absolute top-[15%] left-[10%] animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="w-16 h-6 bg-white/60 rounded-full"></div>
      </div>
      <div className="absolute top-[25%] right-[20%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-20 h-8 bg-white/60 rounded-full"></div>
      </div>
      
      {/* Moving bus */}
      <MovingBus />
    </div>
  );
};

export default HeroBackground;
