"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { StickyCTAType } from "@/types";
import { sendDataToMailerLite } from "@/lib/mailer_lite";
import { sendDataToGoogleSheet } from "@/lib/google.sheet";
import { useNotification } from "./NotificationComponent";
import { useRouter } from "next/navigation";
import DynamicForm from "./form/dynamicForm";

const StickyCTA: React.FC<Block<StickyCTAType> & { forms: FormType[] }> = ({
  data,
  forms,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { showNotification } = useNotification();

  const open = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const formData = forms.find((x) => x.id === data?.formId);
  if (!data) return null;

  const onSubmit = async (data: Record<string, unknown>) => {
    setLoading(true);
    setError("");
    try {
      let response;
      if (formData?.submitTo === "mailerLite" && formData.mailerID) {
        response = await sendDataToMailerLite(
          data,
          formData.mailerID,
          formData.groups,
        );
      } else {
        response = await sendDataToGoogleSheet(
          data,
          formData?.googleSheetAPI || "",
        );
      }
      if (response.success) {
        showNotification(
          "success",
          formData?.successMessage || "your data submitted successfully ",
        );
        // onClose();
        if (formData?.afterSubmitRedirect) {
          router.push(formData?.afterSubmitRedirect);
        }
      } else {
        setError("Failed to send your data ");
        showNotification("error", "sending data");
      }
    } catch {
      setError("Failed to send your data ");
      showNotification("error", "sending data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div
        className={`bg-background/80 sticky bottom-0 left-0 right-0 z-30 flex justify-end border-t p-4 backdrop-blur-sm transition-transform md:justify-end`}
      >
        {data.buttonUrl ? (
          <Link
            href={data.buttonUrl}
            className="hover:bg-gold/90 focus:ring-gold/50 flex items-center justify-center rounded-3xl bg-gold px-6 py-3 font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {data.buttonText} <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <button
            onClick={open}
            className="hover:bg-gold/90 focus:ring-gold/50 flex items-center justify-center rounded-3xl bg-gold px-6 py-3 font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {data.buttonText} <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
      {formData && (
        <Modal onClose={onClose} isOpen={isOpen}>
          <DynamicForm
            fields={formData.fields}
            onClose={onClose}
            onSubmit={onSubmit}
            loading={loading}
            error={error}
            title={formData.title}
            description={formData.content}
            submitButtonText={formData.submitButtonText}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default StickyCTA;
