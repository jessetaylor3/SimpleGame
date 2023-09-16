import React, { useState, useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const defaultIcon = require('../assets/images/bluePlane.png'); // Set your default icon path

const GameScreen = ({ navigation }) => {
  const selectedIcon = navigation.getParam('selectedIcon', null);

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

  const iconToDisplay = selectedIcon || defaultIcon;

  return (
    <View style={styles.container}>
      {/* Home link */}
      <TouchableOpacity style={styles.homeLink} onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>

      {/* Use the selected icon or default icon if none is selected */}
      <Animated.Image
        source={iconToDisplay} // Use the selected icon or default icon
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
  homeLink: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default GameScreen;







