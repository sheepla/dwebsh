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
