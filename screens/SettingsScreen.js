// SettingsScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Switch } from 'react-native';
import SoundContext from '../systems/SoundContext'; // Import the SoundContext
import DarkModeContext from '../systems/DarkModeContext';

const SettingsScreen = ({ navigation }) => {
  //Variable for toggle sound switch and darkMode
  const { soundEnabled, toggleSound, difficulty, setDifficulty } = useContext(SoundContext);
  
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(isDarkMode); // Add this line to debug
  

  const selectDifficulty = (level) => {
    setDifficulty(level);
  };

  // Dynamic background image based on theme mode
  const backgroundImage = isDarkMode ? require('../assets/images/darkSettings.png') : require('../assets/images/SettingScreen.jpg');

return (
  <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={[styles.title, isDarkMode && styles.whiteText]}>Settings</Text>

      {/* Sound Toggle */}
      <View style={styles.setting}>
        <Text style={[styles.settingText, isDarkMode && styles.whiteText]}>Sound</Text>
        <Switch value={soundEnabled} onValueChange={toggleSound} />
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.setting}>
        <Text style={[styles.settingText, isDarkMode && styles.whiteText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Difficulty Setting */}
      <View style={styles.difficultySetting}>
        <Text style={[styles.settingText, isDarkMode && styles.whiteText]}>Difficulty</Text>
        <View style={styles.difficultyButtons}>
          {['easy', 'normal', 'hard'].map((level) => (
            <TouchableOpacity
              key={level}
              style={[styles.button, difficulty === level && styles.selectedButton]}
              onPress={() => selectDifficulty(level)}
            >
              <Text style={[styles.buttonText]}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={[styles.backButtonText]}>Back</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25, //Adjust as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 250,
    textAlign: 'center',
  },
  difficultySetting: {
    alignItems: 'center',
    marginBottom: 15,
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
  },
  settingText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  whiteText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'lightblue',
  },
  buttonText: {
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'black',
  }
});

export default SettingsScreen;
