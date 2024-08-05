import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import { getKeypairFromFile } from "@solana-developers/helpers";
import "dotenv/config";

const transactionExample = async () => {
  const suppliedToPubkey = process.argv[2] || null;
  console.log(process.argv);

  if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }

  const senderKeypair = await getKeypairFromFile("~/.config/solana/id.json");

  console.log(`suppliedToPubkey: ${suppliedToPubkey}`);

  const toPubkey = new PublicKey(suppliedToPubkey);

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );

  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );

  const transaction = new Transaction();

  const LAMPORTS_TO_SEND = 5000;

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });

  transaction.add(sendSolInstruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);

  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
  );
  console.log(`Transaction signature is ${signature}!`);
};

transactionExample();

// command: node dist/index.js CxGt3xxKsdDTcSaW9JPcBSAEqbYnUuGopYVS6S8C8eJa