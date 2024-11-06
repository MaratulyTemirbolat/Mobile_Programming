// app/screens/InputField.tsx
import React, { useContext, useState } from 'react';
import { TextInput, Button, View, FlatList, Text } from 'react-native';
import { ViewModelContext } from '../contexts/ViewModelContext';

export default function InputField() {
  const { items, addItem } = useContext(ViewModelContext)!;
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input) {
      addItem(input);
      setInput('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a new user"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add User" onPress={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
