import React, { useState, useEffect} from 'react';
import { useDynamicContext, useUserWallets } from "@dynamic-labs/sdk-react-core";
import axios from 'axios';
import DataTable from './DataTable.tsx';
import TokenList from './TokenList.tsx';

function MainApp() {
    const userWallets = useUserWallets()
    const ethWallet = userWallets.find(wallet => wallet.chain === 'EVM')
    const starkWallet = userWallets.find(wallet => wallet.chain === 'STARK')

    const starkWalletAddress = starkWallet?.address;
 
    const [data, setData] = useState({ hits: [] });
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await axios.get(
              'https://sepolia-api.voyager.online/beta/txns',
              {
                params: {
                  to: starkWalletAddress,
                  rejected: false,
                  ps: 25,
                  p: 1,
                },
                headers: {
                  'accept': 'application/json',
                  'x-api-key': process.env.REACT_APP_VOYAGER_KEY,
                },
              }
            );
            setData(result.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [starkWalletAddress]);

    return <div>
    {starkWallet && (
      <>
        Your Address {starkWallet.address}
        <TokenList address={starkWallet.address} />
        {data?.items && <DataTable items={data?.items} />}
      </>
    )}
    </div>;

}

export default MainApp;