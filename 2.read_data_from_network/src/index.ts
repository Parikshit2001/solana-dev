import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("8NDP3HFeovTY7SHeBijHw2h8fDeYfz2Z3eKejckt7XcB");
connection.getBalance(address).then((balance) => {
  console.log(
    `The balance of the account at ${address} is ${
      balance / LAMPORTS_PER_SOL
    } SOL`
  );
  console.log(`✅ Finished!`);
});