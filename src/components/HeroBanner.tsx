import React, { useState, useEffect, useRef } from 'react';
import { Game } from '../types';

interface HeroBannerProps {
  games: Game[];
  onSelectGame: (game: Game) => void;
  onAddToCart: (game: Game) => void;
  onWatchTrailer?: (game: Game) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  games,
  onSelectGame,
  onAddToCart,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(0);

  const featuredGames = games.length > 0 ? games : [];
  const slideDuration = 5000; // 5 seconds per slide
  const stepTime = 50;
  const increment = (stepTime / slideDuration) * 100;

  // Auto-play timer and smooth progress bar matching vanilla JS implementation
  useEffect(() => {
    if (isPaused || featuredGames.length <= 1) return;

    const interval = setInterval(() => {
      progressRef.current += increment;
      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
      } else {
        setProgress(progressRef.current);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isPaused, featuredGames.length, currentSlide, increment]);

  const goToSlide = (index: number) => {
    progressRef.current = 0;
    setProgress(0);
    setCurrentSlide((index + featuredGames.length) % featuredGames.length);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  if (featuredGames.length === 0) return null;

  return (
    <section className="relative w-full max-w-[1240px] mx-auto mt-6 px-4 sm:px-6">
      {/* Outer ambient glow blending the hero area into the dark page background */}
      <div className="absolute inset-x-8 inset-y-6 bg-black/60 blur-3xl -z-10 pointer-events-none" />

      {/* Container: Seamless border blend with heavy feathered vignette and no hard border strokes */}
      <div
        className="hero-slider relative w-full h-[520px] sm:h-[550px] bg-[#07090e] rounded-[20px] overflow-hidden select-none"
        style={{
          boxShadow: '0 0 70px 25px #07090e, 0 30px 60px rgba(0, 0, 0, 0.95)',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Track containing absolute slides */}
        <div className="slide-container relative w-full h-full">
          {featuredGames.map((game, index) => {
            const isActive = index === currentSlide;
            const isSilentHill = game.title.toUpperCase().includes('SILENT HILL');
            const isFFTactics = game.title.toUpperCase().includes('FINAL FANTASY');
            const isGraveyard = game.title.toUpperCase().includes('GRAVEYARD');
            const isChrono = game.title.toUpperCase().includes('CHRONO');
            const isAlanWake = game.title.toUpperCase().includes('ALAN WAKE');

            const versionTag = game.version || (isGraveyard ? 'V 1.004.3' : isFFTactics ? 'B 24304444' : 'V 1.4.153521');
            const platformTag = game.platforms?.[0] || 'PC';
            const buildTag = game.buildTag || (isSilentHill ? 'Own CSF 2026' : isGraveyard ? 'Own CSF 2026' : isFFTactics ? 'Own CSF 2025' : isChrono ? 'Official 2026' : isAlanWake ? 'PS5' : 'Official 2026');

            return (
              <div
                key={game.id}
                className={`slide absolute inset-0 flex items-center justify-between p-6 sm:p-12 lg:px-16 lg:py-12 transition-all duration-600 ease-in-out overflow-hidden ${
                  isActive ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0 pointer-events-none'
                }`}
                style={{
                  transitionProperty: 'opacity, visibility',
                  transitionDuration: '0.6s',
                  transitionTimingFunction: 'ease-in-out',
                }}
              >
                {/* Dynamic Cinematic Zoom Wallpaper */}
                <div
                  className={`absolute inset-0 bg-cover bg-center pointer-events-none transform will-change-transform transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-110 translate-x-[-1%] translate-y-[-1%]' : 'scale-100 translate-x-0 translate-y-0'
                  }`}
                  style={{
                    backgroundImage: `url(${game.image})`,
                    backgroundPosition: isFFTactics ? 'center 35%' : isChrono ? 'center 50%' : 'center 40%',
                  }}
                />

                {/* Deep Perimeter Border Blend Mask: Softens & feathers all 4 outer borders and corners seamlessly into #07090e */}
                <div
                  className="absolute inset-0 z-[1] pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 94% 84% at 50% 50%, transparent 35%, rgba(7, 9, 14, 0.45) 60%, rgba(7, 9, 14, 0.88) 82%, #07090e 100%)',
                    boxShadow: 'inset 0 0 70px 25px #07090e, inset 0 0 130px 60px rgba(7, 9, 14, 0.85)',
                  }}
                />

                {/* Directional Feathered Edge Fades: Complete seamless edge dissolve */}
                <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#07090e] via-[#07090e]/75 to-transparent z-[1] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090e] via-[#07090e]/85 to-transparent z-[1] pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-52 bg-gradient-to-r from-[#07090e] via-[#07090e]/80 to-transparent z-[1] pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#07090e] via-[#07090e]/70 to-transparent z-[1] pointer-events-none" />

                {/* Additional Left Reading Scrim for Sharp Text Contrast */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#07090e]/95 via-[#07090e]/85 via-40% to-transparent pointer-events-none" />

                {/* Slide Left Content */}
                <div className="slide-content relative z-[2] max-w-[500px] w-full">
                  {/* Title */}
                  {isSilentHill ? (
                    <h1 className="title text-[2rem] sm:text-[2.2rem] font-extrabold tracking-[2px] uppercase mb-4 text-white leading-tight">
                      Silent Hill <br />
                      <span className="text-[#e63946] text-[1.5rem] tracking-[4px] font-medium lowercase font-serif">
                        townfall
                      </span>
                    </h1>
                  ) : isFFTactics ? (
                    <div className="mb-4">
                      <h1 className="title text-[1.85rem] sm:text-[2.2rem] font-serif font-black tracking-[2px] uppercase text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                        FINAL FANTASY TACTICS
                      </h1>
                      <div className="text-[#a0a6b1] text-[0.75rem] sm:text-[0.85rem] tracking-[4px] font-sans font-semibold mt-0.5">
                        THE IVALICE CHRONICLES
                      </div>
                    </div>
                  ) : (
                    <h1 className="title text-[2rem] sm:text-[2.2rem] font-extrabold tracking-[2px] uppercase mb-4 text-white leading-tight">
                      {game.title}
                      {game.subtitle && (
                        <div className="text-[#a875ff] text-[1rem] tracking-[3px] font-medium font-sans normal-case mt-0.5">
                          {game.subtitle}
                        </div>
                      )}
                    </h1>
                  )}

                  {/* Meta Tags */}
                  <div className="meta-tags flex flex-wrap gap-2.5 items-center mb-4 text-[0.85rem]">
                    <span className="badge-green bg-[#00c853] text-black font-bold px-2 py-1 rounded-[4px] shadow-[0_0_14px_rgba(0,200,83,0.4)]">
                      {versionTag}
                    </span>
                    <span className="badge-dark bg-white/10 px-2 py-1 rounded-[4px] text-[#ccc] font-medium">
                      {platformTag}
                    </span>
                    <span className="badge-dark bg-white/10 px-2 py-1 rounded-[4px] text-[#ccc] font-medium">
                      {buildTag}
                    </span>
                  </div>

                  {/* Description with clamped text */}
                  <p className="description text-[#a0a6b1] text-[0.95rem] leading-[1.6] mb-8 line-clamp-3">
                    {game.description}
                  </p>

                  {/* Actions */}
                  <div className="actions flex items-center gap-6 mb-8">
                    {/* Cyan Button with Intense Neon Glow matching the uploaded screenshots */}
                    <button
                      onClick={() => onAddToCart(game)}
                      className="btn-primary bg-[#00a3ff] hover:bg-[#0082cc] text-white font-semibold py-3 px-6 rounded-[6px] transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
                      style={{
                        boxShadow: '0 0 26px 2px rgba(0, 163, 255, 0.65), 0 4px 14px rgba(0, 163, 255, 0.4)',
                      }}
                    >
                      Download Now &rarr;
                    </button>
                    <button
                      onClick={() => onSelectGame(game)}
                      className="link-secondary text-[#ccc] hover:text-white text-[0.9rem] transition-colors duration-200 cursor-pointer bg-transparent border-0 flex items-center gap-1"
                    >
                      <span>Details</span>
                      <span>&gt;</span>
                    </button>
                  </div>

                  {/* Smooth Progress Bar */}
                  <div className="progress-bar-bg w-[220px] h-[3px] bg-white/15 rounded-[2px] overflow-hidden">
                    <div
                      className="progress-bar-fill h-full bg-[#00a3ff] rounded-[2px]"
                      style={{
                        width: isActive ? `${Math.min(progress, 100)}%` : '0%',
                        transition: 'width 0.05s linear',
                      }}
                    />
                  </div>
                </div>

                {/* Right Side Visual Focal Area (Art breathing room) */}
                <div className="relative z-[2] hidden md:flex items-center justify-end h-full flex-1 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Navigation Dots (Centered Bottom) */}
        <div className="slider-nav absolute bottom-[25px] left-0 right-0 z-10 flex justify-center items-center pointer-events-auto">
          <div className="dots flex gap-2">
            {featuredGames.map((_, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`dot h-2 transition-all duration-300 cursor-pointer border-0 p-0 ${
                    isActive
                      ? 'active bg-[#00a3ff] w-[18px] rounded-[4px] shadow-[0_0_10px_rgba(0,163,255,0.85)]'
                      : 'bg-white/30 hover:bg-white/60 w-2 rounded-full'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows (Bottom Right) */}
        <div className="arrow-controls absolute right-[30px] bottom-[20px] flex gap-2.5 z-10 pointer-events-auto">
          <button
            onClick={prevSlide}
            id="prevBtn"
            aria-label="Previous slide"
            className="arrow-btn w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.25] border border-white/15 text-white flex items-center justify-center cursor-pointer transition-colors duration-200 text-sm backdrop-blur-sm"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            id="nextBtn"
            aria-label="Next slide"
            className="arrow-btn w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.25] border border-white/15 text-white flex items-center justify-center cursor-pointer transition-colors duration-200 text-sm backdrop-blur-sm"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
