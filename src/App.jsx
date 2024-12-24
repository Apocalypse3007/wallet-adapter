import './App.css'
import React , {useMemo} from 'react'
import { Showbalance } from './Showbalance'
import { Sendtokens } from './Sendtokens'
import { Requestairdrop } from './Requestairdrop'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {


  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div>
              </div>
              <Showbalance />
              <Sendtokens />
              <Requestairdrop />
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  );
}

export default App