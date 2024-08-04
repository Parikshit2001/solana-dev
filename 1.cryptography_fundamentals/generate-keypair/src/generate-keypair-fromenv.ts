import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// Did not work
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

console.log(process.env.SECRET_KEY);
