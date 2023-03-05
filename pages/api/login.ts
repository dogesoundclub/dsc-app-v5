import { baseUrl, hostUrl, localUrl } from "@utils/discordAPI";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { client_secret, botToken } from "private/env";

function makeConfig(authorization_token: string) {
  const data = {
    headers: {
      authorization: `Bearer ${authorization_token}`,
    },
  };
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResAPI>
) {
  // console.log(req.body);
  console.log(process.env.NODE_ENV);
  const reqData = JSON.parse(req.body);
  console.log(reqData);
  const params = new URLSearchParams();
  params.append("client_id", "1057714376129400872");
  params.append("client_secret", client_secret);
  params.append("grant_type", "authorization_code");
  params.append(
    "redirect_uri",
    process.env.NODE_ENV === "production"
      ? `${hostUrl}${reqData.path === "/" ? "" : reqData.path}`
      : `${localUrl}${reqData.path === "/" ? "" : reqData.path}`
  );
  params.append("scope", "identify");
  params.append("code", reqData.code);
  try {
    const token: Token = await fetch(`${baseUrl}/oauth2/token`, {
      method: "POST",
      body: params,
    }).then((res) => res.json());
    console.log(token);
    const user: UserInfo = await fetch(
      `${baseUrl}/users/@me`,
      makeConfig(token.access_token)
    ).then((res) => res.json());

    const guild = await fetch(
      `${baseUrl}/users/@me/guilds`,
      makeConfig(token.access_token)
    ).then((res) => res.json());

    const botGuild = await fetch(`${baseUrl}/users/@me/guilds`, {
      headers: { authorization: botToken },
    }).then((res) => res.json());

    res
      .status(200)
      .json({ status: 200, user: user, guild: guild, botGuild: botGuild });
  } catch (err) {
    console.log(err);
    res.status(205).json({ status: 205 });
  }
}
