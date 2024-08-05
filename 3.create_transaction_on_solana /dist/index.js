"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const helpers_1 = require("@solana-developers/helpers");
require("dotenv/config");
const transactionExample = () => __awaiter(void 0, void 0, void 0, function* () {
    const suppliedToPubkey = process.argv[2] || null;
    console.log(process.argv);
    if (!suppliedToPubkey) {
        console.log(`Please provide a public key to send to`);
        process.exit(1);
    }
    const senderKeypair = yield (0, helpers_1.getKeypairFromFile)("~/.config/solana/id.json");
    console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
    const toPubkey = new web3_js_1.PublicKey(suppliedToPubkey);
    const connection = new web3_js_1.Connection("https://api.devnet.solana.com", "confirmed");
    console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`);
    console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`);
    const transaction = new web3_js_1.Transaction();
    const LAMPORTS_TO_SEND = 5000;
    const sendSolInstruction = web3_js_1.SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey,
        lamports: LAMPORTS_TO_SEND,
    });
    transaction.add(sendSolInstruction);
    const signature = yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
        senderKeypair,
    ]);
    console.log(`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `);
    console.log(`Transaction signature is ${signature}!`);
});
transactionExample();
