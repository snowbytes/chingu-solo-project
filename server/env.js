// loads .env.local in dotenv before anything else
// can't use import "dotenv/config" because we want .env.local
// refer to https://github.com/motdotla/dotenv/issues/133#issuecomment-255298822
import { config } from "dotenv";
config({ path: ".env.local" });
