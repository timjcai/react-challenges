import React, { useContext, useState } from "react"
import { Theme, ThemeContextType } from '../../types';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);
export const ThemeUpdateContext = React.createContext<ThemeContextType | null>(null);

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

interface ProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ProviderProps) => {
  const [brandTheme, setBrandTheme] = useState<Theme>('Up')

  function selectTheme(){
    setBrandTheme('ANZ')
  }
  console.log(`${brandTheme}`)

  return (
    <ThemeContext.Provider value = {{ theme: brandTheme, changeTheme: setBrandTheme }}>
        { props.children }
    </ThemeContext.Provider>
  )
}
