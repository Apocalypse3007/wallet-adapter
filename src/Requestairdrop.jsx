import React from 'react';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Requestairdrop() {
    console.log("Requestairdrop component rendered");
    const wallet = useWallet();
    const connection = useConnection();

    async function airdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdrop requested by " + wallet.publicKey.toBase58());
    }

    return (
        <div>
            <input id="amount" type="number" placeholder="Amount in SOL" />
            <button onClick={airdrop}>Request Airdrop</button>
        </div>
    );
}