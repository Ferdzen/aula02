import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default function App() {

  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setGeneratedPassword(password);
  };

  return (
    <View style={styles.containerPrincipal}>
      <Image
        style={styles.stretch}
        source={require('./assets/cadeado.png')}
      />

      <Text style={styles.label}>Número de caracteres: {passwordLength}</Text>
      <input
        type="range"
        min={4}
        max={16}
        value={passwordLength}
        onChange={(e) => {
          setPasswordLength(parseInt(e.target.value));
          generatePassword(parseInt(e.target.value));
        }}
      />
      <Text style={styles.generatedPassword}>{generatedPassword}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#274135',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCaracter: {
    fontSize: 16,
    fontStyle: 'normal',
    color: '#ffffff'
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#FF9500',
  },
  generatedPassword: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
