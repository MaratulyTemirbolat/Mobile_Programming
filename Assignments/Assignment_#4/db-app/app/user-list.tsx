import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert,
  TextInput,
} from "react-native";
import { fetchUsers, deleteUser, updateUser, User } from "../db/repository";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string>("");
  const [editedEmail, setEditedEmail] = useState<string>("");

  const loadUsers = () => {
    setUsers(fetchUsers());
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = (id: number) => {
    Alert.alert("Delete User", "Are you sure you want to delete this user?", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: () => {
          deleteUser(id);
        },
      },
    ]);
  };

  const handleEdit = (user: User) => {
    setEditMode(user.id || null);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleSaveEdit = (id: number) => {
    updateUser(
      { id, name: editedName, email: editedEmail }
    );
    setEditMode(null);
    loadUsers()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id?.toString() || ""}
        renderItem={({ item }) =>
          editMode === item.id ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={editedName}
                onChangeText={setEditedName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={editedEmail}
                onChangeText={setEditedEmail}
              />
              <Button title="Save" onPress={() => handleSaveEdit(item.id!)} />
              <Button title="Cancel" onPress={() => setEditMode(null)} />
            </View>
          ) : (
            <View style={styles.userContainer}>
              <Text>
                {item.name} ({item.email})
              </Text>
              <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={() => handleEdit(item)} />
                <Button
                  title="Delete"
                  color="red"
                  onPress={() => handleDelete(item.id!)}
                />
              </View>
            </View>
          )
        }
      />
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
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  editContainer: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
});
