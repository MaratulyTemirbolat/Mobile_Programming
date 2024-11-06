// app/contexts/ViewModelContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ViewModelContextType = {
  items: string[];
  addItem: (item: string) => Promise<void>;
};

export const ViewModelContext = createContext<ViewModelContextType | undefined>(undefined);

export const ViewModelProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const storedItems = await AsyncStorage.getItem('items');
      if (storedItems) setItems(JSON.parse(storedItems));
    };
    fetchItems();
  }, []);

  const addItem = async (newItem: string) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <ViewModelContext.Provider value={{ items, addItem }}>
      {children}
    </ViewModelContext.Provider>
  );
};
