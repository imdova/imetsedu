import { loginUser } from "../actions/user/user.actions";

export async function authenticateUser(
  credentials: Record<"email" | "password", string> | undefined,
) {
  if (!credentials?.email || !credentials?.password) return null;
  const { email, password } = credentials;
  try {
    const user = await loginUser(email, password);
    if (!user) return null;
    return {
      id: user._id,
      name: user.name,
      image: user.image ?? null,
      email: user.email,
    };
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
}
