import React from 'react';
import { ArrowRight, Crown, Sparkles, Trophy } from 'lucide-react';

interface PromoBannersProps {
  onJoinChampionship: () => void;
  onExplorePlus: () => void;
}

export const PromoBanners: React.FC<PromoBannersProps> = ({
  onJoinChampionship,
  onExplorePlus,
}) => {
  return (
    <section className="max-w-[1320px] mx-auto mt-14 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Promo 1: Winter Championship */}
        <div className="lg:col-span-7 rounded-2xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-r from-[#1a0e33] via-[#120822] to-[#0a0a18] border border-[#e2e5f0]/30 dark:border-[#232333] flex flex-col justify-center min-h-[220px] group shadow-sm">
          {/* Ambient Purple Glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#7b3ff2]/30 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10 max-w-[440px]">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3ee6d0] tracking-wider uppercase mb-2.5">
              <Trophy className="w-3.5 h-3.5" />
              Winter Championship 2026
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f2f1f7] leading-tight mb-2.5">
              Enter the arena and win $50,000 in cash prizes
            </h3>
            <p className="text-sm text-[#8b8a9c] mb-6">
              Register your 4-player squad before regional slots lock. Free qualification rounds open to all skill tiers.
            </p>
            <button
              onClick={onJoinChampionship}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs bg-[#f2f1f7] text-[#0a0a14] hover:bg-[#9d6bff] hover:text-white transition-all transform active:scale-95 shadow-md shadow-white/5"
            >
              Join tournament <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Promo 2: Elite Membership */}
        <div className="lg:col-span-5 rounded-2xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-r from-[#04202b] via-[#06151f] to-[#0a0a18] border border-[#e2e5f0]/30 dark:border-[#232333] flex flex-col justify-center min-h-[220px] group shadow-sm">
          {/* Ambient Cyan Glow */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#3ee6d0]/25 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10 max-w-[360px]">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9d6bff] tracking-wider uppercase mb-2.5">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              Elite Membership
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#f2f1f7] leading-snug mb-2.5">
              Unlock every game with NEOGAMES Plus
            </h3>
            <p className="text-sm text-[#8b8a9c] mb-6">
              One subscription, unlimited library access, monthly 1,000 coin stipend, and zero fee tournament entry.
            </p>
            <button
              onClick={onExplorePlus}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs border border-white/20 bg-white/10 text-white hover:border-[#3ee6d0] hover:text-[#3ee6d0] transition-colors backdrop-blur-sm"
            >
              Explore plans & perks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
