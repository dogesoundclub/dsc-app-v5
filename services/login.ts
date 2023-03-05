export async function discordLogin(code: string, path: string) {
  // const res = await fetch("/api/login", {
    const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ code: code, path: path }),
  }).then((res) => res.json());
  return res;
}
export async function getInfo(
  code: string,
  guild_id: string,
  permissions: string
) {
  // const res = await fetch("/api/dashboard", {
    const res = await fetch("/api/dashboard", {
    method: "POST",
    body: JSON.stringify({
      code: code,
      guild_id: guild_id,
      permissions: permissions,
    }),
  }).then((res) => res.json());
  console.log(res);
  return res;
}
