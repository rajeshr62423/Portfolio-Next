"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const ResumeModalContext = createContext<() => void>(() => {});

export function useResumeModal() {
  return useContext(ResumeModalContext);
}

export function ResumeModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  return (
    <ResumeModalContext.Provider value={openModal}>
      {children}
      <div
        className="modal"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
      >
        <button
          type="button"
          className="modal-backdrop"
          aria-label="Close resume preview"
          onClick={closeModal}
        />
        <div className="modal-panel">
          <div className="modal-bar">
            <span className="modal-file mono">Rajesh_R_Resume.pdf</span>
            <div className="modal-tools">
              <a className="btn btn-ghost btn-sm" href="/resume.pdf" download>
                Download
              </a>
              <button
                type="button"
                className="modal-x"
                onClick={closeModal}
                aria-label="Close resume preview"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="modal-doc">
            {open && <iframe src="/resume.pdf" title="Rajesh R — Resume" />}
          </div>
        </div>
      </div>
    </ResumeModalContext.Provider>
  );
}

export function ResumeTrigger({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const open = useResumeModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </button>
  );
}
