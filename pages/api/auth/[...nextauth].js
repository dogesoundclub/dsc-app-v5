import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const _clientId = process.env.DISCORD_CLIENT_ID
const _clientSecret = process.env.DISCORD_CLIENT_SECRET

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: _clientId,
      clientSecret: _clientSecret
    })
  ],
  // secret: 'IamVeryHandsome' 
}
export default NextAuth(authOptions)
