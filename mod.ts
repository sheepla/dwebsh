import { decode, encode, readAll, writeAll } from "./deps.ts";

export async function post(code: string, base64images: string[]) {
  const baseUrl = "https://websh.jiro4989.com/api";
  const postUrl = baseUrl + "/shellgei";
  const data = { code: code, images: base64images };
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

export async function encodeImage(path: string) {
  const file = await Deno.open(path, { read: true });
  const content = await readAll(file);
  const base64image = encode(content);
  Deno.close(file.rid);
  return base64image;
}
