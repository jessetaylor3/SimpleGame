import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


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
        source={require('../assets/images/HomeScreen.jpeg')} // Adjust the path as needed
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Play" onPress={navigateToGame} />
            <Button title="Locker" onPress={navigateToLocker} />
            <Button title="Settings" onPress={navigateToSettings} />
          </View>
        </View>
      </ImageBackground>
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
      marginTop: 180,
    },
    backgroundImage: {
      flex: 1, // Ensure the background covers the entire screen
      resizeMode: 'cover', // Cover the screen with the image, maintaining aspect ratio
    },
  });
  
export default HomeScreen;
