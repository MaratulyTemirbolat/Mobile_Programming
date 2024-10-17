import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostComponent from '@/components/PostComponent';
import { posts } from '@/constants/testdata';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostComponent post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
