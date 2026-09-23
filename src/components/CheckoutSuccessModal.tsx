import React, { useState } from 'react';
import { CartItem } from '../types';
import { Check, Copy, ShieldCheck, Download, Gamepad2, X, Sparkles } from 'lucide-react';

interface CheckoutSuccessModalProps {
  orderId: string;
  items: CartItem[];
  totalPaid: number;
  keysGenerated: { [gameId: string]: string };
  onClose: () => void;
  onGoToLibrary: () => void;
}

export const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({
  orderId,
  items,
  totalPaid,
  keysGenerated,
  onClose,
  onGoToLibrary,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (keyStr: string) => {
    navigator.clipboard.writeText(keyStr);
    setCopiedKey(keyStr);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close invoice"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success Icon & Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0fa360]/15 dark:bg-[#3ee68a]/15 border border-[#0fa360]/30 dark:border-[#3ee68a]/30 flex items-center justify-center text-[#0fa360] dark:text-[#3ee68a]">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#121324] dark:text-[#f2f1f7]">
            Order #{orderId} Confirmed!
          </h3>
          <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">
            Thank you for your purchase. Your digital activation keys are generated below and automatically added to your vault.
          </p>
        </div>

        {/* Generated Keys Section */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-[#7b3ff2] dark:text-[#9d6bff] uppercase tracking-wider flex items-center justify-between">
            <span>Instant Digital Keys</span>
            <span className="text-[11px] text-[#0fa360] dark:text-[#3ee68a]">Ready to Redeem</span>
          </div>

          <div className="space-y-2.5 max-h-60 overflow-y-auto custom-scrollbar pr-1">
            {items.map((item, idx) => {
              const keyStr = keysGenerated[item.game.id] || `NEO-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
              const isCopied = copiedKey === keyStr;

              return (
                <div
                  key={`${item.game.id}-${idx}`}
                  className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-xl p-3 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] truncate">
                      {item.game.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#0fbda7] dark:text-[#3ee6d0] tracking-wider mt-0.5 select-all">
                      {keyStr}
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(keyStr)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1 transition-all ${
                      isCopied
                        ? 'bg-[#0fa360]/20 dark:bg-[#3ee68a]/20 border-[#0fa360] dark:border-[#3ee68a] text-[#0fa360] dark:text-[#3ee68a]'
                        : 'border-[#e2e5f0] dark:border-[#232333] bg-white dark:bg-[#0a0a14] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white hover:border-[#7b3ff2]'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Invoice Summary Box */}
        <div className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-xl p-3.5 space-y-2 text-xs">
          <div className="flex justify-between text-[#5d6074] dark:text-[#8b8a9c]">
            <span>Total Paid</span>
            <span className="font-bold text-[#121324] dark:text-[#f2f1f7] font-mono">${totalPaid.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#5d6074] dark:text-[#8b8a9c]">
            <span>Payment Method</span>
            <span className="text-[#121324] dark:text-[#f2f1f7]">Instant Card / Steam Pay</span>
          </div>
          <div className="flex justify-between text-[#0fbda7] dark:text-[#3ee6d0]">
            <span>Bonus Loyalty Reward</span>
            <span className="font-mono font-semibold">+150 NeoCoins Credited</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl text-xs font-semibold border border-[#e2e5f0] dark:border-[#232333] bg-[#f0f2f8] dark:bg-[#14141f] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white hover:border-[#7b3ff2] transition-colors"
          >
            Continue Shopping
          </button>

          <button
            onClick={onGoToLibrary}
            className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] text-white flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-[#7b3ff2]/25"
          >
            <Gamepad2 className="w-4 h-4" /> Go to My Library
          </button>
        </div>
      </div>
    </div>
  );
};
