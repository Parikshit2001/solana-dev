"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
const address = new web3_js_1.PublicKey("8NDP3HFeovTY7SHeBijHw2h8fDeYfz2Z3eKejckt7XcB");
connection.getBalance(address).then((balance) => {
    console.log(`The balance of the account at ${address} is ${balance / web3_js_1.LAMPORTS_PER_SOL} SOL`);
    console.log(`✅ Finished!`);
});
