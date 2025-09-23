import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { light, dark } from './themes';

const STORAGE_KEY = '@app_theme_preference';

const ThemeContext = createContext({
  theme: light,
  mode: 'system',
  setMode: (_m) => {},
  toggleMode: () => {},
});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  const [systemScheme, setSystemScheme] = useState(Appearance.getColorScheme() || 'light');

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemScheme(colorScheme || 'light');
    });
    return () => sub.remove();
  }, []);

  // carregar preferência gravada
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark' || saved === 'system') setMode(saved);
    })();
  }, []);

  // persistir quando mudar
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, mode).catch(() => {});
  }, [mode]);

  const effectiveName = mode === 'system' ? systemScheme : mode;
  const theme = useMemo(() => (effectiveName === 'dark' ? dark : light), [effectiveName]);

  const setModeSafe = useCallback((m) => setMode(m), []);
  const toggleMode = useCallback(() => {
    // alterna apenas entre light<->dark (sem "system")
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, mode, setMode: setModeSafe, toggleMode }), [theme, mode, setModeSafe, toggleMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
