"use server";

import { groups, MAILER_LITE_TOKEN } from "@/constants/form";

interface Result<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const sendDataToMailerLite = async (
  data: Record<string, unknown>,
): Promise<Result> => {
  const { email, ...fields } = data;
  const token = process.env.MAILER_LITE_TOKEN || MAILER_LITE_TOKEN;

  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          fields,
          groups,
        }),
      },
    );

    if (response.ok) {
      return {
        success: true,
        message: "Data submitted successfully",
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to send data to MailerLite",
      };
    }
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "An error occurred",
    };
  }
};
