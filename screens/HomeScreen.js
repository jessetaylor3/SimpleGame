import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

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
    <ImageBackground
      source={require('../assets/images/HomeScreen.png')}
      style={styles.backgroundImage}
    >
      <Text style={styles.title}>Flying</Text>
      <Text style={styles.title}>Plane</Text>

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={navigateToLocker} style={styles.button}>
            <Image source={require('../assets/images/locker.png')} style={styles.buttonImageSmall} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToGame} style={styles.button}>
            <Image source={require('../assets/images/play.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSettings} style={styles.button}>
            <Image source={require('../assets/images/settings.png')} style={styles.buttonImageSmall} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align items at the bottom
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 50, // Add some spacing between the buttons and the bottom of the screen
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 115,
    height: 110,
    transform: [{ scale: 0.8 }], // Decrease the size by 20%
  },
  buttonImageSmall: {
    width: 70, 
    height: 70,
    marginTop: 20,
    transform: [{ scale: 0.7 }],
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'black', 
    lineHeight: 28, 
    fontFamily: 'Verdana', 
  },
});

export default HomeScreen;
