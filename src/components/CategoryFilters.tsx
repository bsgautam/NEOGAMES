import React from 'react';
import { GameGenre } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface CategoryFiltersProps {
  selectedGenre: GameGenre;
  onSelectGenre: (genre: GameGenre) => void;
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
  totalGames: number;
}

const GENRES: GameGenre[] = [
  'All Games',
  'Battle Royale',
  'MOBA',
  'FPS',
  'RPG',
  'Racing',
  'Strategy',
  'Sports',
];

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  selectedGenre,
  onSelectGenre,
  selectedPlatform,
  onSelectPlatform,
  sortBy,
  onSelectSort,
  totalGames,
}) => {
  return (
    <div className="space-y-4">
      {/* Category Pills (matching user's provided UI) */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none custom-scrollbar">
        {GENRES.map((genre) => {
          const isActive = selectedGenre === genre;
          return (
            <button
              key={genre}
              onClick={() => onSelectGenre(genre)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[13.5px] font-medium transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#121324] text-white border-[#121324] dark:bg-[#f2f1f7] dark:text-[#0a0a14] dark:border-[#f2f1f7] shadow-sm font-semibold'
                  : 'bg-white dark:bg-[#14141f] text-[#5d6074] dark:text-[#8b8a9c] border-[#e2e5f0] dark:border-[#232333] hover:border-[#9d6bff] hover:text-[#121324] dark:hover:text-[#f2f1f7]'
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>

      {/* Secondary Sub-filters: Platform and Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#5d6074] dark:text-[#8b8a9c] pt-1">
        <div className="flex items-center gap-2">
          <span>Platform:</span>
          <select
            value={selectedPlatform}
            onChange={(e) => onSelectPlatform(e.target.value)}
            className="bg-white dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] px-3 py-1.5 rounded-lg outline-none focus:border-[#9d6bff] cursor-pointer"
          >
            <option value="all">All Platforms</option>
            <option value="PC">PC (Steam/Epic)</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono tabular-nums text-[#7b3ff2] dark:text-[#9d6bff] font-semibold">
            {totalGames} games available
          </span>
          <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
              className="bg-white dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] px-3 py-1.5 rounded-lg outline-none focus:border-[#9d6bff] cursor-pointer"
            >
              <option value="featured">Featured / Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
