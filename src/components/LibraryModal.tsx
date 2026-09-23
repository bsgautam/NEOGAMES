import React, { useState } from 'react';
import { LibraryItem } from '../types';
import { Play, Copy, Check, HardDrive, Gamepad2, ShieldCheck, X } from 'lucide-react';

interface LibraryModalProps {
  library: LibraryItem[];
  isOpen: boolean;
  onClose: () => void;
  onBrowseStore: () => void;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({
  library,
  isOpen,
  onClose,
  onBrowseStore,
}) => {
  const [launchingId, setLaunchingId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLaunch = (id: string) => {
    setLaunchingId(id);
    setTimeout(() => {
      setLaunchingId(null);
    }, 2500);
  };

  const handleCopy = (keyStr: string) => {
    navigator.clipboard.writeText(keyStr);
    setCopiedKey(keyStr);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close library"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e2e5f0] dark:border-[#232333] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-[#7b3ff2] dark:text-[#9d6bff]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#121324] dark:text-[#f2f1f7]">
                My Game Library
              </h2>
            </div>
            <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c] mt-0.5">
              {library.length} {library.length === 1 ? 'title' : 'titles'} installed & activated on your account
            </p>
          </div>

          <button
            onClick={onBrowseStore}
            className="text-xs font-semibold text-[#0fbda7] dark:text-[#3ee6d0] hover:underline"
          >
            Browse Store +
          </button>
        </div>

        {/* Game List */}
        {library.length === 0 ? (
          <div className="py-14 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] flex items-center justify-center text-2xl mx-auto">
              🎮
            </div>
            <h3 className="font-heading text-base font-semibold text-[#121324] dark:text-[#f2f1f7]">
              No Games in Vault Yet
            </h3>
            <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c] max-w-sm mx-auto">
              Pick up games from our store, grab daily free titles, or redeem external keys to start your collection.
            </p>
            <button
              onClick={onBrowseStore}
              className="mt-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] text-white transition-colors"
            >
              Explore Store Titles
            </button>
          </div>
        ) : (
          <div className="space-y-3.5 max-h-[460px] overflow-y-auto custom-scrollbar pr-1">
            {library.map((item) => {
              const isLaunching = launchingId === item.id;
              const isCopied = copiedKey === item.activationKey;

              return (
                <div
                  key={item.id}
                  className="bg-[#f8f9fd] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2]/50 dark:hover:border-[#9d6bff]/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={item.game.image}
                      alt={item.game.title}
                      referrerPolicy="no-referrer"
                      className="w-18 h-14 sm:w-22 sm:h-16 rounded-xl object-cover bg-black shrink-0"
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading text-sm font-semibold text-[#121324] dark:text-[#f2f1f7] truncate">
                          {item.game.title}
                        </h4>
                        <span className="text-[10px] bg-[#e2e5f0] dark:bg-[#232333] text-[#7b3ff2] dark:text-[#3ee6d0] px-1.5 py-0.2 rounded font-mono font-medium">
                          {item.platform}
                        </span>
                      </div>

                      <div className="text-xs text-[#5d6074] dark:text-[#8b8a9c] mt-0.5">
                        {item.edition} · {item.playtimeHours} hrs played
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-mono text-[#5d6074] dark:text-[#8b8a9c] select-all">
                          Key: {item.activationKey}
                        </span>
                        <button
                          onClick={() => handleCopy(item.activationKey)}
                          className="text-[10px] text-[#7b3ff2] dark:text-[#9d6bff] hover:underline flex items-center gap-0.5"
                        >
                          {isCopied ? <Check className="w-3 h-3 text-[#0fa360] dark:text-[#3ee68a]" /> : <Copy className="w-3 h-3" />}
                          {isCopied ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Play / Launch Action */}
                  <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-0 border-[#e2e5f0] dark:border-[#232333]">
                    <button
                      onClick={() => handleLaunch(item.id)}
                      disabled={isLaunching}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto shadow-md ${
                        isLaunching
                          ? 'bg-[#0fa360] dark:bg-[#3ee68a] text-white dark:text-[#04140c]'
                          : 'bg-[#7b3ff2] hover:bg-[#9d6bff] text-white shadow-[#7b3ff2]/25 active:scale-95'
                      }`}
                    >
                      {isLaunching ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                          Launching Client...
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" /> Play Now
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
