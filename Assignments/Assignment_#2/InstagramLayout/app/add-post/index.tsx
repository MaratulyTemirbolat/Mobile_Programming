// app/add-post/index.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Post } from '@/models/models';
import { posts } from '@/constants/testdata';
import uuid from 'react-native-uuid';

export default function AddPostPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const router = useRouter();

  const onAddPost = () => {
    if (!imageUrl || !caption) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const newPost: Post = {
      id: uuid.v4().toString(),
      userId: '1',
      imageUrl,
      caption,
      likes: 0,
    };
    posts.unshift(newPost);
    setImageUrl('');
    setCaption('');
    Alert.alert('Success', 'Post added successfully!', [{ text: 'OK', onPress: () => router.push('/') }]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
