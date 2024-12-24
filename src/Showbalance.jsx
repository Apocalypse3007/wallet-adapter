import React from 'react';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Showbalance() {
    console.log("Showbalance component rendered");
    const wallet = useWallet();
    const connection = useConnection();

    async function balance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }

    balance();

    return (
        <div>
            <h1>Balance: <span id="balance"></span> SOL</h1>
        </div>
    );
}