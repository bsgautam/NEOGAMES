import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

interface NewsletterProps {
  onSubscribe: (email: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    onSubscribe(email);
  };

  return (
    <section className="max-w-[1320px] mx-auto mt-20 px-6">
      <div className="relative rounded-3xl p-8 sm:p-14 text-center overflow-hidden bg-gradient-to-br from-[#160a2b] via-[#100820] to-[#0a0a18] border border-[#232333]">
        {/* Radial Purple Glow Behind */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,63,242,0.35),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7b3ff2]/20 border border-[#7b3ff2]/40 text-[#9d6bff] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#3ee6d0]" /> Stay Ahead of the Meta
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#f2f1f7]">
            Never miss a drop
          </h2>

          <p className="text-sm text-[#8b8a9c] max-w-md mx-auto">
            Get instant alerts on game releases, flash discounts, weekend free trials, and exclusive tournament entry codes.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0fa360]/20 border border-[#0fa360]/40 text-[#0fa360] dark:bg-[#3ee68a]/15 dark:border-[#3ee68a]/40 dark:text-[#3ee68a] text-xs font-semibold">
              <Check className="w-4 h-4 stroke-[2.5]" />
              Subscribed! +50 NeoCoins added to your profile.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full sm:w-72 bg-white/10 dark:bg-[#14141f] border border-white/20 dark:border-[#232333] focus:border-[#9d6bff] rounded-full px-5 py-3 text-xs text-white placeholder-white/60 dark:placeholder-[#8b8a9c] outline-none backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full font-semibold text-xs bg-[#f2f1f7] text-[#0a0a14] hover:bg-[#9d6bff] hover:text-white transition-all transform active:scale-95 shrink-0 shadow-md shadow-black/20"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
