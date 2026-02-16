import * as React from 'react';

export type Direction = 'ltr' | 'rtl';
const DirectionContext = React.createContext<{ dir: Direction; setDir: (dir: Direction) => void } | undefined>(undefined);

export const DirectionProvider = ({ children, defaultDir = 'ltr' }: React.PropsWithChildren<{ defaultDir?: Direction }>) => {
  const [dir, setDir] = React.useState<Direction>(defaultDir);
  React.useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
  }, [dir]);
  return <DirectionContext.Provider value={{ dir, setDir }}>{children}</DirectionContext.Provider>;
};

export const useDirection = () => {
  const ctx = React.useContext(DirectionContext);
  if (!ctx) throw new Error('useDirection must be used within DirectionProvider');
  return ctx;
};
