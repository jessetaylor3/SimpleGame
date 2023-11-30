import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, StyleSheet, Easing } from 'react-native';
import { Dimensions } from 'react-native';

const ScrollingBackground = ({ speed }) => {
  const windowWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(0)).current;

  // Calculate the total width of the container to remove the gap
  const containerWidth = windowWidth * 2; // Double the width for seamless looping

  const scrollBackground = () => {
    translateX.setValue(0); // Reset to the initial position
    Animated.timing(translateX, {
      toValue: -windowWidth, // Translate by one window width
      duration: 3000, // Set the speed to 3000 milliseconds (3 seconds)
      easing: Easing.linear, // Use linear easing for a smooth continuous scroll
      useNativeDriver: true,
    }).start(() => {
      // When the animation completes, restart it
      scrollBackground();
    });
  };

  useEffect(() => {
    scrollBackground(); // Start the initial animation
  }, []);

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
          source={require('../assets/images/background.jpg')} // Update the path here
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/background.jpg')} // Update the path here
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
    overflow: 'hidden', // Ensure the image doesn't overflow the container
  },
  backgroundContainer: {
    flexDirection: 'row',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ScrollingBackground;
