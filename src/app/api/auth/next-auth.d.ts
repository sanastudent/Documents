

// types/next-auth.d.ts
import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Add the id to the User object
    name: string;
    email: string;
  }

  interface Session {
    user: {
      id: string; // Add the id to the Session object
      name: string;
      email: string;
    } & DefaultSession["user"];
  }
}
