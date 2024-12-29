/**
 * Aqui se define la configuracion de las variables de entorno
 */

import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  MONGO_URL: get("MONGO_URL").required().asString(),
  MONGO_DB: get("MONGO_DB").required().asString(),
  JWT_SEED: get("JWT_SEED").required().asString(),
};
