import { Stack } from "expo-router";
import { useEffect } from "react";
import { initializeDatabase } from "@/db/database";

export default function Layout() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="user-list" options={{ title: "User List" }} />
      <Stack.Screen name="add-user" options={{ title: "Add User" }} />
      <Stack.Screen name="api-user-list" options={{ title: "API User List" }} />
      <Stack.Screen name="api-user-create" options={{ title: "Create API User" }} />
    </Stack>
  );
}
