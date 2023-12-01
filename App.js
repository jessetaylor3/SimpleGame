// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import AppNavigator from './navigation/AppNavigator';
import SoundContext from './systems/SoundContext';
import { DarkModeProvider } from './systems/DarkModeContext';

export default function App() {
  const [sound, setSound] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState('normal');

  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  async function loadSound() {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        
        staysActiveInBackground: true,
        
      });

      const { sound: newSound } = await Audio.Sound.createAsync(
        require('./assets/audio.mp3'),
        { shouldPlay: soundEnabled, isLooping: true }
      );
      setSound(newSound);
    } catch (error) {
      console.error('Error loading sound', error);
    }
  }

  const toggleSound = async () => {
    if (!sound) {
      return;
    }

    if (soundEnabled) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <DarkModeProvider>
      <SoundContext.Provider value={{ soundEnabled, toggleSound, difficulty, setDifficulty }}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </SoundContext.Provider>
    </DarkModeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
