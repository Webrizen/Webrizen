import React from 'react';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';

const ThemeSwitch = ({ onChange }) => {
  const theme = useTheme();

  return (
    <Switch
      checked={theme.palette.mode === 'dark'}
      onChange={onChange}
      color="default"
      inputProps={{ 'aria-label': 'theme switch' }}
    />
  );
};

export default ThemeSwitch;
