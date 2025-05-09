
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const authOptions = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  
  pages: {
    signIn: "/auth/signIn"
  },

  callbacks : {
    async session({session, token, user}) {
        session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase()
        session.user.uid = token.sub
        return session
    }
  }
});

export { authOptions as GET, authOptions as POST };