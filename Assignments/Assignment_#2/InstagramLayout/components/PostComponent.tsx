// components/PostComponent.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Post } from '@/models/models';
import { users } from '@/constants/testdata';
import { Ionicons } from '@expo/vector-icons';

interface PostComponentProps {
  post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  const user = users.find((u) => u.id === post.userId);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {user && (
          <>
            <Image source={{ uri: user.profilePictureUrl }} style={styles.profilePicture} />
            <Text style={styles.username}>{user.username}</Text>
          </>
        )}
      </View>
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentIcon}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.likes}>{post.likes} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{user?.username} </Text>
          {post.caption}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  commentIcon: {
    marginLeft: 15,
  },
  footer: {
    paddingHorizontal: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    lineHeight: 20,
  },
});

export default PostComponent;
