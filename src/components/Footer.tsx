import React from 'react';
import { NeoGameLogo } from './NeoGameLogo';

interface FooterProps {
  onSelectTab: (tab: 'store' | 'tournaments' | 'deals' | 'library') => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenContact }) => {
  return (
    <footer className="max-w-[1320px] mx-auto mt-24 px-6 pt-12 pb-8 border-t border-[#e2e5f0] dark:border-[#232333] transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-4">
          <div 
            onClick={() => onSelectTab('store')}
            className="cursor-pointer inline-block group"
          >
            <NeoGameLogo size="lg" showTagline={true} />
          </div>
          <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c] leading-relaxed max-w-sm">
            The marketplace and competitive arena engineered for gamers. Instant game key delivery, sanctioned tournament brackets, automated payouts, and verified anti-cheat integrity.
          </p>
          <div className="text-[11px] text-[#5d6074]/70 dark:text-[#8b8a9c]/70 font-mono">
            Platform Protocol v2026 · Official Valve & Epic Games Ecosystem Partner
          </div>
        </div>

        {/* Column 1: Store */}
        <div className="space-y-3">
          <h5 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] uppercase tracking-wider">
            Store
          </h5>
          <ul className="space-y-2 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
            <li>
              <button onClick={() => onSelectTab('store')} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                New Releases
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('store')} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Best Sellers
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('deals')} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Daily Deals & Passes
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('library')} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                My Game Library
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Community */}
        <div className="space-y-3">
          <h5 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] uppercase tracking-wider">
            Community
          </h5>
          <ul className="space-y-2 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
            <li>
              <button onClick={() => onSelectTab('tournaments')} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Live Tournaments
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('tournaments')} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Cash Prize Pools
              </button>
            </li>
            <li>
              <a href="#discord" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Official Discord (85k)
              </a>
            </li>
            <li>
              <a href="#ranked" onClick={(e) => { e.preventDefault(); onSelectTab('tournaments'); }} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Leaderboards & Tiers
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="space-y-3">
          <h5 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7] uppercase tracking-wider">
            Support
          </h5>
          <ul className="space-y-2 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
            <li>
              <button onClick={onOpenContact} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Help Center
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Refund Policy (14-Day)
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="hover:text-[#7b3ff2] dark:hover:text-[#9d6bff] transition-colors">
                Contact & Tickets
              </button>
            </li>
            <li>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#0fa360] dark:text-[#3ee68a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0fa360] dark:bg-[#3ee68a]" />
                All Systems Operational
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 border-t border-[#e2e5f0] dark:border-[#232333] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
        <span>© 2026 NEOGAMES. All rights reserved. Competitive esports marketplace.</span>

        <div className="flex items-center gap-2">
          {['𝕏', '◉', '▶', '♨'].map((sym, idx) => (
            <button
              key={idx}
              onClick={onOpenContact}
              className="w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] bg-[#f0f2f8] dark:bg-[#14141f] hover:border-[#7b3ff2] hover:text-[#121324] dark:hover:text-[#f2f1f7] text-[#5d6074] dark:text-[#8b8a9c] flex items-center justify-center transition-colors text-xs font-bold"
            >
              {sym}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
