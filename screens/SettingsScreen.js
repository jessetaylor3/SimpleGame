// SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Switch } from 'react-native';
import SoundContext from '../systems/SoundContext'; // Import the SoundContext

const SettingsScreen = ({ navigation }) => {
  const { soundEnabled, toggleSound, difficulty, setDifficulty } = useContext(SoundContext);

  const selectDifficulty = (level) => {
    setDifficulty(level);
  };

  return (
    <ImageBackground
      source={require('../assets/images/SettingScreen.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>

        {/* Sound Toggle */}
        <View style={styles.setting}>
          <Text style={styles.settingText}>Sound</Text>
          <Switch
            value={soundEnabled}
            onValueChange={toggleSound}
          />
        </View>

        {/* Difficulty Setting */}
        <View style={styles.setting}>
          <Text style={styles.settingText}>Difficulty</Text>
          {['easy', 'normal', 'hard'].map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.button,
                difficulty === level && styles.selectedButton
              ]}
              onPress={() => selectDifficulty(level)}
            >
              <Text style={styles.buttonText}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
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
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    color: 'black',
    fontSize: 16,
    marginRight: 10,
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
