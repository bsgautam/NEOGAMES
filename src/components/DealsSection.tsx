import React, { useState } from 'react';
import { Deal } from '../types';
import { Plus, Check, Sparkles, Tag, ArrowRight } from 'lucide-react';

interface DealsSectionProps {
  deals: Deal[];
  onAddDealToCart: (deal: Deal) => void;
  onViewAllDeals?: () => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  deals,
  onAddDealToCart,
  onViewAllDeals,
}) => {
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const handleAdd = (deal: Deal) => {
    onAddDealToCart(deal);
    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1200);
  };

  return (
    <section className="max-w-[1320px] mx-auto mt-14 px-6">
      {/* Section Head */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0fa360] dark:text-[#3ee68a] uppercase tracking-wider mb-1">
            <Tag className="w-3.5 h-3.5" />
            Limited-Time Offers
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#121324] dark:text-[#f2f1f7]">
            Today's Deals
          </h2>
          <p className="text-sm text-[#5d6074] dark:text-[#8b8a9c] mt-1">
            Limited-time discounts on legendary editions and battle bundles, refreshed daily
          </p>
        </div>

        {onViewAllDeals && (
          <button
            onClick={onViewAllDeals}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#7b3ff2] dark:text-[#9d6bff] hover:text-[#121324] dark:hover:text-white transition-colors"
          >
            View all deals <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Deals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {deals.map((deal) => {
          const isRecentlyAdded = addedDealId === deal.id;

          return (
            <div
              key={deal.id}
              className="bg-white dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2]/40 dark:hover:border-[#9d6bff]/40 rounded-2xl p-3.5 flex items-center gap-4 transition-all duration-200 hover:bg-[#f8f9fd] dark:hover:bg-[#1a1a2a] group shadow-sm hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="w-24 h-18 rounded-xl overflow-hidden bg-[#edf0f7] dark:bg-[#0f0f1c] shrink-0 relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1 left-1 bg-[#0fa360] dark:bg-[#3ee68a] text-white dark:text-[#04140c] text-[10px] font-bold px-1.5 py-0.2 rounded">
                  {deal.discountPercentage}
                </div>
              </div>

              {/* Deal Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-heading text-[15px] font-semibold text-[#121324] dark:text-[#f2f1f7] group-hover:text-[#7b3ff2] dark:group-hover:text-white truncate">
                  {deal.title}
                </h4>
                <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c] truncate mt-0.5">
                  {deal.genre}
                </p>
                <p className="text-[11px] text-[#5d6074]/80 dark:text-[#8b8a9c]/80 line-clamp-1 mt-1">
                  {deal.description}
                </p>
              </div>

              {/* Price & Add Action */}
              <div className="text-right shrink-0 flex items-center gap-3">
                <div>
                  <span className="text-xs text-[#5d6074] dark:text-[#8b8a9c] line-through block font-mono tabular-nums">
                    ${deal.oldPrice.toFixed(2)}
                  </span>
                  <span className="font-heading text-base font-bold text-[#121324] dark:text-[#f2f1f7] font-mono tabular-nums">
                    ${deal.price.toFixed(2)}
                  </span>
                </div>

                {/* Deal Add Button (+) */}
                <button
                  onClick={() => handleAdd(deal)}
                  aria-label={`Add ${deal.title} to cart`}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all transform active:scale-95 shadow-md ${
                    isRecentlyAdded
                      ? 'bg-[#0fa360] dark:bg-[#3ee68a] text-white dark:text-[#04140c]'
                      : 'bg-[#7b3ff2] hover:bg-[#9d6bff] shadow-[#7b3ff2]/20'
                  }`}
                >
                  {isRecentlyAdded ? (
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
