import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Trophy, Gamepad2, User, Menu, X, Shield, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';
import { NeoGameLogo } from './NeoGameLogo';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  activeTab: 'store' | 'tournaments' | 'deals' | 'library';
  onSelectTab: (tab: 'store' | 'tournaments' | 'deals' | 'library') => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onOpenContact: () => void;
  user: UserProfile | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  activeTab,
  onSelectTab,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAuth,
  onOpenContact,
  user,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a14]/90 backdrop-blur-md border-b border-[#232333] transition-colors duration-250">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Zone */}
        <div 
          onClick={() => onSelectTab('store')}
          className="cursor-pointer group select-none"
        >
          <NeoGameLogo size="md" />
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium">
          <button
            onClick={() => onSelectTab('store')}
            className={`transition-colors relative py-1 ${
              activeTab === 'store'
                ? 'text-[#f2f1f7] font-semibold'
                : 'text-[#8b8a9c] hover:text-[#f2f1f7]'
            }`}
          >
            Store
            {activeTab === 'store' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9d6bff] rounded-full" />
            )}
          </button>

          <button
            onClick={() => onSelectTab('tournaments')}
            className={`transition-colors relative py-1 flex items-center gap-1.5 ${
              activeTab === 'tournaments'
                ? 'text-[#f2f1f7] font-semibold'
                : 'text-[#8b8a9c] hover:text-[#f2f1f7]'
            }`}
          >
            <Trophy className="w-4 h-4 text-[#7b3ff2]" />
            Tournaments
            {activeTab === 'tournaments' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9d6bff] rounded-full" />
            )}
          </button>

          <button
            onClick={() => onSelectTab('deals')}
            className={`transition-colors relative py-1 flex items-center gap-1.5 ${
              activeTab === 'deals'
                ? 'text-[#f2f1f7] font-semibold'
                : 'text-[#8b8a9c] hover:text-[#f2f1f7]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#3ee6d0]" />
            Deals
            {activeTab === 'deals' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9d6bff] rounded-full" />
            )}
          </button>

          <button
            onClick={() => onSelectTab('library')}
            className={`transition-colors relative py-1 flex items-center gap-1.5 ${
              activeTab === 'library'
                ? 'text-[#f2f1f7] font-semibold'
                : 'text-[#8b8a9c] hover:text-[#f2f1f7]'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-[#2e6bff]" />
            My Library
            {activeTab === 'library' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9d6bff] rounded-full" />
            )}
          </button>
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search catalog"
            className="w-9 h-9 rounded-full border border-[#232333] bg-[#14141f] flex items-center justify-center text-[#8b8a9c] hover:text-white hover:border-[#9d6bff] transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="w-9 h-9 rounded-full border border-[#232333] bg-[#14141f] flex items-center justify-center text-[#8b8a9c] hover:text-[#ff4f79] hover:border-[#ff4f79]/50 transition-colors relative"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff4f79] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="w-9 h-9 rounded-full border border-[#232333] bg-[#14141f] flex items-center justify-center text-[#8b8a9c] hover:text-white hover:border-[#9d6bff] transition-colors relative"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#7b3ff2] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile / Auth */}
          {user ? (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#232333] bg-[#14141f] hover:border-[#9d6bff]/60 transition-colors"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-full object-cover border border-[#7b3ff2]"
              />
              <span className="hidden sm:inline text-xs font-semibold text-[#f2f1f7]">
                {user.name.split(' ')[0]}
              </span>
              <span className="hidden md:inline text-[11px] text-[#3ee6d0] font-mono tabular-nums font-bold">
                {user.coinsBalance} pts
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="text-xs font-semibold px-3.5 py-2 rounded-full border border-[#232333] text-[#f2f1f7] hover:border-[#9d6bff] transition-colors"
            >
              Sign In
            </button>
          )}

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-xs bg-[#f2f1f7] text-[#0a0a14] hover:bg-[#9d6bff] hover:text-white transition-all transform active:scale-95 shadow-sm"
          >
            Get in touch
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-9 h-9 rounded-lg border border-[#232333] bg-[#14141f] flex items-center justify-center text-[#8b8a9c] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#232333] bg-[#0f0f1c] px-6 py-4 flex flex-col gap-3">
          <button
            onClick={() => {
              onSelectTab('store');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 font-medium text-sm flex items-center justify-between ${
              activeTab === 'store' ? 'text-[#7b3ff2]' : 'text-[#8b8a9c]'
            }`}
          >
            Store
          </button>
          <button
            onClick={() => {
              onSelectTab('tournaments');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 font-medium text-sm flex items-center justify-between ${
              activeTab === 'tournaments' ? 'text-[#7b3ff2]' : 'text-[#8b8a9c]'
            }`}
          >
            Tournaments
          </button>
          <button
            onClick={() => {
              onSelectTab('deals');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 font-medium text-sm flex items-center justify-between ${
              activeTab === 'deals' ? 'text-[#7b3ff2]' : 'text-[#8b8a9c]'
            }`}
          >
            Daily Deals
          </button>
          <button
            onClick={() => {
              onSelectTab('library');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 font-medium text-sm flex items-center justify-between ${
              activeTab === 'library' ? 'text-[#7b3ff2]' : 'text-[#8b8a9c]'
            }`}
          >
            My Game Library
          </button>
          <div className="pt-2 border-t border-[#232333] flex justify-between items-center">
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-[#7b3ff2] font-semibold py-1"
            >
              Get Support & Contact
            </button>
            {user && (
              <span className="text-xs text-[#3ee6d0] font-mono">
                {user.coinsBalance} Coins
              </span>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

