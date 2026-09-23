import React, { useState } from 'react';
import { X, Mail, MessageSquare, Send, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [category, setCategory] = useState('tournament');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      onSubmit(category);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#0f0f1c] border border-[#e2e5f0] dark:border-[#232333] text-[#121324] dark:text-[#f2f1f7] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2e5f0] dark:border-[#232333] text-[#5d6074] dark:text-[#8b8a9c] hover:text-[#121324] dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7b3ff2] dark:text-[#9d6bff] uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" /> Direct Support
          </div>
          <h3 className="font-heading text-xl font-bold text-[#121324] dark:text-[#f2f1f7]">
            Get in touch with NEOGAMES
          </h3>
          <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">
            Need help with game keys, tournament brackets, or creator partnerships? Our esports support team answers within 2 hours.
          </p>
        </div>

        {sent ? (
          <div className="py-10 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#0fa360]/20 dark:bg-[#3ee68a]/20 border border-[#0fa360] dark:border-[#3ee68a] text-[#0fa360] dark:text-[#3ee68a] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="font-heading text-base font-semibold text-[#121324] dark:text-[#f2f1f7]">
              Message Received!
            </h4>
            <p className="text-xs text-[#5d6074] dark:text-[#8b8a9c]">
              We have dispatched a response ticket to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">Inquiry Type</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3 py-2 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
              >
                <option value="tournament">Competitive Tournament Partnership</option>
                <option value="key-issue">Order Activation Key Assistance</option>
                <option value="creator">Esports Creator & Discord Community</option>
                <option value="developer">Game Developer Publishing & API</option>
              </select>
            </div>

            <div>
              <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">Your Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="player@neogames.gg"
                className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg px-3 py-2 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2]"
              />
            </div>

            <div>
              <label className="text-[#5d6074] dark:text-[#8b8a9c] block mb-1 font-semibold">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your inquiry or squad details..."
                className="w-full bg-[#f0f2f8] dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] rounded-lg p-3 text-[#121324] dark:text-[#f2f1f7] outline-none focus:border-[#7b3ff2] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-[#7b3ff2] hover:bg-[#9d6bff] text-white flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-[#7b3ff2]/25 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" /> Dispatch Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
