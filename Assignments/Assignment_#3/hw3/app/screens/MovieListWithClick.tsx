// app/screens/MovieListWithClick.tsx
import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Alert } from 'react-native';

const movies = [
  { id: '1', title: 'Inception' },
  { id: '2', title: 'The Matrix' },
  { id: '3', title: 'Interstellar' },
];

export default function MovieListWithClick() {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => Alert.alert(item.title)}>
          <View>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
