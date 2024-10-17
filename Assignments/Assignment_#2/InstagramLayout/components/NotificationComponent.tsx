// components/NotificationComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Notification } from '@/models/models';

interface NotificationComponentProps {
  notification: Notification;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({ notification }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{notification.message}</Text>
      <Text style={styles.date}>{notification.createdAt.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default NotificationComponent;
