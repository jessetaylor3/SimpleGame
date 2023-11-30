import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, StyleSheet, Easing, Dimensions } from 'react-native';

const ScrollingBackground = ({ speed }) => {
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
      scrollBackground(); // Restart the animation
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
          source={require('../assets/images/backgroundNEW.jpg')} // Update the path here
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/backgroundNEW.jpg')} // Update the path here
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
    width: 1792, // Set this to your image's actual width
    height: Dimensions.get('window').height,
  },
});

export default ScrollingBackground;
