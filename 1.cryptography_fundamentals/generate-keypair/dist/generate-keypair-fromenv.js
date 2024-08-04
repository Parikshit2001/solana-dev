"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const helpers_1 = require("@solana-developers/helpers");
const keypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
console.log(process.env.SECRET_KEY);
