import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { easeOut } from '../../utils/button';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, labelledBy, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: easeOut }}>
        
          <div className="absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.25, ease: easeOut }}>
          
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-card transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            
              <XIcon className="h-5 w-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}