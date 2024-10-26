// app/tasks/add.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Task from '../../models/Task';
import { saveTask } from '../../constants/data';

export default function AddTaskScreen() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleAddTask = () => {
        const newTask = new Task(
            Math.floor(Math.random()*10000),
            title,
            Math.floor(Math.random()*10000),
            description
        );
        saveTask(newTask);
        Alert.alert('Success', 'Task successfully created', [{ text: 'OK', onPress: () => router.replace('/tasks') }]);
    };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        placeholder="Description (optional)"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />
      <Button title="Add Task" onPress={handleAddTask} />
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
});
