// app/_layout.tsx
import React from 'react';
import { Slot, Tabs } from 'expo-router';
import { SharedProvider } from './contexts/SharedContext';
import { ViewModelProvider } from './contexts/ViewModelContext';

export default function Layout() {
  return (
    <ViewModelProvider>
      <SharedProvider>
        <Tabs>
          <Tabs.Screen name="index" options={{ title: "Home" }} />
          <Tabs.Screen name="screens/MessageFragment" options={{ title: "Message Fragment" }} />
          <Tabs.Screen name="screens/InputFragment" options={{ title: "Input Fragment" }} />
          <Tabs.Screen name="screens/OutputFragment" options={{ title: "Output Fragment" }} />
          <Tabs.Screen name="screens/MovieList" options={{ title: "Movie List" }} />
          <Tabs.Screen name="screens/MovieListWithClick" options={{ title: "Clickable Movie List" }} />
          <Tabs.Screen name="screens/InputField" options={{ title: "Input Field" }} />
        </Tabs>
      </SharedProvider>
    </ViewModelProvider>
  );
}
