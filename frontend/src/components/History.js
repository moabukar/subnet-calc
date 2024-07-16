import React from 'react';

function History({ history }) {
  return (
    <div className="history">
      <h2>Calculation History</h2>
      <div id="history">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <p>
              <strong>Network:</strong> {item.network}
            </p>
            <p>
              <strong>Subnet Mask:</strong> {item.subnetMask}
            </p>
            <p>
              <strong>Results:</strong>
            </p>
            {Object.keys(item.data).map((key) => (
              <p key={key}>
                {key}: {item.data[key]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
