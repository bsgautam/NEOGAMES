import React, { useState, useEffect } from 'react';
import { Tournament } from '../types';
import { Trophy, Clock, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FeaturedTournamentsProps {
  tournaments: Tournament[];
  onJoinTournament: (tournament: Tournament) => void;
  joinedTournamentIds: string[];
}

export const FeaturedTournaments: React.FC<FeaturedTournamentsProps> = ({
  tournaments,
  onJoinTournament,
  joinedTournamentIds,
}) => {
  // Live countdown timer state (ticks every second)
  const [secondsLeft, setSecondsLeft] = useState<{ [id: string]: number }>({});

  useEffect(() => {
    // Initialize countdowns
    const initial: { [id: string]: number } = {};
    tournaments.forEach((t) => {
      initial[t.id] = t.countdownSeconds;
    });
    setSecondsLeft(initial);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((id) => {
          if (next[id] > 0) {
            next[id] -= 1;
          }
        });
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tournaments]);

  const formatCountdown = (totalSecs: number) => {
    if (!totalSecs || totalSecs <= 0) return '00:00:00';
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hours.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="max-w-[1320px] mx-auto mt-14 px-6">
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9d6bff] uppercase tracking-wider mb-1">
            <Trophy className="w-3.5 h-3.5 text-[#3ee6d0]" />
            Live Competitive Arena
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#121324] dark:text-[#f2f1f7]">
            Featured Tournaments
          </h2>
          <p className="text-[#5d6074] dark:text-[#8b8a9c] text-sm mt-1">
            Participate in ranked contests, secure cash prizes and tournament points
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">
            Open to all ranks · Cross-platform
          </span>
        </div>
      </div>

      {/* Tournaments Grid (4 Columns matching Erik Padamans design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tournaments.map((tourney) => {
          const isJoined = joinedTournamentIds.includes(tourney.id);
          const currentSecs = secondsLeft[tourney.id] ?? tourney.countdownSeconds;
          const slotsPercentage = (tourney.slotsCurrent / tourney.slotsMax) * 100;

          return (
            <div
              key={tourney.id}
              className="bg-white dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2]/40 dark:hover:border-[#9d6bff]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-[#7b3ff2]/10 group relative overflow-hidden"
            >
              {/* Top Countdown Pill & Game Kicker */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f0f2f8] dark:bg-[#0a0a14] border border-[#e2e5f0] dark:border-[#232333] text-xs font-mono text-[#0fbda7] dark:text-[#3ee6d0] tabular-nums font-semibold">
                  <Clock className="w-3 h-3 text-[#0fbda7] dark:text-[#3ee6d0] animate-pulse" />
                  {formatCountdown(currentSecs)}
                </div>

                <span className="text-[11px] font-semibold text-[#7b3ff2] dark:text-[#9d6bff] truncate">
                  {tourney.game.split(' ')[0]}
                </span>
              </div>

              {/* Tournament Title & Date */}
              <div className="mb-3">
                <div className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] font-medium uppercase tracking-wider mb-1">
                  {tourney.dateStr}
                </div>
                <h3 className="font-heading font-semibold text-base text-[#121324] dark:text-[#f2f1f7] group-hover:text-[#7b3ff2] dark:group-hover:text-white line-clamp-1">
                  {tourney.title}
                </h3>
                <p className="text-[12.5px] text-[#5d6074] dark:text-[#8b8a9c] mt-1 line-clamp-2 leading-snug">
                  {tourney.description}
                </p>
              </div>

              {/* Prize Pool Tag & Action Button */}
              <div className="space-y-3 pt-3 border-t border-[#e2e5f0] dark:border-[#232333]">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c]">Prize Pool</div>
                  <div className="font-heading text-sm font-bold text-[#0fbda7] dark:text-[#3ee6d0] bg-[#0fbda7]/10 dark:bg-[#3ee6d0]/10 px-2 py-0.5 rounded border border-[#0fbda7]/20 dark:border-[#3ee6d0]/20 font-mono">
                    {tourney.prizePool.split('Cash')[0] || tourney.prizePool}
                  </div>
                </div>

                {/* Join Tournament CTA Button */}
                <button
                  onClick={() => onJoinTournament(tourney)}
                  disabled={isJoined}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    isJoined
                      ? 'bg-[#0fa360]/20 border border-[#0fa360]/40 text-[#0fa360] dark:bg-[#3ee68a]/20 dark:border-[#3ee68a]/40 dark:text-[#3ee68a] cursor-default'
                      : 'bg-[#7b3ff2] hover:bg-[#9d6bff] text-white shadow-md shadow-[#7b3ff2]/20 active:scale-95'
                  }`}
                >
                  {isJoined ? (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" /> Squad Registered
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5" /> Join Tournament
                    </>
                  )}
                </button>

                {/* Participant Avatars & Slot Indicator */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center -space-x-1.5">
                    {tourney.participantAvatars.slice(0, 3).map((av, idx) => (
                      <img
                        key={idx}
                        src={av}
                        alt="Squad captain"
                        referrerPolicy="no-referrer"
                        className="w-5 h-5 rounded-full object-cover border border-[#14141f]"
                      />
                    ))}
                    <div className="w-5 h-5 rounded-full bg-[#232333] text-[9px] text-white flex items-center justify-center font-bold border border-[#14141f]">
                      +{tourney.slotsCurrent}
                    </div>
                  </div>

                  <div className="text-[11px] text-[#8b8a9c] font-mono tabular-nums">
                    <span className="text-[#f2f1f7] font-semibold">{tourney.slotsCurrent}</span>
                    /{tourney.slotsMax} Slots
                  </div>
                </div>

                {/* Slot Fill Progress Bar */}
                <div className="w-full bg-[#0a0a14] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#7b3ff2] to-[#3ee6d0] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(slotsPercentage, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
