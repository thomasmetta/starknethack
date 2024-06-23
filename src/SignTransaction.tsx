import { FC, FormEventHandler, useState } from "react";

import {
  Account,
  Chain,
  Hex,
  Transport,
  WalletClient,
  PublicClient,
  parseEther,
} from "viem";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getChain } from "@dynamic-labs/utils";

export const SignTransaction: FC = () => {
  const { primaryWallet } = useDynamicContext();

  const [txnHash, setTxnHash] = useState("");

  if (!primaryWallet) return null;

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
        const formData = new FormData(event.currentTarget);

        const address = formData.get("address") as string;
        const amount = formData.get("amount") as string;
        const provider = await primaryWallet.connector.getSigner<
        WalletClient<Transport, Chain, Account>
        >();
        if (!provider) return;

        const transaction = {
        from : primaryWallet.address as Hex,
        to: "0x8453FC6Cd1bCfE8D4dFC069C400B433054d47bDc" as Hex,
        chain: getChain(await provider.getChainId()),
        gas: 15_000_0n,
        data: "0xe2bbb158000000000000000000000000000000000000000000000000000000000000006405d7eb3b2c286dc823a8d6fe71283c28ec04ef5845593ef3260f2f82a9c3b978"
        };

        const hash = await provider.sendTransaction(transaction);
    }
    catch(error) {
        console.error(error);
      }
    };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Bridge to Starknet</button>
    </form>
  );
};

export default SignTransaction;
