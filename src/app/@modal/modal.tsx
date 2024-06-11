'use client';

import { type ElementRef, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const isDismissed = useRef(false); // Track if onDismiss has been called

  const onDismiss = useCallback(() => {
    if (!isDismissed.current) {
      isDismissed.current = true;
      router.back();
    }
  }, [router]);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      dialogRef.current.focus();
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismiss();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onDismiss]);

  return createPortal(
    <dialog ref={dialogRef} className="w-screen h-screen bg-black/90 m-0 text-white" onClose={onDismiss}>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
}
