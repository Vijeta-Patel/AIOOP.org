import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FontSizeContextType {
  fontScale: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }, [fontScale]);

  const increase = () => setFontScale(prev => Math.min(prev + 0.15, 1.6));
  const decrease = () => setFontScale(prev => Math.max(prev - 0.15, 0.85));
  const reset = () => setFontScale(1);

  return (
    <FontSizeContext.Provider value={{ fontScale, increase, decrease, reset }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) throw new Error('useFontSize must be used within FontSizeProvider');
  return context;
}
