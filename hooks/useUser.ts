import { stores } from "@stores";

export const useUser = () => {
  const user = stores.user.userStore();

  return {
    login: user.login,
    userInfo: user.userInfo,
    logout: user.logout,
    setUserInfo: user.setUserInfo,
    guildInfo: user.guildInfo,
    botGuildInfo: user.botGuildInfo,
  };
};
