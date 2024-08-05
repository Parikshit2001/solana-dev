"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const keypair = web3_js_1.Keypair.generate();
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
const secretKeyBase64 = Buffer.from(keypair.secretKey).toString("base64");
console.log("Key: ", secretKeyBase64);
console.log(`✅ Finished!`);
