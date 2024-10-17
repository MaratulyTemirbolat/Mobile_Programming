// app/notifications/index.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { notifications } from '@/constants/testdata';
import NotificationComponent from '@/components/NotificationComponent';

export default function NotificationsPage() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationComponent notification={item} />}
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
