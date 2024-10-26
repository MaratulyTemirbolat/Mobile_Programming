// app/index.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { currentUser } from '../constants/data';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (currentUser) {
        router.replace('/tasks');
      } else {
        router.replace('/login');
      }
    }
  }, [isMounted]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
  },
});
