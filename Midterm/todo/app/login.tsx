// app/login.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { login, currentUser } from '../constants/data';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      router.replace('/tasks'); // Explicit path to tasks page
    }
  }, []);

  const handleLogin = () => {
    const success = login(email.trim().toLowerCase(), password);
    if (success) {
      router.replace('/tasks'); // Redirect to tasks list page
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text>
        Don't have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/register')}>
          Register
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { marginBottom: 12, borderWidth: 1, padding: 8, borderRadius: 5 },
  link: { color: 'blue' },
});
