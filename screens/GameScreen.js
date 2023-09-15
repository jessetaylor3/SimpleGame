import React, { useState, useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';

const GameScreen = () => {
  const [altitude] = useState(new Animated.Value(0));
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Move the dot based on the touch movement
        Animated.timing(altitude, {
          toValue: -gestureState.dy, // Use gestureState to control altitude
          duration: 16, // Adjust animation duration for smoothness
          useNativeDriver: false, // Required for some animations
        }).start();
      },
      onPanResponderRelease: () => {
        // When user releases the screen, let the dot fall (reset altitude)
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
      <Animated.View
        style={[styles.dot, { bottom: altitude }]}
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
  dot: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 25, // Make it a circle
  },
});

export default GameScreen;
