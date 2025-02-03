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
    <div className="fixed inset-0 top-0 z-30 flex h-screen w-screen items-center justify-center">
      <div
        onClick={onClose}
        aria-hidden="true"
        className={` fixed inset-0  h-screen w-screen bg-black/30 backdrop-blur-sm duration-700 `}
      ></div>
      <div className="m-8 flex max-h-full flex-col items-center w-full max-w-[600px] z-30 justify-between gap-2 rounded-3xl bg-white p-5">
        <div className="relative w-full h-0">
          <button onClick={onClose} className="p-2 absolute -top-4 -right-5 translate-x-1/2 -translate-y-1/2 bg-white rounded-full ">
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
