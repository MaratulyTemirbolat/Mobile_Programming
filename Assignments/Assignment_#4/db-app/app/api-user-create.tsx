import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { createUser, NewUser } from "../services/api";

export default function APICreateUser() {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");

  const handleCreateUser = async () => {
    if (!name || !job) {
      Alert.alert("Error", "Name and job are required.");
      return;
    }

    try {
      const user: NewUser = { name, job };
      const response = await createUser(user);
      Alert.alert("User Created", `ID: ${response.id}, Created At: ${response.createdAt}`);
      setName("");
      setJob("");
    } catch (error) {
      Alert.alert("Error", "Failed to create user.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create User</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Job"
        value={job}
        onChangeText={setJob}
        style={styles.input}
      />
      <Button title="Create User" onPress={handleCreateUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});
