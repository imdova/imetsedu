"use server";

interface Result<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const sendDataToMailerLite = async (
  data: Record<string, unknown>,
  mailerID: string,
  groups?: string[],
): Promise<Result> => {
  console.log("🚀 ~ mailerID:", mailerID);
  const { email, ...fields } = data;
  console.log("🚀 ~ email:", email);

  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          fields,
          groups: groups || [],
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
