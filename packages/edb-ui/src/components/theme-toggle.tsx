import * as React from 'react';
import { Moon, Sun } from '@edb/icons';
import { IconButton } from './atoms';
import { useTheme } from '../providers/theme-provider';

export const ThemeToggle = React.forwardRef<HTMLButtonElement, Omit<React.ComponentProps<typeof IconButton>, 'onClick'>>((props, ref) => {
  const { theme, setTheme } = useTheme();
  return (
    <IconButton
      {...props}
      ref={ref}
      variant="outlined"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </IconButton>
  );
});
ThemeToggle.displayName = 'ThemeToggle';
