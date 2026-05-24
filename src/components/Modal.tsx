import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 transition-opacity" />

        <div
          className="relative bg-white dark:bg-[#2d2d2d] rounded-lg max-w-2xl w-full shadow-2xl transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded-full transition z-10"
          >
            <X size={24} className="text-primary dark:text-[#CBA135]" />
          </button>

          {children}
        </div>
      </div>
    </div>
  );
}
