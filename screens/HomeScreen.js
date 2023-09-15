import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToGame = () => {
    navigation.navigate('Game');
  };

  const navigateToLocker = () => {
    navigation.navigate('Locker');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Game!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Play" onPress={navigateToGame} />
        <Button title="Locker" onPress={navigateToLocker} />
        <Button title="Settings" onPress={navigateToSettings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default HomeScreen;
