import React from 'react';
import { ChevronRight, Heart, Users } from 'lucide-react';

interface CommunityLinksProps {
  onOpenCommunityModal?: (type: string) => void;
}

export const CommunityLinks: React.FC<CommunityLinksProps> = ({ onOpenCommunityModal }) => {
  const links = [
    {
      id: 'discord',
      title: 'Join us on',
      brand: 'Discord',
      gradient: 'from-[#4252e6] to-[#5865f2]',
      glow: 'rgba(88, 101, 242, 0.55)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      id: 'reddit',
      title: 'Follow us on',
      brand: 'Reddit',
      gradient: 'from-[#ff4500] to-[#ff6a00]',
      glow: 'rgba(255, 69, 0, 0.55)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
    },
    {
      id: 'nebulo',
      title: 'Member of',
      brand: 'Nebulo',
      gradient: 'from-[#7335ec] to-[#9146ff]',
      glow: 'rgba(145, 70, 255, 0.55)',
      icon: <Users className="w-5 h-5 text-white" />,
    },
    {
      id: 'donations',
      title: 'Support us with',
      brand: 'Donations',
      gradient: 'from-[#16a34a] to-[#22c55e]',
      glow: 'rgba(34, 197, 94, 0.55)',
      icon: (
        <span className="w-5 h-5 flex items-center justify-center font-bold text-base bg-white/20 rounded-full">
          $
        </span>
      ),
    },
  ];

  return (
    <section className="max-w-[1240px] mx-auto mt-6 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onOpenCommunityModal?.(link.brand)}
            className={`relative group flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r ${link.gradient} text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98 cursor-pointer overflow-hidden border border-white/10`}
            style={{
              boxShadow: `0 8px 24px -4px ${link.glow}`,
            }}
          >
            {/* Ambient shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="flex-shrink-0 text-white drop-shadow-sm">
                {link.icon}
              </div>
              <div className="text-left leading-tight">
                <div className="text-[11px] font-normal text-white/80 tracking-wide">
                  {link.title}
                </div>
                <div className="text-sm font-bold text-white tracking-wide">
                  {link.brand}
                </div>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-200 relative z-10" />
          </button>
        ))}
      </div>
    </section>
  );
};
