import React, { useState } from 'react';
import './App.css';
import ThemeSelector from './components/ThemeSelector';
import Calculator from './components/Calculator';
import History from './components/History';
import Result from './components/Result';

function App() {
  const [theme, setTheme] = useState('light');
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const addToHistory = (network, subnetMask, data) => {
    const newHistoryItem = { network, subnetMask, data };
    setHistory([newHistoryItem, ...history]);
  };

  return (
    <div className="App">
      <ThemeSelector theme={theme} onThemeChange={handleThemeChange} />
      <Calculator addToHistory={addToHistory} setResult={setResult} />
      <History history={history} />
      {result && <Result result={result} />}
    </div>
  );
}

export default App;
