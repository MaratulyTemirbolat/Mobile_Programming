import React, { createContext, useState, ReactNode } from 'react';

type SharedContextType = {
  text: string;
  setText: (text: string) => void;
};

export const SharedContext = createContext<SharedContextType | undefined>(undefined);

export const SharedProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState('');
  return (
    <SharedContext.Provider value={{ text, setText }}>
      {children}
    </SharedContext.Provider>
  );
};
