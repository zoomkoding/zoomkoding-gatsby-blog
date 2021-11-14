import React, { useEffect, useState } from 'react';
import { Switch } from '@material-ui/core';
import { getValueFromLocalStorage, setValueToLocalStorage } from '../../utils/localStorage';
import './style.scss';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(getValueFromLocalStorage('isDarkMode'));

  useEffect(() => {
    setValueToLocalStorage('isDarkMode', isDarkMode);
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
