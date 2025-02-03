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
        className={`sticky bottom-0 left-0 right-0 p-4 flex justify-center md:justify-end bg-background/80 backdrop-blur-sm border-t transition-transform  `}
      >
        <button
          onClick={open}
          className="w-full max-w-[250px] flex items-center justify-center py-4 px-4 text-sm font-medium text-white bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-150 ease-in-out"
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
