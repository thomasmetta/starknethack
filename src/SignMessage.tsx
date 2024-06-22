import React, { useState, useEffect} from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import axios from 'axios';

function SignMessage() {
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
                  to: '0x05d7eb3b2c286dc823a8d6fe71283c28ec04ef5845593ef3260f2f82a9c3b978',
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
    </div>;

}

export default SignMessage;