import { decode, writeAll } from "./deps.ts";

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

export async function saveImage(base64image: string, extension: string) {
  const image = decode(base64image);
  const path = await Deno.makeTempFile({
    prefix: "websh-deno_",
    suffix: extension === undefined ? "" : `.${extension}`,
  });
  const file = await Deno.open(path, { write: true });
  await writeAll(file, image);
  file.close();
  return path;
}
