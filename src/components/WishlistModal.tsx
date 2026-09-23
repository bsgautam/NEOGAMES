import React from 'react';
import { Game } from '../types';
import { Heart, Trash2, ShoppingBag, X, ArrowRight } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Game[];
  onRemoveFromWishlist: (game: Game) => void;
  onAddToCart: (game: Game) => void;
  onSelectGame: (game: Game) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectGame,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close wishlist"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 border-b border-[#e2e5f0] dark:border-[#232333] pb-4">
          <Heart className="w-5 h-5 text-[#ff4f79] fill-[#ff4f79]" />
          <div>
            <h2 className="font-heading text-xl font-bold text-[#121324] dark:text-[#f2f1f7]">
              Saved Wishlist
            </h2>
            <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">
              {wishlist.length} {wishlist.length === 1 ? 'game' : 'games'} tracked for discounts
            </p>
          </div>
        </div>

        {/* Content */}
        {wishlist.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] flex items-center justify-center text-xl mx-auto text-[#5d6074] dark:text-[#8b8a9c]">
              ♡
            </div>
            <h3 className="font-heading text-base font-semibold text-[#121324] dark:text-[#f2f1f7]">
              Your wishlist is empty
            </h3>
            <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c] max-w-xs mx-auto">
              Tap the heart icon on any game card to track price drops and receive tournament notifications.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar pr-1">
            {wishlist.map((game) => (
              <div
                key={game.id}
                className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2]/50 dark:hover:border-[#9d6bff]/40 rounded-xl p-3 flex items-center justify-between gap-3 transition-all"
              >
                <div
                  onClick={() => {
                    onSelectGame(game);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer min-w-0"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-12 rounded-lg object-cover bg-black shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] truncate hover:text-[#7b3ff2] dark:hover:text-[#9d6bff]">
                      {game.title}
                    </h4>
                    <div className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c]">
                      {game.genre}
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

                  <button
                    onClick={() => {
                      onAddToCart(game);
                      onRemoveFromWishlist(game);
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] text-white flex items-center gap-1 transition-all"
                  >
                    <ShoppingBag className="w-3 h-3" /> Move to Cart
                  </button>

                  <button
                    onClick={() => onRemoveFromWishlist(game)}
                    aria-label="Remove from wishlist"
                    className="text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#ff4f79] p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
