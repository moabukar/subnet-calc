import React, { useState } from 'react';
import axios from 'axios';

function Calculator({ addToHistory, setResult }) {
  const [network, setNetwork] = useState('');
  const [subnetMask, setSubnetMask] = useState('');

  const validateInput = (network, subnetMask) => {
    const networkRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const subnetMaskRegex = /^(3[0-2]|[12]?[0-9])$/;
    return networkRegex.test(network) && subnetMaskRegex.test(subnetMask);
  };

  const calculateSubnet = () => {
    if (!validateInput(network, subnetMask)) {
      alert('Please enter a valid network address and subnet mask.');
      return;
    }

    axios
      .get(`/calculate`, { params: { network, subnet_mask: subnetMask } })
      .then((response) => {
        const data = response.data;
        setResult(data);
        addToHistory(network, subnetMask, data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  return (
    <div className="container">
      <h1>Subnet Calculator</h1>
      <input
        type="text"
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
        placeholder="Network Address (e.g., 192.168.1.0)"
      />
      <input
        type="text"
        value={subnetMask}
        onChange={(e) => setSubnetMask(e.target.value)}
        placeholder="Subnet Mask (e.g., 24)"
      />
      <button onClick={calculateSubnet}>Calculate</button>
    </div>
  );
}

export default Calculator;
