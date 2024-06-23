import React, { useState, useEffect } from 'react';
import axios from 'axios';

const convertFee = (fee) => {
  if (!fee) return '0';
  return (fee / Math.pow(10, 18)).toFixed(6);
};

const TokenBalance = (address) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'https://free-rpc.nethermind.io/sepolia-juno/?apikey=OP7IYuyGcm1UUaV5EleGj5943lixEtWj9TQVONu8';
        const body = {
          id: 0,
          jsonrpc: '2.0',
          method: 'starknet_call',
          params: {
            request: {
              contract_address: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
              entry_point_selector: '0x2e4263afad30923c891518314c3c95dbe830a16874e8abc5777a9a20b54c76e',
              calldata: ['0x5d7eb3b2c286dc823a8d6fe71283c28ec04ef5845593ef3260f2f82a9c3b978'],
            },
            block_id: 'pending',
          },
        };

        const response = await axios.post(endpoint, body);
        const hexTokenBalance = response?.data?.result[0];
        const hexWithoutPrefix = hexTokenBalance.startsWith("0x") ? hexTokenBalance.slice(2) : hexTokenBalance;
        const decimalNumber = parseInt(hexWithoutPrefix, 16);
        setBalance(convertFee(decimalNumber))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      Starknet STRK Token Balance: {balance}
    </div>
  );
};

export default TokenBalance;