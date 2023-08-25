/** @format */

import { serve } from "aleph/server";
import react from "aleph/plugins/react";
import denoDeploy from "aleph/plugins/deploy";
import modules from "./routes/_export.ts";
import accessLog from "./services/accessLog.ts";

serve({
  plugins: [
    denoDeploy({ modules }),
    react({ ssr: true }),
    accessLog,
  ],
});
