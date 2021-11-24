import { commandName, version } from "./version.ts";
import { Command } from "./deps.ts";
import { encodeImage, post, saveImage } from "./mod.ts";

try {
  const { options, args } = await new Command()
    .name(commandName)
    .description("A command line websh client powered by Deno")
    .version(version)
    .option("-i, --images <images:string>", "image files to upload", {
      collect: true,
    })
    .arguments("<code:string>")
    .parse(Deno.args);

  const code: string = args[0];
  const images: string = options["images"];

  const base64images: string[] = [];
  if (images !== undefined) {
    for (const path of images) {
      base64images.push(await encodeImage(path));
    }
  }
  const res = await post(code, base64images);

  const stdout = res["stdout"];
  if (stdout !== "") {
    console.log(stdout);
  }

  const stderr = res["stderr"];
  if (stderr !== "") {
    console.error(stderr);
  }

  for (const img of res["images"]) {
    const path = await saveImage(img["image"], img["format"]);
    console.log(`Image saved: ${path}`);
  }
} catch (error) {
  console.error(`${error}`);
}
