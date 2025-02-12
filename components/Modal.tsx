"use client";
import { X } from "lucide-react";
import { useEffect } from "react";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center">
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 h-screen w-screen bg-black/30 backdrop-blur-sm duration-700`}
      ></div>
      <div className="z-30 m-8 flex max-h-full w-full max-w-[600px] flex-col items-center justify-between gap-2 rounded-3xl bg-white p-5">
        <div className="relative h-0 w-full">
          <button
            onClick={onClose}
            className="absolute -right-5 -top-4 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
