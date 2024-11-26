import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Database App</Text>
      <Link href="/user-list">View Users</Link>
      <Link href="/add-user">Add User</Link>

      <Text>Welcome to the API User Management App</Text>
      <Link href="/api-user-list">View API Users</Link>
      <Link href="/api-user-create">Create API User</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
