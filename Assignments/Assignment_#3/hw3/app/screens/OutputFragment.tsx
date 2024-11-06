// app/screens/OutputFragment.tsx
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { SharedContext } from '../contexts/SharedContext';

export default function OutputFragment() {
  const { text } = useContext(SharedContext)!;
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
