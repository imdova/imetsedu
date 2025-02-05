"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { ChevronRight } from "lucide-react";
import ApplicationForm from "./ApplicationForm";
import { ctaButtonInHeader } from "@/constants/header";
import Link from "next/link";
import { formSectionData } from "@/constants/form";

const ApplySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <React.Fragment>
      <div
        className={`bg-background/80 sticky bottom-0 left-0 right-0 z-30 flex justify-end border-t p-4 backdrop-blur-sm transition-transform md:justify-end`}
      >
        {formSectionData.ctaButtonUrl ? (
          <Link
            href={formSectionData.ctaButtonUrl}
            className="hover:bg-gold/90 focus:ring-gold/50 flex items-center justify-center rounded-3xl bg-gold px-6 py-3 font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {formSectionData.ctaButton}{" "}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <button
            onClick={open}
            className="hover:bg-gold/90 focus:ring-gold/50 flex items-center justify-center rounded-3xl bg-gold px-6 py-3 font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {formSectionData.ctaButton}{" "}
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
      <Modal onClose={close} isOpen={isOpen}>
        <ApplicationForm close={close} />
      </Modal>
    </React.Fragment>
  );
};

export default ApplySection;

export const CallToAction: React.FC = () => {
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
