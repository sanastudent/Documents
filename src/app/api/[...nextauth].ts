
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { JWT } from "next-auth";

// // Define custom types for token and session
// interface MyToken extends JWT {
//   id: string;
//   email: string;
//   name: string;
// }

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = {
//           id: "1", // Simulated user ID
//           email: credentials?.email ?? "", // Fallback if no email is provided
//           name: "Test User",
//         };

//         // Replace this with actual authentication logic
//         if (
//           user.email === "user@example.com" &&
//           credentials?.password === "password123"
//         ) {
//           return user; // Return user if credentials are valid
//         } else {
//           return null; // Return null if invalid credentials
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin", // Custom sign-in page
//     error: "/auth/error", // Custom error page
//   },
//   session: {
//     strategy: "jwt", // Use JWT for session management
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         // Cast token to unknown first, then to MyToken
//         const myToken = token as unknown as MyToken;

//         myToken.email = user.email;
//         myToken.name = user.name;
//         myToken.id = user.id; // Ensure the id is added
//       }

//       return token;
//     },
//     async session({ session, token }) {
//       // Cast token to unknown first, then to MyToken
//       const myToken = token as unknown as MyToken;

//       session.user.email = myToken.email;
//       session.user.name = myToken.name;
//       session.user.id = myToken.id; // Add user id to session
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET, // Secret for JWT session
// });
