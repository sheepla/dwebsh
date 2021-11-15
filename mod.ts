// async function ping() {
//   const pingUrl = baseUrl + "/ping";
//   const res = await fetch(pingUrl, { method: "GET" });
//   return res.json();
// }

export async function post(code: string) {
  const baseUrl = "https://websh.jiro4989.com/api";
  const postUrl = baseUrl + "/shellgei";
  const data = { code: code, images: [] };
  const res = await fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

// const res = await ping();
// console.log(res);
//const res = await post(Deno.args[0]);
//console.log(res["stdout"]);
//console.log(res["stderr"]);
