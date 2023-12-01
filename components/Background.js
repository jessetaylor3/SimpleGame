import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, StyleSheet, Easing, Dimensions } from 'react-native';
import { useGameState } from '../systems/GameStateContext'; // Import the hook

const ScrollingBackground = () => {
  const { isRunning } = useGameState(); // Access the running state
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const translateX = useRef(new Animated.Value(0)).current;

  // Set to your image's actual width
  const backgroundImageWidth = 1792;
  const containerWidth = backgroundImageWidth * 2;

  const scrollBackground = () => {
    translateX.setValue(0); // Reset to the initial position
    Animated.timing(translateX, {
      toValue: -backgroundImageWidth, // Translate by one image width
      duration: 10000, // Adjust duration based on your scrolling speed preference
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      if (isRunning) {
        scrollBackground(); // Restart the animation if still running
      }
    });
  };

  useEffect(() => {
    console.log('Background Running State:', isRunning);
    if (isRunning) {
      scrollBackground(); // Start the initial animation
    } else {
      translateX.stopAnimation(); // Stop the animation
    }
  }, [isRunning]);

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <Animated.View
        style={[
          styles.backgroundContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Image
          source={require('../assets/images/backgroundNEW.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/backgroundNEW.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  backgroundContainer: {
    flexDirection: 'row',
  },
  backgroundImage: {
    width: 1792,
    height: Dimensions.get('window').height,
  },
});

export default ScrollingBackground;
