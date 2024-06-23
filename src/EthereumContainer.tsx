// src/Transactions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';

const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

const EthereumContainer = ({address}) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!address) {
        alert('Please enter an address');
        return;
      }

      setLoading(true);
      setTransactions([]);

      try {
        const apiKey = 'XPA122D9BZGPNFGZTEVVR5RWH9N2ZSD1W1';
        const url = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&tag=latest&apikey=${apiKey}`;
        const response = await axios.get(url);
        const { result } = response.data;

        console.log("result", result)

        if (response.data.status === "1") {
          setTransactions(result);
        } 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
}, [address]); 

  console.log("transactions", transactions)

  return (
    <div>
      <div>
      Your Ethereum Wallet: {address}
      {transactions.length > 0 ? (
        <table border="1" style={{ width: '100%', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Block Number</th>
              <th>From</th>
              <th>To</th>
              <th>Value (ETH)</th>
              <th>Gas Used</th>
              <th>Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.blockNumber}</td>
                <td>{shortenAddress(tx.from)}</td>
                <td>{shortenAddress(tx.to)}</td>
                <td>{ethers.utils.formatEther(tx.value)}</td>
                <td>{tx.gasUsed}</td>
                <td>{shortenAddress(tx.hash)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found</p>
      )}
      </div>
    </div>
  );
};

export default EthereumContainer;
