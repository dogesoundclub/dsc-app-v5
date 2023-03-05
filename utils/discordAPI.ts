export const baseUrl = "https://discord.com/api";
// export const hostUrl = "https://bot.ayias.io";
export const hostUrl = "https://dogesound.club";
export const localUrl = "http://localhost:3000";
export const identify = `https://discord.com/api/oauth2/authorize?client_id=1072739158570844180&redirect_uri=${
  process.env.NODE_ENV === "production" ? hostUrl : localUrl
}&response_type=code&scope=identify%20guilds%20applications.commands.permissions.update`;

// export const invite = `https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=${
//   process.env.NODE_ENV === "production" ? hostUrl : localUrl
// }/dashboard&permissions=296150887647&client_id=1057714376129400872&guild_id=`;
export const cdnUrl = "https://cdn.discordapp.com";
