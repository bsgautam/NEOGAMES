import React, { useState } from 'react';
import { Game } from '../types';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';

interface GameCardProps {
  game: Game;
  isWishlisted: boolean;
  isOwned: boolean;
  onToggleWishlist: (game: Game) => void;
  onSelectGame: (game: Game) => void;
  onAddToCart: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  isWishlisted,
  isOwned,
  onToggleWishlist,
  onSelectGame,
  onAddToCart,
}) => {
  const [imageError, setImageError] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(game);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(game);
  };

  return (
    <div
      onClick={() => onSelectGame(game)}
      className="group relative bg-white dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2]/40 dark:hover:border-[#9d6bff]/40 rounded-[18px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-[#7b3ff2]/10 dark:hover:shadow-[#7b3ff2]/15 flex flex-col"
    >
      {/* Cover Media */}
      <div className="h-[160px] sm:h-[175px] relative overflow-hidden bg-[#edf0f7] dark:bg-[#0f0f1c]">
        {!imageError ? (
          <img
            src={game.image}
            alt={game.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${game.fallbackGradient} flex items-center justify-center p-4 text-center`}>
            <span className="font-heading font-bold text-sm text-white/90">
              {game.title}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {game.discountPercentage && (
          <div className="absolute top-2.5 left-2.5 bg-[#0fa360] dark:bg-[#3ee68a] text-white dark:text-[#04140c] text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
            {game.discountPercentage === 'FREE' ? 'FREE' : `-${game.discountPercentage}`}
          </div>
        )}

        {/* Owned Status Tag */}
        {isOwned && (
          <div className="absolute bottom-2.5 left-2.5 bg-[#2e6bff]/90 text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-md shadow backdrop-blur-sm flex items-center gap-1">
            <Check className="w-3 h-3" /> In Library
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          onClick={handleHeartClick}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
            isWishlisted
              ? 'bg-[#ff4f79] text-white shadow-md shadow-[#ff4f79]/30 scale-105'
              : 'bg-[#0a0a14]/60 text-white/80 hover:text-white hover:bg-[#0a0a14]/90'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add Hover Overlay Button */}
        <div className="absolute inset-x-2 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1.5">
          <button
            onClick={handleQuickAdd}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-lg ${
              addedAnimation
                ? 'bg-[#0fa360] dark:bg-[#3ee68a] text-white dark:text-[#04140c]'
                : 'bg-[#7b3ff2] hover:bg-[#9d6bff] text-white'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11.5px] font-semibold text-[#7b3ff2] dark:text-[#9d6bff] tracking-wider uppercase mb-1">
            {game.genre}
          </div>
          <h3 className="font-heading text-[15px] font-semibold text-[#121324] dark:text-[#f2f1f7] group-hover:text-[#7b3ff2] dark:group-hover:text-white line-clamp-1 mb-2">
            {game.title}
          </h3>
        </div>

        {/* Meta / Rating & Price */}
        <div className="flex items-center justify-between pt-2 border-t border-[#e2e5f0] dark:border-[#232333]/60">
          <div className="flex items-center gap-1 text-[12.5px] text-[#5d6074] dark:text-[#8b8a9c]">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-medium text-[#121324] dark:text-[#f2f1f7]">{game.rating}</span>
            <span className="text-[11px] text-[#5d6074]/70 dark:text-[#8b8a9c]/70">({(game.reviewCount / 1000).toFixed(0)}k)</span>
          </div>

          <div className="flex items-center gap-2">
            {game.oldPrice && (
              <span className="text-[12px] text-[#5d6074] dark:text-[#8b8a9c] line-through font-mono tabular-nums">
                ${game.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="font-heading text-[15px] font-bold text-[#121324] dark:text-[#f2f1f7] font-mono tabular-nums">
              {game.price === 0 ? 'Free' : `$${game.price.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
