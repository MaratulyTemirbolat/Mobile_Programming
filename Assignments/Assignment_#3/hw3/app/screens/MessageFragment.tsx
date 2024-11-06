// app/screens/MessageFragment.tsx
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function MessageFragment() {
  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, []);

  return (
    <View>
      <Text>Hello from Fragment!</Text>
    </View>
  );
}
