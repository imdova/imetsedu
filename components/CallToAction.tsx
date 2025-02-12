"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { HeaderType } from "@/types";
import DynamicForm from "./form/dynamicForm";
import { useNotification } from "./NotificationComponent";
import { sendDataToMailerLite } from "@/lib/mailer_lite";
import { sendDataToGoogleSheet } from "@/lib/google.sheet";
import { useRouter } from "next/navigation";

const CallToAction: React.FC<{ data: HeaderType; forms: FormType[] }> = ({
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
    <div className="mb-4 bg-primary py-2">
      <div className="flex items-center justify-center text-center text-sm">
        {data.buttonUrl ? (
          <Link
            href={data.buttonUrl || "#"}
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
      </div>
    </div>
  );
};

export default CallToAction;
