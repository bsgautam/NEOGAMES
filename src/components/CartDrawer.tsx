import React, { useState } from 'react';
import { CartItem, UserProfile } from '../types';
import { X, Trash2, Plus, Minus, ShieldCheck, Coins, ArrowRight, Tag, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: (appliedDiscount: number, coinsUsed: number) => void;
  user: UserProfile | null;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  user,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [useCoins, setUseCoins] = useState(false);

  if (!isOpen) return null;

  // Calculate Subtotal
  const subtotal = items.reduce((acc, item) => {
    const edition = item.game.editions.find((e) => e.name === item.editionName);
    const price = edition ? edition.price : item.game.price;
    return acc + price * item.quantity;
  }, 0);

  // Promo code calculation
  const promoDiscount = promoApplied ? subtotal * 0.2 : 0; // 20% off with RIFT20

  // Coins discount (max 500 coins = $5.00 discount or subtotal)
  const maxCoinsApplicable = user ? Math.min(user.coinsBalance, 500) : 0;
  const coinsDiscount = useCoins ? Math.min(maxCoinsApplicable / 100, subtotal - promoDiscount) : 0;

  const finalTotal = Math.max(0, subtotal - promoDiscount - coinsDiscount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'NEO20' || code === 'RIFT20') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "NEO20" for 20% off!');
    }
  };

  const handleCheckoutClick = () => {
    onCheckout(promoDiscount + coinsDiscount, useCoins ? maxCoinsApplicable : 0);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-md bg-white dark:bg-[#0f0f1c] border-l border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#e2e5f0] dark:border-[#232333] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg text-[#121324] dark:text-[#f2f1f7]">
              Shopping Cart
            </span>
            <span className="bg-[#7b3ff2]/15 dark:bg-[#7b3ff2]/20 border border-[#7b3ff2]/30 dark:border-[#7b3ff2]/40 text-[#7b3ff2] dark:text-[#9d6bff] text-xs font-mono font-bold px-2 py-0.5 rounded-full">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body: Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] flex items-center justify-center text-[#5d6074] dark:text-[#8b8a9c]">
                🛒
              </div>
              <h3 className="font-heading text-base font-semibold text-[#121324] dark:text-[#f2f1f7]">
                Your cart is empty
              </h3>
              <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c] max-w-xs">
                Explore the tournament titles, season passes, and daily deals to add games to your vault.
              </p>
            </div>
          ) : (
            items.map((item, index) => {
              const edition = item.game.editions.find((e) => e.name === item.editionName);
              const price = edition ? edition.price : item.game.price;

              return (
                <div
                  key={`${item.game.id}-${item.editionName}-${index}`}
                  className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-xl p-3.5 flex gap-3 group relative shadow-sm"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.game.image}
                    alt={item.game.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-16 rounded-lg object-cover bg-black shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] truncate">
                          {item.game.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          aria-label="Remove item"
                          className="text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#ff4f79] p-0.5 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#7b3ff2] dark:text-[#9d6bff] font-medium truncate">
                        {item.editionName} · {item.platform}
                      </div>
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5 bg-white dark:bg-[#0a0a14] border border-[#e2e5f0] dark:border-[#232333] rounded-md px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-medium px-1 text-[#121324] dark:text-[#f2f1f7]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-heading text-xs font-bold text-[#121324] dark:text-[#f2f1f7] font-mono tabular-nums">
                        {price === 0 ? 'Free' : `$${(price * item.quantity).toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Promo Code Input */}
          {items.length > 0 && (
            <div className="pt-3 border-t border-[#e2e5f0] dark:border-[#232333] space-y-2">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter coupon (e.g. NEO20)"
                    disabled={promoApplied}
                    className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3 py-2 text-xs text-[#121324] dark:text-[#f2f1f7] placeholder-[#5d6074] dark:placeholder-[#8b8a9c] outline-none focus:border-[#7b3ff2]"
                  />
                  {promoApplied && (
                    <Check className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-[#0fa360] dark:text-[#3ee68a]" />
                  )}
                </div>
                <button
                  type="submit"
                  disabled={promoApplied || !promoCode.trim()}
                  className="px-3 py-2 rounded-lg bg-[#121324] dark:bg-[#232333] hover:bg-[#7b3ff2] disabled:opacity-50 text-xs font-semibold text-white transition-colors"
                >
                  {promoApplied ? 'Applied' : 'Apply'}
                </button>
              </form>
              {promoError && (
                <div className="text-[11px] text-[#ff4f79]">{promoError}</div>
              )}
              {promoApplied && (
                <div className="text-[11px] text-[#0fa360] dark:text-[#3ee68a] flex items-center gap-1">
                  <Check className="w-3 h-3" /> 20% promotional discount activated!
                </div>
              )}

              {/* Loyalty NeoCoins Toggle */}
              {user && user.coinsBalance >= 100 && (
                <div className="bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#0fbda7] dark:text-[#3ee6d0]" />
                    <div>
                      <div className="text-xs font-semibold text-[#121324] dark:text-[#f2f1f7]">
                        Use NeoCoins Balance
                      </div>
                      <div className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c]">
                        Available: {user.coinsBalance} pts (Save up to ${(maxCoinsApplicable / 100).toFixed(2)})
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={useCoins}
                    onChange={(e) => setUseCoins(e.target.checked)}
                    className="w-4 h-4 accent-[#7b3ff2] cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer: Invoice Breakdown & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#e2e5f0] dark:border-[#232333] bg-[#f8f9fd] dark:bg-[#0a0a14] space-y-3.5">
            <div className="space-y-1.5 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
              <div className="flex justify-between">
                <span>Products Price</span>
                <span className="font-mono tabular-nums text-[#121324] dark:text-[#f2f1f7]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {promoDiscount > 0 && (
                <div className="flex justify-between text-[#0fa360] dark:text-[#3ee68a]">
                  <span>Promo Discount (20%)</span>
                  <span className="font-mono tabular-nums">-${promoDiscount.toFixed(2)}</span>
                </div>
              )}

              {coinsDiscount > 0 && (
                <div className="flex justify-between text-[#0fbda7] dark:text-[#3ee6d0]">
                  <span>NeoCoins Redemption</span>
                  <span className="font-mono tabular-nums">-${coinsDiscount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping & Instant Key Delivery</span>
                <span className="text-[#0fa360] dark:text-[#3ee68a] font-semibold">FREE ($0.00)</span>
              </div>

              <div className="pt-2 border-t border-[#e2e5f0] dark:border-[#232333] flex justify-between text-sm font-semibold text-[#121324] dark:text-[#f2f1f7]">
                <span>Total Due</span>
                <span className="font-heading text-lg font-bold text-[#0fbda7] dark:text-[#3ee6d0] font-mono tabular-nums">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-[#7b3ff2] hover:bg-[#9d6bff] text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#7b3ff2]/30 active:scale-95"
            >
              <span>Generate Invoice & Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5d6074]/80 dark:text-[#8b8a9c]/80 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0fa360] dark:text-[#3ee68a]" />
              Guaranteed instant digital keys · 256-bit encrypted checkout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
