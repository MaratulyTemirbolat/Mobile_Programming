import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Post } from '@/models/models';
import { posts, users } from '@/constants/testdata';
import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker';

export default function AddPostPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(users[0].id); // Default to first user

  const router = useRouter();

  const onAddPost = () => {
    if (!imageUrl || !caption) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newPost: Post = {
      id: uuid.v4().toString(),
      userId: selectedUserId, // Use selected user ID
      imageUrl,
      caption,
      likes: 0,
    };

    posts.unshift(newPost);
    setImageUrl('');
    setCaption('');
    Alert.alert('Success', 'Post added successfully!', [
      {
        text: 'OK',
        onPress: () => router.push('/'),
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Select User</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedUserId}
          onValueChange={(itemValue) => setSelectedUserId(itemValue)}
          style={styles.picker}
        >
          {users.map((user) => (
            <Picker.Item key={user.id} label={user.username} value={user.id} />
          ))}
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <TextInput
        style={[styles.input, styles.captionInput]}
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
        multiline
      />
      <Button title="Upload Post" onPress={onAddPost} />
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.previewImage} />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fafafa',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerContainer: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    height: 45,
  },
  captionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  previewImage: {
    marginTop: 20,
    width: '100%',
    height: 300,
  },
});
