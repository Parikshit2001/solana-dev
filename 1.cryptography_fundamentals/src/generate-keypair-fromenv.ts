import "dotenv/config";
import {
  getKeypairFromEnvironment,
  getKeypairFromFile,
} from "@solana-developers/helpers";
import * as bs58 from "bs58";

// Did not work
// console.log(process.env.SECRET_KEY);
// const keypair = getKeypairFromEnvironment("SECRET_KEY");

// Working
getKeypairFromFile("~/.config/solana/id.json").then((keypair) => {
  console.log(keypair);
  console.log(bs58.default.encode(keypair.secretKey));
});

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

// console.log(keypair);