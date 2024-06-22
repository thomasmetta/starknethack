import React from 'react';

const shortenAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

const convertFee = (fee) => {
    if (!fee) return '0';
    return (fee / Math.pow(10, 18)).toFixed(6);
};

const DataTable = ({ items }) => {
  return (
    <table border="1" style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Actual Fee</th>
          <th>Block Number</th>
          <th>Contract Address</th>
          <th>Hash</th>
          <th>Verification Hash</th>
          <th>Status</th>
          <th>Timestamp</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{convertFee(item.actualFee)} STRK</td>
            <td>{item.blockNumber}</td>
            <td>{shortenAddress(item.contractAddress)}</td>
            <td>{shortenAddress(item.hash)}</td>
            <td>{shortenAddress(item.l1VerificationHash)}</td>
            <td>{item.status}</td>
            <td>{item.timestamp}</td>
            <td>{item.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;