import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, Button, Alert } from "react-native";
import { fetchUsers, deleteUser, User } from "@/services/api";

export default function APIUserList() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch users.");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    Alert.alert("Delete User", "Are you sure you want to delete this user?", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: async () => {
          try {
            await deleteUser(id);
            loadUsers(); // Refresh the list
          } catch (error) {
            Alert.alert("Error", "Failed to delete user.");
            console.error(error);
          }
        },
      },
    ]);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id?.toString() || ""}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>
                {item.first_name} {item.last_name}
              </Text>
              <Text>{item.email}</Text>
            </View>
            <Button title="Delete" color="red" onPress={() => handleDelete(item.id!)} />
          </View>
        )}
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
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontWeight: "bold",
  },
});
