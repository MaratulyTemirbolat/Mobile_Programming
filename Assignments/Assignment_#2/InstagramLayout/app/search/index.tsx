import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { users } from '@/constants/testdata';

export default function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchText.toLowerCase())
  );

  const onUserPress = (userId: string) => {
    router.push({pathname: "/profile", params: { userId }});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search users..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onUserPress(item.id)} style={styles.userItem}>
            <Image source={{ uri: item.profilePictureUrl }} style={styles.profilePicture} />
            <Text style={styles.username}>{item.username}</Text>
          </TouchableOpacity>
        )}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fafafa',
  },
  searchBar: {
    height: 40,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  username: {
    marginLeft: 15,
    fontSize: 16,
  },
});
