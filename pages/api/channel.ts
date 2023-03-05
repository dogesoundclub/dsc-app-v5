import { baseUrl } from "@utils/discordAPI";
import type { NextApiRequest, NextApiResponse } from "next";

const botToken =
  "Bot MTA1NzcxNDM3NjEyOTQwMDg3Mg.GoImx3.VyBlpvz5jb3pfKEBJ5_9g5jsWIIZaeY1NbYNu4";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const reqData = JSON.parse(req.body);
    console.log(reqData);

    const channel = await fetch(
      `${baseUrl}/guilds/${reqData.guildId}/channels`,
      {
        headers: { authorization: botToken },
      }
    ).then((res) => res.json());
    console.log(channel);

    res.status(200).json({ status: 200, channel: channel });
  } catch (err) {
    console.log(err);
    res.status(205).json({ status: 205 });
  }
}
