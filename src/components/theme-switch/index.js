import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { getValueFromLocalStorage, setValueToLocalStorage } from '../../utils/localStorage';
import './style.scss';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(getValueFromLocalStorage('isDarkMode'));

  useEffect(() => {
    setValueToLocalStorage('isDarkMode', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="dark-mode-button-wrapper">
      <IconButton className="dark-mode-button" onClick={() => setIsDarkMode((isDark) => !isDark)}>
        {isDarkMode ? (
          <LightModeIcon className="dark-mode-icon" fontSize="large" />
        ) : (
          <DarkModeIcon className="dark-mode-icon" fontSize="large" />
        )}
      </IconButton>
    </div>
  );
}

export default ThemeSwitch;
