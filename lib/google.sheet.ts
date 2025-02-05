"use server";

import { API_GOOGLE_SHEET } from "@/constants/form";

interface Result<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
export const sendDataToGoogleSheet = async (
  data: Record<string, unknown>,
): Promise<Result> => {
  try {
    const now = new Date();
    const formattedTimestamp = `${now.getFullYear().toString().slice(-2)}:${String(
      now.getMonth() + 1,
    ).padStart(2, "0")}:${String(now.getDate()).padStart(2, "0")} , ${String(
      now.getHours(),
    ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const response = await fetch(API_GOOGLE_SHEET, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            ...data,
            time: formattedTimestamp, // Add formatted timestamp to the data
          },
        ],
      }),
    });
    if (response.ok) {
      return {
        success: true,
        message: "Data submitted Successful ",
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "An error occurred",
      };
    }
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "An error occurred",
    };
  }
};
