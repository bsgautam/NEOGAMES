import React, { useState } from 'react';
import { Tournament, UserProfile } from '../types';
import { X, Trophy, ShieldCheck, Users, Check, Zap } from 'lucide-react';

interface TournamentJoinModalProps {
  tournament: Tournament | null;
  user: UserProfile | null;
  onClose: () => void;
  onConfirmJoin: (tournament: Tournament, squadName: string) => void;
}

export const TournamentJoinModal: React.FC<TournamentJoinModalProps> = ({
  tournament,
  user,
  onClose,
  onConfirmJoin,
}) => {
  const [squadName, setSquadName] = useState(
    tournament?.format === 'Solo' ? (user ? user.name : 'SoloContender') : 'Vanguard Elite'
  );
  const [captainDiscord, setCaptainDiscord] = useState(user ? `${user.name.toLowerCase()}#9940` : 'player#1001');
  const [platform, setPlatform] = useState('PC');
  const [agreedRules, setAgreedRules] = useState(true);

  if (!tournament) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!squadName.trim() || !agreedRules) return;
    onConfirmJoin(tournament, squadName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200 text-[#121324] dark:text-[#f2f1f7]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#7b3ff2]/15 dark:bg-[#7b3ff2]/20 border border-[#7b3ff2]/30 dark:border-[#7b3ff2]/40 flex items-center justify-center text-2xl">
            {tournament.gameIcon}
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#7b3ff2] dark:text-[#9d6bff] uppercase tracking-wider">
              {tournament.game} · {tournament.format}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#121324] dark:text-[#f2f1f7]">
              {tournament.title}
            </h3>
          </div>
        </div>

        {/* Tournament Highlights */}
        <div className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-[#5d6074] dark:text-[#8b8a9c] block">Date & Time</span>
            <span className="font-semibold text-[#121324] dark:text-[#f2f1f7]">{tournament.dateStr}</span>
          </div>
          <div>
            <span className="text-[#5d6074] dark:text-[#8b8a9c] block">Prize Pool</span>
            <span className="font-bold text-[#0fbda7] dark:text-[#3ee6d0] font-mono">{tournament.prizePool}</span>
          </div>
          <div>
            <span className="text-[#5d6074] dark:text-[#8b8a9c] block">Available Slots</span>
            <span className="font-semibold text-[#0fa360] dark:text-[#3ee68a] font-mono">
              {tournament.slotsMax - tournament.slotsCurrent} slots left
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">
              {tournament.format === 'Solo' ? 'Player Tag / Handle' : 'Squad / Team Name'}
            </label>
            <input
              type="text"
              required
              value={squadName}
              onChange={(e) => setSquadName(e.target.value)}
              className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3.5 py-2.5 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">
                Discord / Communication Tag
              </label>
              <input
                type="text"
                required
                value={captainDiscord}
                onChange={(e) => setCaptainDiscord(e.target.value)}
                className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3.5 py-2.5 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
              />
            </div>

            <div>
              <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3.5 py-2.5 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
              >
                <option value="PC">PC (Steam/Epic/Battle.net)</option>
                <option value="PS5">PlayStation 5</option>
                <option value="Xbox">Xbox Series X|S</option>
              </select>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#f0f2f8] dark:bg-[#0a0a14] border border-[#e2e5f0] dark:border-[#232333] flex items-center justify-between">
            <span className="text-[#5d6074] dark:text-[#8b8a9c]">Entry Fee</span>
            <div className="text-right">
              <span className="font-semibold text-[#0fa360] dark:text-[#3ee68a]">
                {user?.isPlusMember ? 'FREE (NEOGAMES Plus Benefit)' : tournament.entryFee}
              </span>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-[#5d6074] dark:text-[#8b8a9c] select-none">
            <input
              type="checkbox"
              checked={agreedRules}
              onChange={(e) => setAgreedRules(e.target.checked)}
              className="accent-[#7b3ff2]"
            />
            <span>I agree to tournament anti-cheat protocols and check-in times.</span>
          </label>

          <button
            type="submit"
            disabled={!agreedRules}
            className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] disabled:opacity-50 text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#7b3ff2]/25 active:scale-95"
          >
            <Zap className="w-4 h-4" /> Confirm Squad Registration
          </button>
        </form>
      </div>
    </div>
  );
};
