import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-services";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    // getting  a guest from our supabase database , when a user signs in or returning false whwn we dont have such user in our data base then we create a new guest
    async signIn({ user, account, profile }) {
      try {
        // const existingAccount = await getGuest(user.email);

        // if (!existingAccount) {
        //   await createGuest({ email: user.email, fullName: user.name });
        // }

        return true;
      } catch {
        return false;
      }
    },
    // async session({ session, user }) {
    //   const guest = await getGuest(session.user.email);
    //   session.user.guestId = guest.id;
    //   return session;
    // },
  },

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
