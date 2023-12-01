// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import AppNavigator from './navigation/AppNavigator';
import SoundContext from './systems/SoundContext';

export default function App() {
  const [sound, setSound] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState('normal');

  useEffect(() => {
    loadSound();
    return sound ? () => sound.unloadAsync() : undefined;
  }, []);

  async function loadSound() {
    // Set Audio Mode to play in silent mode on iOS
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    });

    const { sound } = await Audio.Sound.createAsync(
      require('./assets/audio.mp3'),
      { shouldPlay: soundEnabled, isLooping: true }
    );
    setSound(sound);
  }

  const toggleSound = async () => {
    if (soundEnabled) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, difficulty, setDifficulty }}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </SoundContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
