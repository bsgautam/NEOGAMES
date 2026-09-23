import React from 'react';
import { Game } from '../types';
import { Star, Download, Eye } from 'lucide-react';

import lootborneImg from '../assets/images/lootborne_poster_1790188304531.jpg';
import graveyardPosterImg from '../assets/images/graveyard_keeper_poster_1790188340056.jpg';
import silenthillImg from '../assets/images/silenthill_townfall_hero_1790186517667.jpg';
import chronoImg from '../assets/images/chrono_tactics_art_1790167655479.jpg';
import rocketImg from '../assets/images/rocket_cyber_car_1790167641184.jpg';
import fpsImg from '../assets/images/tactical_fps_protocol_1790167560815.jpg';
import racingImg from '../assets/images/racing_velocity_rift_1790167574838.jpg';
import mobaImg from '../assets/images/moba_arena_champions_1790167548418.jpg';

export interface TrendingItem {
  id: string;
  title: string;
  image: string;
  genre: string;
  rating: number;
  badge?: string;
  price?: number;
}

interface TrendingGamesSectionProps {
  onSelectGame?: (gameTitle: string) => void;
  theme?: 'dark' | 'light';
}

export const TrendingGamesSection: React.FC<TrendingGamesSectionProps> = ({
  onSelectGame,
  theme = 'dark',
}) => {
  const trendingList: TrendingItem[] = [
    {
      id: 'lootborne',
      title: 'Lootborne',
      image: lootborneImg,
      genre: 'Soulslike RPG',
      rating: 4.8,
      badge: 'HOT',
      price: 29.99,
    },
    {
      id: 'igtap',
      title: 'IGTAP: Incremental',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
      genre: 'Platformer',
      rating: 4.6,
      badge: 'NEW',
      price: 0,
    },
    {
      id: 'happy-wheels',
      title: 'Happy Wheels',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
      genre: 'Physics Casual',
      rating: 4.7,
      price: 0,
    },
    {
      id: 'silent-hill',
      title: 'Silent Hill: Townfall',
      image: silenthillImg,
      genre: 'Horror',
      rating: 4.9,
      badge: 'TOP',
      price: 49.99,
    },
    {
      id: 'graveyard-keeper',
      title: 'Graveyard Keeper 2',
      image: graveyardPosterImg,
      genre: 'Simulation RPG',
      rating: 4.9,
      badge: 'NEW',
      price: 24.99,
    },
    {
      id: 'dressmaker',
      title: 'Dressmaker Studio',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80',
      genre: 'Visual Novel',
      rating: 4.5,
      price: 14.99,
    },
    {
      id: 'police-chief',
      title: 'Police Chief Simulator',
      image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?w=600&auto=format&fit=crop&q=80',
      genre: 'Tactical Sim',
      rating: 4.6,
      price: 19.99,
    },
    {
      id: 'trails-sky',
      title: 'Trails in the Sky 2nd',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80',
      genre: 'JRPG',
      rating: 4.9,
      price: 39.99,
    },
    {
      id: 'dimraeth',
      title: 'Dimraeth',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
      genre: 'Dark Fantasy',
      rating: 4.7,
      price: 29.99,
    },
    {
      id: 'halloween',
      title: 'Halloween: The Game',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
      genre: 'Survival Horror',
      rating: 4.6,
      price: 19.99,
    },
    {
      id: 'rocket-league',
      title: 'Rocket League Rift',
      image: rocketImg,
      genre: 'Vehicular Sports',
      rating: 4.8,
      price: 0,
    },
    {
      id: 'endless-legend',
      title: 'Endless Legend II',
      image: chronoImg,
      genre: '4X Strategy',
      rating: 4.8,
      badge: 'POPULAR',
      price: 49.99,
    },
    {
      id: 'far-cry-6',
      title: 'Far Cry 6 Protocol',
      image: fpsImg,
      genre: 'Open World FPS',
      rating: 4.7,
      price: 59.99,
    },
    {
      id: 'euro-truck',
      title: 'Euro Truck Simulator 2',
      image: racingImg,
      genre: 'Simulation',
      rating: 4.9,
      price: 19.99,
    },
    {
      id: 'watch-dogs',
      title: 'Watch Dogs 2 Cyber',
      image: mobaImg,
      genre: 'Action Adventure',
      rating: 4.6,
      price: 29.99,
    },
    {
      id: 'chrono-tactics',
      title: 'Chrono Strike',
      image: chronoImg,
      genre: 'Tactical RPG',
      rating: 4.9,
      price: 34.99,
    },
  ];

  return (
    <section className="max-w-[1240px] mx-auto mt-10 px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h2
          className={`font-heading text-xl sm:text-2xl font-bold tracking-tight ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}
        >
          Trending Games
        </h2>
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            theme === 'light' ? 'text-[#00a3ff]' : 'text-[#3ee6d0]'
          }`}
        >
          Updated Hourly
        </span>
      </div>

      {/* Grid of Vertical Poster Covers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
        {trendingList.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectGame?.(item.title)}
            className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl ${
              theme === 'light'
                ? 'bg-white border border-[#e2e8f0] shadow-sm hover:shadow-slate-300'
                : 'bg-[#0f131a] border border-[#1e2330]/70 shadow-md hover:shadow-[0_12px_24px_rgba(0,0,0,0.8)]'
            }`}
          >
            {/* Poster Aspect Ratio Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#141923]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80';
                }}
              />

              {/* Gradient Vignette over Poster for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Optional Top Badge */}
              {item.badge && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-[#00c853] text-black text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Quick Hover Action Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <button
                  aria-label="View Game"
                  className="w-8 h-8 rounded-full bg-[#00a3ff] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Card Title and Genre Info */}
              <div className="absolute bottom-2 left-2 right-2 z-10">
                <div className="text-white text-[12px] font-bold leading-tight truncate group-hover:text-[#00a3ff] transition-colors">
                  {item.title}
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-400 mt-0.5">
                  <span className="truncate">{item.genre}</span>
                  <span className="flex items-center gap-0.5 text-amber-400 font-semibold">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
