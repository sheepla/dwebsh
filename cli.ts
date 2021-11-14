// import {
//     commandWithVersion,
//     ValidationError,
// } from "./deps.ts"
import { post } from "./mod.ts";

if (Deno.args.length != 1) {
  console.error("Invalid number of arguments...");
  Deno.exit(1);
}

const res = await post(Deno.args[0]);
console.log(res["stdout"]);
console.error(res["stderr"]);
