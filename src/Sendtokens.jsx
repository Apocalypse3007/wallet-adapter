import React from 'react';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, Transaction, PublicKey, SystemProgram } from "@solana/web3.js";

export function Sendtokens() {
    console.log("Sendtokens component rendered");
    const wallet = useWallet();
    const connection = useConnection();

    async function send() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL
            })
        );
        await wallet.sendTransaction(transaction, connection);
        alert("Transaction sent to " + to);
    }

    return (
        <div>
            <input id="to" type="text" placeholder="To" />
            <input id="amount" type="number" placeholder="Amount in SOL" />
            <button onClick={send}>Send</button>
        </div>
    );
}