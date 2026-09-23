import React from 'react';
import { Check, Info, AlertCircle } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info';
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  toasts,
  onDismiss,
}) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => onDismiss(toast.id)}
          className="pointer-events-auto bg-white dark:bg-[#14141f] border border-[#e2e5f0] dark:border-[#232333] hover:border-[#7b3ff2] rounded-xl p-3.5 shadow-2xl flex items-start gap-3 animate-in slide-in-from-bottom-3 duration-200 cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full bg-[#0fa360]/20 dark:bg-[#3ee68a]/20 text-[#0fa360] dark:text-[#3ee68a] flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-xs font-semibold text-[#121324] dark:text-[#f2f1f7]">
              {toast.title}
            </h4>
            {toast.description && (
              <p className="text-[11px] text-[#5d6074] dark:text-[#8b8a9c] mt-0.5">
                {toast.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
