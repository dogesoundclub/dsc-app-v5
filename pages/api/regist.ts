import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MissionAPI>
) {
  const reqData = JSON.parse(req.body);
  console.log(reqData);

  const fetchURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/regist"
      : "http://3.39.249.163:4000/regist";

  try {
    if (reqData.name) {
      await fetch(fetchURL, {
        method: "POST",
        body: JSON.stringify(reqData),
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ ...reqData }),
      });
      const data: Mission = await fetch(
        fetchURL + `?guildId=${reqData.guild}`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      // console.log(data);
      res.status(200).json({ status: 200, data: data });
    } else {
      const data: Mission = await fetch(
        fetchURL + `?guildId=${reqData.guildId}`,
        {
          method: "GET",
        }
      ).then((res) => res.json());

      res.status(200).json({ status: 200, data: data });
    }
  } catch (err) {
    // console.log(err);
    res.status(205).json({ status: 205 });
  }
}
