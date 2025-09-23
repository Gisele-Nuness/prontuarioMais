import { useMemo } from 'react';
import { useTheme } from './ThemeProvider';

export function useThemedStyles(makeStyles) {
  const { theme } = useTheme();
  return useMemo(() => makeStyles(theme), [theme, makeStyles]);
}
