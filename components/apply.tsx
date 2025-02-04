"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { ChevronRight } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

const ApplySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <React.Fragment>
      <div
        className={`sticky bottom-0 left-0 right-0 z-30 p-4 flex justify-end md:justify-end bg-background/80 backdrop-blur-sm border-t transition-transform  `}
      >
        <button
          onClick={open}
          className=" flex items-center justify-center py-3 px-6  text-white font-medium bg-gold rounded-3xl shadow-sm hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold/50 transition-all duration-150 ease-in-out"
        >
          Apply Now <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      <Modal onClose={close} isOpen={isOpen}>
        <ApplicationForm />
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
    <React.Fragment>
      <button
        onClick={open}
        className=" flex items-center justify-center py-3 px-6  text-white font-medium bg-gold rounded-3xl shadow-sm hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold/50 transition-all duration-150 ease-in-out"
      >
        Apply Now <ChevronRight className="ml-2 h-4 w-4" />
      </button>
      <Modal onClose={close} isOpen={isOpen}>
        <ApplicationForm />
      </Modal>
    </React.Fragment>
  );
};
