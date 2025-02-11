/* eslint-disable @typescript-eslint/no-explicit-any */
import { Session } from "next-auth";

export const callbacks = {
  async jwt({
    token,
    user,
    trigger,
    session,
  }: {
    token: any;
    user?: any;
    trigger?: string;
    session?: any;
  }) {
    // If the user logs in, we add extra data to the token and set the expiration
    if (user) {
      token.id = user.id;
      token.email = user.email;
      token.name = user.name;
      token.image = user.image;
    }
    if (trigger === "update") {
      if (session?.name) token.name = session.name;
      if (session?.image) token.image = session.image;
      if (session?.email) token.email = session.email;
    }
    return token;
  },
  async session({ session, token }: { session: Session; token: any }) {
    if (session.user) {
      session.user.id = token.id as string | null;
      session.user.email = token.email as string | null;
      session.user.name = token.name as string | null;
      session.user.image = token.image as string | null;
    }
    return session;
  },
};
