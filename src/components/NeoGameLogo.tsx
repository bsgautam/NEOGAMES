import React from 'react';
import logoBadgeImg from '../assets/images/neogame_logo_mark_1790185539806.jpg';

interface NeoGameLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
}

export const NeoGameIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-[#0d0d18] border border-[#3b2d66] shadow-[0_0_15px_rgba(157,107,255,0.35)] flex items-center justify-center group-hover:shadow-[0_0_22px_rgba(157,107,255,0.6)] group-hover:border-[#9d6bff]/60 transition-all duration-300 flex-shrink-0 ${sizeMap[size]} ${className}`}
    >
      {/* 3D Rendered Controller Infinity Emblem */}
      <img
        src={logoBadgeImg}
        alt="NEOGAMES"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      {/* Subtle glossy sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

export const NeoGameLogo: React.FC<NeoGameLogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = false,
  className = '',
}) => {
  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <NeoGameIcon size={size} />

      {showText && (
        <div className="flex flex-col justify-center">
          <div className={`font-heading font-extrabold tracking-wider leading-none flex items-center ${textSizeMap[size]}`}>
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]">NEO</span>
            <span className="text-[#a875ff] drop-shadow-[0_2px_12px_rgba(168,117,255,0.45)]">GAMES</span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-[#8b8a9c] mt-1 uppercase">
              <span>PLAY</span>
              <span className="text-[#9d6bff]">•</span>
              <span>EXPLORE</span>
              <span className="text-[#9d6bff]">•</span>
              <span>BELONG</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NeoGameLogo;
