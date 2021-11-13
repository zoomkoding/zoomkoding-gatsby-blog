import React, { useEffect, useState } from 'react';
import { Switch } from '@material-ui/core';
import './style.scss';

function ThemeSwitch() {
  const storedIsDarkMode = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(storedIsDarkMode));

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Switch
      className="dark-mode-switch"
      size="medium"
      color="default"
      checked={isDarkMode}
      onChange={() => setIsDarkMode((isDark) => !isDark)}
    />
  );
}

export default ThemeSwitch;
