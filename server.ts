/** @format */

import { serve } from "aleph/server";
import react from "aleph/plugins/react";
import denoDeploy from "aleph/plugins/deploy";
import modules from "./routes/_export.ts";
import * as log from "https://deno.land/std/log/mod.ts";

async function accessLogMiddleware(req, next: () => Promise<void>) {
  try {
    log.info(`${req.method} ${req.url}`);
  } catch (error) {
    log.error(error.message);
  }
  await next();
}

serve({
  plugins: [
    accessLogMiddleware,
    denoDeploy({ modules }),
    react({ ssr: true }),
  ],
});
