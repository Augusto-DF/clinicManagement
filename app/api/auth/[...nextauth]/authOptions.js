import CredentialsProvider from "next-auth/providers/credentials";
import { API_HOST, DEFAULT_HEADERS } from "../../api-configs";

export const authOptions = {
  secret: "test",
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      async authorize({ username, password }) {
        const res = await fetch(`${API_HOST}/api/login`, {
          method: "POST",
          DEFAULT_HEADERS,
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        return user.message ?? user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.id) return user;
      return false;
    },
    async jwt({ token, user }) {
      if (user?.id) {
        token = { ...token, user };
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};
