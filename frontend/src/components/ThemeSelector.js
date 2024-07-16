import React from 'react';

function ThemeSelector({ theme, onThemeChange }) {
  return (
    <div className="theme-selector">
      <label htmlFor="theme-select">Choose Theme:</label>
      <select id="theme-select" value={theme} onChange={(e) => onThemeChange(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default ThemeSelector;
