// app/screens/InputFragment.tsx
import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { SharedContext } from '../contexts/SharedContext';

export default function InputFragment() {
  const { setText } = useContext(SharedContext)!;
  return (
    <View>
      <TextInput
        placeholder="Enter text"
        onChangeText={(input) => setText(input)}
      />
    </View>
  );
}
