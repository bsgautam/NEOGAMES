import React, { useState } from 'react';
import { UserProfile } from '../types';
import { X, ShieldCheck, Check, KeyRound } from 'lucide-react';
import { NeoGameIcon } from './NeoGameLogo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  currentUser,
  onLogout,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('erik.padamans@gmail.com');
  const [password, setPassword] = useState('••••••••••••');
  const [name, setName] = useState('Erik Padamans');

  if (!isOpen) return null;

  const handleSteamLogin = () => {
    onLoginSuccess({
      name: 'Erik Padamans',
      tag: '#STEAM994',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      coinsBalance: 1250,
      level: 42,
      rankTitle: 'Diamond Elite',
      isPlusMember: true,
    });
    onClose();
  };

  const handleGoogleLogin = () => {
    onLoginSuccess({
      name: 'Erik Padamans',
      tag: '#GOOG2026',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      coinsBalance: 1250,
      level: 42,
      rankTitle: 'Diamond Elite',
      isPlusMember: true,
    });
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess({
      name: name || 'ProGamer',
      tag: '#RV2026',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      coinsBalance: 1500,
      level: 45,
      rankTitle: 'Master Contender',
      isPlusMember: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-md bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close authentication"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {currentUser ? (
          /* Logged In Profile View */
          <div className="space-y-6 text-center">
            <div className="relative w-20 h-20 mx-auto">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-full h-full rounded-full object-cover border-2 border-[#7b3ff2] shadow-xl shadow-[#7b3ff2]/25"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#0fa360] dark:bg-[#3ee68a] border-2 border-white dark:border-[#0f0f1c]" />
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-[#121324] dark:text-[#f2f1f7]">
                {currentUser.name}
              </h3>
              <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">{currentUser.tag} · {currentUser.rankTitle}</p>
            </div>

            <div className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-2xl p-4 grid grid-cols-2 gap-3 text-left">
              <div>
                <span className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] block">Loyalty Points</span>
                <span className="font-heading text-base font-bold text-[#0fbda7] dark:text-[#3ee6d0] font-mono">
                  {currentUser.coinsBalance} pts
                </span>
              </div>
              <div>
                <span className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] block">NEOGAMES Plus</span>
                <span className="font-semibold text-xs text-[#7b3ff2] dark:text-[#9d6bff]">
                  Active Member
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-[#e2e5f0] dark:border-[#232333] text-[#ff4f79] hover:bg-[#ff4f79]/10 transition-colors"
            >
              Sign Out of Account
            </button>
          </div>
        ) : (
          /* Sign In / Register View */
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-1">
                <NeoGameIcon size="lg" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#121324] dark:text-[#f2f1f7]">
                Welcome to <span className="text-[#121324] dark:text-white">NEO</span><span className="text-[#7b3ff2] dark:text-[#9d6bff]">GAMES</span> Arena
              </h3>
              <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">
                Log in or register with your gaming identity
              </p>
            </div>

            {/* Quick 1-Click Gaming Providers */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleSteamLogin}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#171a21] hover:bg-[#2a475e] text-white border border-[#232333] flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span className="font-bold">♨</span> Continue with Steam
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#f0f2f8] dark:bg-[#14141f] hover:bg-[#e4e7f2] dark:hover:bg-[#1a1a2a] text-[#121324] dark:text-[#f2f1f7] border border-[#e2e5f0] dark:border-[#232333] flex items-center justify-center gap-2 transition-all"
              >
                <span className="text-red-500 font-bold">G</span> Sign in with Google
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-[#5d6074] dark:text-[#8b8a9c]">
              <div className="h-px bg-[#e2e5f0] dark:bg-[#232333] flex-1" />
              <span>OR</span>
              <div className="h-px bg-[#e2e5f0] dark:bg-[#232333] flex-1" />
            </div>

            {/* Email / Password Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {mode === 'register' && (
                <div>
                  <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">Gamer Handle / Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3 py-2 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
                  />
                </div>
              )}

              <div>
                <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3 py-2 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
                />
              </div>

              <div>
                <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3 py-2 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
                />
                <div className="text-[10px] text-[#5d6074] dark:text-[#8b8a9c] mt-1 space-y-0.5">
                  <div className="flex items-center gap-1 text-[#0fa360] dark:text-[#3ee68a]">
                    <Check className="w-3 h-3" /> Must be at least 8 characters
                  </div>
                  <div className="flex items-center gap-1 text-[#0fa360] dark:text-[#3ee68a]">
                    <Check className="w-3 h-3" /> Must contain special character
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] text-white transition-all shadow-lg shadow-[#7b3ff2]/25 mt-2 active:scale-95"
              >
                {mode === 'login' ? 'Sign in to Account' : 'Create Account'}
              </button>
            </form>

            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-xs text-[#7b3ff2] dark:text-[#9d6bff] hover:underline font-medium"
              >
                {mode === 'login'
                  ? "Don't have an account? Register"
                  : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
