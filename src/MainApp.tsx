import React, { useState, useEffect} from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import axios from 'axios';
import DataTable from './DataTable.tsx';

function MainApp() {
    const { primaryWallet } = useDynamicContext();

    const walletAddress = primaryWallet?.address;
 
    const [data, setData] = useState({ hits: [] });
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await axios.get(
              'https://sepolia-api.voyager.online/beta/txns',
              {
                params: {
                  to: walletAddress,
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
      }, [walletAddress]);

    console.log("data", data)
    return <div>
    {primaryWallet && <> Your Address {primaryWallet.address}</>}
    {primaryWallet && data?.items && <DataTable items={data?.items} />}
    </div>;

}

export default MainApp;