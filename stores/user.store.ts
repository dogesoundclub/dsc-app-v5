import { discordLogin } from "@services/login";
import { cdnUrl } from "@utils/discordAPI";
import create from "zustand";

export const userStore = create<UserStore>((set, get) => ({
  login: false,
  userInfo: null,
  guildInfo: null,
  botGuildInfo: null,
  logout: () => set(() => ({ login: false, userInfo: null, guildInfo: null })),
  setUserInfo: async (code, path) => {
    try {
      const user = await discordLogin(code, path);
      console.log(user);
      set((state) => ({
        userInfo: {
          ...user.user,
          avatar: `${cdnUrl}/avatars/${user.user.id}/${user.user.avatar}.${
            user.user.avatar.includes("a_") ? "gif" : "png"
          }`,
        },
        guildInfo: user.guild,
        botGuildInfo: user.botGuild,
        login: true,
      }));
    } catch (err) {
      console.log(err);
    }
  },
}));
