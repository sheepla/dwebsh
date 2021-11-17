import { version } from "./version.ts";
import { Command } from "./deps.ts";
import { post, saveImage } from "./mod.ts";

try {
  const { args } = await new Command()
    .name("websh-deno")
    .description("A command line websh client powered by Deno")
    .version(version)
    .arguments("<code:string>")
    .parse(Deno.args);

  const res = await post(args[0]);
  console.log(res["stdout"]);
  console.error(res["stderr"]);

  for (const img of res["images"]) {
    const base64image = img["image"];
    const path = await saveImage(base64image);
    console.log(`Image saved: ${path}`);
  }
} catch (error) {
  console.error(`${error}`);
}
