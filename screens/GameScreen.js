import React, { useState, useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet, Image } from 'react-native';

// Import your paper airplane image
import PaperAirplaneImage from '../assets/images/paperAirplaneIcon.jpg'; // Replace with your image path

const GameScreen = () => {
  const [altitude] = useState(new Animated.Value(0));
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Move the paper airplane based on the touch movement
        Animated.timing(altitude, {
          toValue: -gestureState.dy, // Use gestureState to control altitude
          duration: 16, // Adjust animation duration for smoothness
          useNativeDriver: false, // Required for some animations
        }).start();
      },
      onPanResponderRelease: () => {
        // When the user releases the screen, let the paper airplane fall (reset altitude)
        Animated.timing(altitude, {
          toValue: 0, // Reset altitude to ground level
          duration: 500, // Duration of the animation
          useNativeDriver: false, // Required for some animations
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Use an Image component for the paper airplane */}
      <Animated.Image
        source={PaperAirplaneImage} // Set the source to your paper airplane image
        style={[styles.paperAirplane, { bottom: altitude }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperAirplane: {
    width: 100,
    height: 100,
    // You can customize the image size and other styles here
  },
});

export default GameScreen;

