import React from 'react';

function Result({ result }) {
  return (
    <div className="result" id="result">
      {Object.keys(result).map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {result[key]}
        </p>
      ))}
      <button className="copy-button" onClick={copyResults}>
        Copy Results
      </button>
    </div>
  );
}

function copyResults() {
  const resultDiv = document.getElementById('result');
  const range = document.createRange();
  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  try {
    document.execCommand('copy');
    alert('Results copied to clipboard.');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
  window.getSelection().removeAllRanges();
}

export default Result;
