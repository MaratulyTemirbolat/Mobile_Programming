import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { users, posts } from '@/constants/testdata';

export default function UserProfilePage() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>User not found</Text>
      </View>
    );
  }

  const userPosts = posts.filter((p) => p.userId === userId);

  const numColumns = 3;
  const imageSize = Dimensions.get('window').width / numColumns;

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{ uri: user.profilePictureUrl }} style={styles.profilePicture} />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.postsCount}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          {/* Add Followers and Following if needed */}
        </View>
      </View>
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={{ width: imageSize, height: imageSize }} />
        )}
        style={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    marginTop: 15,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  grid: {
    backgroundColor: '#fff',
  },
});

