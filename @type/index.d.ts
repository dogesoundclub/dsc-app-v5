import { Dispatch, SetStateAction } from "react";

declare global {
  interface AppLayoutProps {
    children: React.ReactNode;
  }
  declare module "*.svg" {
    const svg: React.FC<React.SVGProps<SVGSVGElement>>;
    export default svg;
  }
  type Mission = {
    guild: string;
    list: MissionList[];
  };
  type MissionAPI = {
    status: number;
    data?: Mission;
  };

  type MissionList = {
    id: number;
    name: string;
    color: string;
    desc: string;
    type: number;
    ctx: string;
    reward: Reward;
    count: number;
    channel: string[];
    period: Period[];
  };
  type Reward = {
    name: string;
    amount: number;
  };
  type Period = {
    startAt: number;
    endAt: number;
  };

  type Channel = {
    id: string;
    name: string;
    type: number;
  };

  type mission = Mission[];

  type Log = {
    username: string;
    count: LogCount[];
  };
  type LogCount = {
    date: number;
    count: number;
  };

  type CallMission = {
    guildId: string;
    username: string;
    discriminator: string;
    content: string;
    createdTimestamp: number;
  };

  type Token = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
  };

  type UserInfo = {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    banner: string;
  };

  type GuildInfo = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: number;
    features: string[];
    permissions_new: string;
  };

  type UserStore = {
    login: boolean;
    userInfo: UserInfo | null;
    guildInfo: GuildInfo[] | null;
    botGuildInfo: GuildInfo[] | null;
    logout: () => void;
    setUserInfo: (code: string, path: string) => void;
  };

  type LoginResAPI = {
    status: number;
    user?: UserInfo | string;
    guild?: GuildInfo;
    botGuild?: Token;
  };
}
