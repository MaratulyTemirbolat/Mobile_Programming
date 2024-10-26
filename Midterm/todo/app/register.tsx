// app/register.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { register, currentUser } from '../constants/data';

export default function RegisterScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      router.replace('/tasks'); // Explicit path to tasks page
    }
  }, []);

  const handleRegister = () => {
    const success = register(email.trim().toLowerCase(), name, password);
    if (success) {
      router.replace('/tasks'); // Redirect to tasks list page
    } else {
      Alert.alert('Registration Failed', 'Email already exists');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Text>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/login')}>
          Login
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
