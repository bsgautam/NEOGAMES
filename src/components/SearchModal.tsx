import React, { useState, useEffect, useRef } from 'react';
import { Game } from '../types';
import { Search, X, Star, ArrowRight, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: Game[];
  onSelectGame: (game: Game) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  games,
  onSelectGame,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredGames = query.trim()
    ? games.filter((g) => {
        const q = query.toLowerCase();
        return (
          g.title.toLowerCase().includes(q) ||
          g.genre.toLowerCase().includes(q) ||
          g.platforms.some((p) => p.toLowerCase().includes(q)) ||
          g.developer.toLowerCase().includes(q)
        );
      })
    : games.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-[#e2e5f0] dark:border-[#232333] pb-3">
          <Search className="w-5 h-5 text-[#5d6074] dark:text-[#8b8a9c] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, genres, platforms, or tournaments..."
            className="w-full bg-transparent text-base sm:text-lg text-[#121324] dark:text-[#f2f1f7] placeholder-[#5d6074] dark:placeholder-[#8b8a9c] outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-xs bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] px-2 py-0.5 rounded"
            >
              ESC
            </button>
          )}
        </div>

        {/* Quick Tag Suggestions */}
        {!query && (
          <div className="flex items-center gap-2 overflow-x-auto text-xs py-1">
            <span className="text-[#5d6074] dark:text-[#8b8a9c]">Popular:</span>
            {['Battle Royale', 'Free to Play', 'FPS', 'Racing', 'Tournaments'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2] text-[#121324] dark:text-[#f2f1f7] px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto custom-scrollbar space-y-2 pt-1">
          {filteredGames.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#5d6074] dark:text-[#8b8a9c]">
              No titles matching &quot;{query}&quot;. Try searching for &quot;Fortnite&quot;, &quot;Valorant&quot;, or &quot;MOBA&quot;.
            </div>
          ) : (
            filteredGames.map((game) => (
              <div
                key={game.id}
                onClick={() => {
                  onSelectGame(game);
                  onClose();
                }}
                className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2]/50 dark:hover:border-[#9d6bff]/50 rounded-xl p-2.5 flex items-center justify-between gap-3 cursor-pointer transition-all hover:bg-[#eef2fb] dark:hover:bg-[#1a1a2a] group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={game.image}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-10 rounded-lg object-cover bg-black shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] group-hover:text-[#7b3ff2] dark:group-hover:text-white truncate">
                      {game.title}
                    </h4>
                    <div className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c]">
                      {game.genre} · {game.platforms[0]}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="font-heading text-xs font-bold text-[#121324] dark:text-[#f2f1f7] font-mono tabular-nums">
                      {game.price === 0 ? 'Free' : `$${game.price.toFixed(2)}`}
                    </span>
                    {game.discountPercentage && (
                      <span className="block text-[10px] text-[#0fa360] dark:text-[#3ee68a] font-semibold">
                        {game.discountPercentage}
                      </span>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#5d6074] dark:text-[#8b8a9c] group-hover:text-[#7b3ff2] dark:group-hover:text-[#9d6bff] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
