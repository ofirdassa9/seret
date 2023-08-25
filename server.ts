/** @format */

import { serve, Middleware } from "aleph/server";
import react from "aleph/plugins/react";
import denoDeploy from "aleph/plugins/deploy";
import modules from "./routes/_export.ts";

const logger: Middleware = {
  name: "logger",
  fetch: async (req, ctx) => {
    await ctx.next();
    console.log(req.url);
  },
};

serve({
  plugins: [
    denoDeploy({ modules }),
    react({ ssr: true }),
  ],
  middlewares: [logger],
});
