"use client";
import { ctaButtonInHeader } from "@/constants/header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import ApplicationForm from "./ApplicationForm";

const CallToAction: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <div className="mb-4 bg-primary py-2">
      <div className="flex items-center justify-center text-center text-sm">
        {ctaButtonInHeader.buttonUrl ? (
          <Link
            href={ctaButtonInHeader.buttonUrl || "#"}
            className="hover:bg-gold/90 focus:ring-gold/50 flex items-center justify-center rounded-3xl bg-gold px-6 py-3 font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {ctaButtonInHeader.buttonText}{" "}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <button
            onClick={open}
            className="hover:bg-gold/90 focus:ring-gold/50 flex items-center justify-center rounded-3xl bg-gold px-6 py-3 font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {ctaButtonInHeader.buttonText}{" "}
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        )}
        <Modal onClose={close} isOpen={isOpen}>
          <ApplicationForm close={close} />
        </Modal>
      </div>
    </div>
  );
};

export default CallToAction;
