// app/screens/MovieList.tsx
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const movies = [
  { id: '1', title: 'Inception' },
  { id: '2', title: 'The Matrix' },
  { id: '3', title: 'Interstellar' },
];

export default function MovieList() {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}
