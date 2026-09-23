import React, { useState } from 'react';
import { Game } from '../types';
import { X, Play, Pause, Volume2, VolumeX, ShoppingBag, Maximize } from 'lucide-react';

interface TrailerModalProps {
  game: Game | null;
  onClose: () => void;
  onAddToCart: (game: Game) => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({
  game,
  onClose,
  onAddToCart,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <div 
        className="relative w-full max-w-4xl bg-[#0f0f1c] border border-[#232333] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 border-b border-[#232333] flex items-center justify-between bg-[#0a0a14]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4f79] animate-pulse" />
            <h3 className="font-heading text-sm font-semibold text-[#f2f1f7]">
              {game.title} — Official Gameplay Trailer
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close trailer"
            className="w-8 h-8 rounded-full border border-[#232333] text-[#8b8a9c] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black overflow-hidden group flex items-center justify-center">
          <img
            src={game.image}
            alt={game.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isPlaying ? 'scale-105 brightness-90' : 'brightness-50'
            }`}
          />

          {/* Animated Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play Indicator */}
          {!isPlaying && (
            <div 
              onClick={() => setIsPlaying(true)}
              className="absolute w-16 h-16 rounded-full bg-[#7b3ff2]/90 text-white flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 transition-transform"
            >
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
          )}

          {/* Player Bottom Control Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-[#3ee6d0] transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-[#3ee6d0] transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <span className="font-mono text-[11px] text-[#8b8a9c]">
                {isPlaying ? '01:42 / 02:18' : 'Paused'} · 4K 60FPS HDR
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onAddToCart(game);
                  onClose();
                }}
                className="px-4 py-1.5 rounded-full font-semibold text-xs bg-[#7b3ff2] hover:bg-[#9d6bff] text-white flex items-center gap-1.5 transition-all shadow-md"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                {game.price === 0 ? 'Play Free' : `Buy Now $${game.price.toFixed(2)}`}
              </button>
            </div>
          </div>

          {/* Simulated Scrub Bar */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-[#232333]">
            <div className="h-full bg-gradient-to-r from-[#7b3ff2] to-[#3ee6d0] w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};
