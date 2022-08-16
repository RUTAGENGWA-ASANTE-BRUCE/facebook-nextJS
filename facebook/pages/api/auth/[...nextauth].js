import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: "828776021444029",
      clientSecret: "a361995e2a3ceab60ef255f8ad0d2aea"
    })
    // ...add more providers here
  ],
})