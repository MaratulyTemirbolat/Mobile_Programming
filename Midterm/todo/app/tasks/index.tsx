// app/tasks/index.tsx
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Task, { TaskStatus } from '../../models/Task';
import { logout, tasks } from '../../constants/data';

export default function TasksScreen() {
  const router = useRouter();

  const handleAddTask = () => {
    router.push('/tasks/add');
  };

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const getStatusStyle = (status: TaskStatus) => {
    switch (status) {
      case TaskStatus.PENDING:
        return styles.statusPending;
      case TaskStatus.IN_PROGRESS:
        return styles.statusInProgress;
      case TaskStatus.COMPLETED:
        return styles.statusCompleted;
      default:
        return styles.statusPending;
    }
  };

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => router.push(`/tasks/${item.id}`)}
    >
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={[styles.taskStatus, getStatusStyle(item.status)]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Add Task" onPress={handleAddTask} />
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
      {tasks.length === 0 ? (
        <Text style={styles.noTasks}>No tasks available.</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f7f9fc' 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 16 
  },
  taskItem: { 
    padding: 16, 
    marginBottom: 8, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowOffset: { width: 0, height: 1 } 
  },
  taskContent: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  taskTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  taskStatus: { 
    fontSize: 14, 
    fontWeight: '600' 
  },
  statusPending: { 
    color: '#FFA500'  // Orange for Pending
  },
  statusInProgress: { 
    color: '#1E90FF'  // Blue for In Progress
  },
  statusCompleted: { 
    color: '#32CD32'  // Green for Completed
  },
  noTasks: { 
    fontSize: 18, 
    color: '#888', 
    textAlign: 'center', 
    marginTop: 50 
  },
});
