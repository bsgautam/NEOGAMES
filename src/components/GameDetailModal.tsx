import React, { useState } from 'react';
import { Game, GamePlatform } from '../types';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Cpu, HardDrive, Check, Play, Globe } from 'lucide-react';

interface GameDetailModalProps {
  game: Game | null;
  onClose: () => void;
  onAddToCart: (game: Game, editionName: string, platform: GamePlatform) => void;
  onBuyNow: (game: Game, editionName: string, platform: GamePlatform) => void;
  isWishlisted: boolean;
  onToggleWishlist: (game: Game) => void;
  onWatchTrailer: (game: Game) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onWatchTrailer,
}) => {
  const [selectedEditionIndex, setSelectedEditionIndex] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<GamePlatform>(game?.platforms[0] || 'PC');
  const [activeTab, setActiveTab] = useState<'about' | 'requirements'>('about');
  const [addedToast, setAddedToast] = useState(false);

  if (!game) return null;

  const selectedEdition = game.editions[selectedEditionIndex] || game.editions[0];

  const handleAddToCart = () => {
    onAddToCart(game, selectedEdition.name, selectedPlatform);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 1500);
  };

  const handleBuyNow = () => {
    onBuyNow(game, selectedEdition.name, selectedPlatform);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-[#0a0a14]/80 text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white hover:bg-white dark:hover:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={game.image}
            alt={game.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1c] via-[#0f0f1c]/60 to-transparent" />

          {/* Floating Actions on Media */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#7b3ff2]/30 border border-[#7b3ff2]/50 text-[#9d6bff] text-xs font-semibold uppercase tracking-wider mb-2">
                {game.genre}
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#f2f1f7]">
                {game.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onWatchTrailer(game)}
                className="px-4 py-2 rounded-full font-medium text-xs bg-[#14141f]/90 hover:bg-[#7b3ff2] text-white border border-[#232333] flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-md"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#3ee6d0]" />
                Trailer
              </button>

              <button
                onClick={() => onToggleWishlist(game)}
                className={`w-9 h-9 rounded-full border border-[#232333] flex items-center justify-center transition-colors ${
                  isWishlisted
                    ? 'bg-[#ff4f79] text-white border-[#ff4f79]'
                    : 'bg-[#14141f]/90 text-white/80 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Details & Specs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tab Navigation */}
            <div className="flex items-center gap-4 border-b border-[#e2e5f0] dark:border-[#232333] pb-2 text-sm font-semibold">
              <button
                onClick={() => setActiveTab('about')}
                className={`pb-2 relative transition-colors ${
                  activeTab === 'about'
                    ? 'text-[#7b3ff2] dark:text-[#f2f1f7]'
                    : 'text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-[#f2f1f7]'
                }`}
              >
                Overview & Features
                {activeTab === 'about' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7b3ff2] dark:bg-[#9d6bff]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-2 relative transition-colors ${
                  activeTab === 'requirements'
                    ? 'text-[#7b3ff2] dark:text-[#f2f1f7]'
                    : 'text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-[#f2f1f7]'
                }`}
              >
                System Requirements
                {activeTab === 'requirements' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7b3ff2] dark:bg-[#9d6bff]" />
                )}
              </button>
            </div>

            {activeTab === 'about' ? (
              <div className="space-y-5">
                <p className="text-sm text-[#5d6074] dark:text-[#8b8a9c] leading-relaxed">
                  {game.description}
                </p>

                <div>
                  <h4 className="font-heading text-xs font-bold text-[#121324] dark:text-[#f2f1f7] uppercase tracking-wider mb-2.5">
                    Key Features & Game Modes
                  </h4>
                  <ul className="space-y-2">
                    {game.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
                        <Check className="w-4 h-4 text-[#0fa360] dark:text-[#3ee68a] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-[#e2e5f0] dark:border-[#232333] text-xs">
                  <div>
                    <span className="text-[#5d6074] dark:text-[#8b8a9c] block">Developer:</span>
                    <span className="font-medium text-[#121324] dark:text-[#f2f1f7]">{game.developer}</span>
                  </div>
                  <div>
                    <span className="text-[#5d6074] dark:text-[#8b8a9c] block">Publisher:</span>
                    <span className="font-medium text-[#121324] dark:text-[#f2f1f7]">{game.publisher}</span>
                  </div>
                  <div>
                    <span className="text-[#5d6074] dark:text-[#8b8a9c] block">Release:</span>
                    <span className="font-medium text-[#121324] dark:text-[#f2f1f7]">{game.releaseDate}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-xl p-4 space-y-2.5">
                  <div className="font-heading font-semibold text-sm text-[#0fbda7] dark:text-[#3ee6d0] mb-2 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> PC Minimum & Recommended
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#5d6074] dark:text-[#8b8a9c]">
                    <div>
                      <span className="font-semibold text-[#121324] dark:text-[#f2f1f7] block">OS:</span>
                      {game.systemRequirements.os}
                    </div>
                    <div>
                      <span className="font-semibold text-[#121324] dark:text-[#f2f1f7] block">Processor:</span>
                      {game.systemRequirements.processor}
                    </div>
                    <div>
                      <span className="font-semibold text-[#121324] dark:text-[#f2f1f7] block">Memory:</span>
                      {game.systemRequirements.memory}
                    </div>
                    <div>
                      <span className="font-semibold text-[#121324] dark:text-[#f2f1f7] block">Graphics:</span>
                      {game.systemRequirements.graphics}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-[#7b3ff2] dark:text-[#9d6bff]" />
                    <span>Storage: {game.systemRequirements.storage}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#0fa360] dark:text-[#3ee68a] text-[11.5px] bg-[#0fa360]/10 dark:bg-[#3ee68a]/10 border border-[#0fa360]/20 dark:border-[#3ee68a]/20 p-2.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                  Verified NEOGAMES Instant Key Delivery & Safe Anti-Cheat Authenticated
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-2xl p-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Platform Selector */}
              <div className="mb-4">
                <label className="text-xs font-semibold text-[#5d6074] dark:text-[#8b8a9c] block mb-1.5">
                  Select Platform
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {game.platforms.map((plat) => (
                    <button
                      key={plat}
                      onClick={() => setSelectedPlatform(plat)}
                      className={`text-xs py-2 px-2.5 rounded-lg font-medium border text-center transition-all ${
                        selectedPlatform === plat
                          ? 'border-[#7b3ff2] dark:border-[#9d6bff] bg-[#7b3ff2]/15 text-[#7b3ff2] dark:text-[#f2f1f7]'
                          : 'border-[#e2e5f0] dark:border-[#232333] bg-white dark:bg-[#0a0a14] text-[#5d6074] dark:text-[#8b8a9c] hover:border-[#7b3ff2]/50'
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Edition Selector */}
              <div className="mb-4">
                <label className="text-xs font-semibold text-[#5d6074] dark:text-[#8b8a9c] block mb-1.5">
                  Choose Game Edition
                </label>
                <div className="space-y-2">
                  {game.editions.map((ed, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedEditionIndex(idx)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedEditionIndex === idx
                          ? 'border-[#7b3ff2] dark:border-[#9d6bff] bg-[#7b3ff2]/15'
                          : 'border-[#e2e5f0] dark:border-[#232333] bg-white dark:bg-[#0a0a14] hover:border-[#7b3ff2]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7]">
                          {ed.name}
                        </span>
                        <span className="font-heading text-xs font-bold text-[#0fbda7] dark:text-[#3ee6d0] font-mono tabular-nums">
                          {ed.price === 0 ? 'Free' : `$${ed.price.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] mt-1 space-y-0.5">
                        {ed.perks.map((p, pIdx) => (
                          <div key={pIdx}>• {p}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div className="pt-4 border-t border-[#e2e5f0] dark:border-[#232333] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] block">Total Amount</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-2xl font-bold text-[#121324] dark:text-[#f2f1f7] font-mono tabular-nums">
                      {selectedEdition.price === 0 ? 'Free' : `$${selectedEdition.price.toFixed(2)}`}
                    </span>
                    {game.oldPrice && selectedEditionIndex === 0 && (
                      <span className="text-xs text-[#5d6074] dark:text-[#8b8a9c] line-through font-mono tabular-nums">
                        ${game.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#0fa360] dark:text-[#3ee68a] font-medium block">Instant Key Delivery</span>
                  <span className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] font-mono">+100 NeoCoins</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={handleAddToCart}
                  className={`py-3 px-4 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                    addedToast
                      ? 'bg-[#0fa360] dark:bg-[#3ee68a] text-white dark:text-[#04140c] border-[#0fa360] dark:border-[#3ee68a]'
                      : 'border-[#e2e5f0] dark:border-[#232333] bg-white dark:bg-[#0a0a14] text-[#121324] dark:text-[#f2f1f7] hover:border-[#7b3ff2] hover:bg-[#f0f2f8] dark:hover:bg-[#1a1a2a]'
                  }`}
                >
                  {addedToast ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3 px-4 rounded-xl text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] text-white flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-[#7b3ff2]/25 active:scale-95"
                >
                  {selectedEdition.price === 0 ? 'Claim Game Free' : 'Instant Checkout'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
