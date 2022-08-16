import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: "828776021444029",
      clientSecret: "process.env.FACEBOOK_CLIENT_SECRET"
    })
    // ...add more providers here
  ],
})