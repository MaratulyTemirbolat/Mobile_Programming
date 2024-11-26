import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { insertUser, User } from "../db/repository";
import { useRouter } from "expo-router";

export default function AddUser() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleAddUser = () => {
    if (name && email) {
      const newUser: User = { name, email };
      insertUser(newUser);
      setName("");
      setEmail("");
    } else {
        Alert.alert("Wrong data", "You need to specify name and email of the user");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
});
