// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string | null;
    email: string | null;
    name: string | null;
    image: string | null;
  }

  interface Session {
    user: User;
    redirectUrl: string | null;
  }
}
