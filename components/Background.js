// components/Background.js
import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Background = ({ scrollX }) => {
  // Calculate the translation of the background image
  const backgroundTranslateX = scrollX % screenWidth;

  return (
    <View style={styles.backgroundContainer}>
      {[...Array(2)].map((_, index) => (
        <Image
          key={index}
          source={require('../assets/images/background.jpg')} // Replace with your background image
          style={[
            styles.background,
            {
              transform: [
                { translateX: -backgroundTranslateX + screenWidth * index }
              ]
            }
          ]}
          resizeMode="cover"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: screenWidth * 2,
    height: screenHeight,
  },
  background: {
    width: screenWidth,
    height: screenHeight,
  },
});

export default Background;
