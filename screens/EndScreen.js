import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EndScreen = ({ navigation }) => {
  const navigateToGame = () => {
    // You can add logic here to reset the game state if needed
    navigation.navigate('Game');
  };

  const navigateToHome = () => {
    // You can add logic here to reset the game state if needed
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameOverText}>Game Over</Text>
      <Button title="Try Again" onPress={navigateToGame} />
      <Button title="Go to Home" onPress={navigateToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default EndScreen;
