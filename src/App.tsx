import React from 'react';
import { DynamicContextProvider, DynamicWidget, FilterChain } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";

import MainApp from './MainApp.tsx';

import './App.css';

import {
  StarknetIcon,
  EthereumIcon,
} from '@dynamic-labs/iconic';

const App = () => {

  const locale = {
    en: {
      dyn_login: {
        title: {
          all: "Hello",
        },
      },
    },
  };
  
  const EthWallets = {
    label: { icon: <EthereumIcon /> },
    walletsFilter: FilterChain('EVM'),
    recommendedWallets: [
      {
        walletKey: 'metamask',
      },
    ],
  };

  const StarkWallets = {
    label: { icon: <StarknetIcon /> },
    walletsFilter: FilterChain('STARK'),
    recommendedWallets: [
      {
        walletKey: 'braavos',
        label: 'New'
      },
    ],
  };

  const views = [
    {
      type: 'wallet-list',
      tabs: {
        items: [
          EthWallets,
          StarkWallets,
        ]
      }
    }
  ];

  return (
    <DynamicContextProvider
        settings={{
          environmentId: process.env.REACT_APP_DYNAMIC_KEY,
          initialAuthenticationMode: "connect-only",
          walletConnectors: [EthereumWalletConnectors, StarknetWalletConnectors],
          bridgeChains: [
            {
              chain: "EVM",
            },
            {
              chain: "STARK",
            },
          ],
      }}

      locale={locale}
    >
      <div className="centered-container">
      Sign in to view your transactions in Ethereum and starknet and bridge from Ethereum to Starknet
      <DynamicWidget />
      <MainApp />
      </div>
    </DynamicContextProvider>
  )
}

export default App;