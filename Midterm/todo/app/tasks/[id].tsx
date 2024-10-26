// app/tasks/[id].tsx
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Task, { TaskStatus } from '../../models/Task';
import { getTaskById, updateTask, deleteTask } from '../../constants/data';
import { Picker } from '@react-native-picker/picker';

export default function TaskDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
  
    const [task, setTask] = useState<Task | null>(null);
    useEffect(() => {
      const taskId = parseInt(id!);
      const foundTask = getTaskById(taskId);
      console.log(id);
      if (foundTask) {
        setTask({ ...foundTask });
      } else {
        Alert.alert('Error', 'Task not found', [{ text: 'OK', onPress: () => router.replace('/tasks') }]);
      }
    }, [id]);
  
    const handleUpdate = () => {
      if (task) {
        updateTask(task);
        Alert.alert('Success', 'Task updated');
        router.replace('/tasks');
      }
    };
  
    const handleDelete = () => {
      if (task) {
        deleteTask(task.id);
        Alert.alert('Success', 'Task deleted');
        router.replace('/tasks');
      }
    };
  
    if (!task) {
      return (
        <View style={styles.container}>
          <Text>Loading task...</Text>
        </View>
      );
    }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task.title}
        onChangeText={(text) => setTask({ ...task, title: text })}
      />
      <TextInput
        style={styles.input}
        value={task.description}
        onChangeText={(text) => setTask({ ...task, description: text })}
      />
      <Picker
        selectedValue={task.status}
        onValueChange={(value) => setTask({ ...task, status: value })}
        style={styles.picker}
      >
        <Picker.Item label="Pending" value={TaskStatus.PENDING} />
        <Picker.Item label="In Progress" value={TaskStatus.IN_PROGRESS} />
        <Picker.Item label="Completed" value={TaskStatus.COMPLETED} />
      </Picker>
      <Button title="Update Task" onPress={handleUpdate} />
      <Button title="Delete Task" onPress={handleDelete} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles remain the same
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
});
