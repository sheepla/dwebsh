import {
  Command,
  ValidationError,
} from "https://deno.land/x/cliffy@v0.19.3/command/mod.ts";

import { version } from "./version.ts";
const commandWithVersion = new Command().version(version);

export { commandWithVersion, ValidationError };
