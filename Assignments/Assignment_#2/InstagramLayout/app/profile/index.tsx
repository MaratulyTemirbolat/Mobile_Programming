import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { users } from '@/constants/testdata';

export default function ProfileSelectionPage() {
  const router = useRouter();

  const onUserPress = (userId: string) => {
    router.push(`/profile/${userId}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onUserPress(item.id)}
            style={styles.userItem}
          >
            <Image
              source={{ uri: item.profilePictureUrl }}
              style={styles.profilePicture}
            />
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
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
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
