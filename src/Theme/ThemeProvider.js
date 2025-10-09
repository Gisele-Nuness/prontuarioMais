import React, { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { light, dark } from './themes';

const STORAGE_KEY = '@app_theme_preference';

const ThemeContext = createContext({
  theme: light,
  mode: 'light',
  setMode: (_m) => {},
  toggleMode: () => {},
});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  // carregar preferência gravada
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') setMode(saved);
    })();
  }, []);

  // persistir quando mudar
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, mode).catch(() => {});
  }, [mode]);

  const theme = useMemo(() => (mode === 'dark' ? dark : light), [mode]);

  const setModeSafe = useCallback((m) => {
    if (m === 'light' || m === 'dark') setMode(m);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, mode, setMode: setModeSafe, toggleMode }), [theme, mode, setModeSafe, toggleMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
