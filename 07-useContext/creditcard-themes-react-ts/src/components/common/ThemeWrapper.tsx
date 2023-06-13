import React, { ReactNode } from 'react';
import { ThemeContextType, Theme } from '../../types';
import { ThemeContext } from './ThemeContext'

interface WrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper = (props: WrapperProps) => {
  const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };

  return (
    <div data-theme={theme}>
      <select name="toggleTheme" onChange={handleThemeChange}>
        <option value="Up">Up</option>
        <option value="CBA">CBA</option>
        <option value="ANZ">ANZ</option>
        <option value="Westpac">Westpac</option>
        <option value="NAB">NAB</option>
      </select>
      {props.children}
    </div>
  );
};

export default ThemeWrapper;
