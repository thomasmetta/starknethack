import React from 'react';
import { DynamicContextProvider, DynamicWidget, FilterChain } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";

import SignMessage from './SignMessage.tsx';

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
          walletConnectors: [EthereumWalletConnectors, StarknetWalletConnectors],
          overrides: {
            views: views,
          },
      }}

      locale={locale}
    >
      <DynamicWidget />
      <SignMessage />
    </DynamicContextProvider>
  )
}

export default App;