import * as React from 'react';

export type Theme = 'light' | 'dark';
const ThemeContext = React.createContext<{ theme: Theme; setTheme: (theme: Theme) => void } | undefined>(undefined);

export const ThemeProvider = ({ children, defaultTheme = 'light' }: React.PropsWithChildren<{ defaultTheme?: Theme }>) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  React.useEffect(() => {
    const saved = window.localStorage.getItem('edb-theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('edb-theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
