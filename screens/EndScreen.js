import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

const EndScreen = ({ navigation }) => {
  //Accept score from GameScreen
  const score = navigation.getParam('score', 0); //Should only default 0 if score wasn't received
  console.log('Score:', score);

  const navigateToGame = () => {
    // You can add logic here to reset the game state if needed
    navigation.navigate('Game');
  };

  const navigateToHome = () => {
    // You can add logic here to reset the game state if needed
    navigation.navigate('Home');
  };

  const backgroundImage = require('../assets/images/gameoverDark.png');

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* <Text style={styles.gameOverText}>Game Over</Text> */}
        <TouchableOpacity style={styles.button}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToGame}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '120%'
  },
  scoreButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: '40%',
    alignSelf: 'center',
  },
  scoreText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 5,
  },
  // gameOverText: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  // },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
});

export default EndScreen;
