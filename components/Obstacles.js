// components/Obstacles.js
import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';

// Import obstacle image
import tallBuilding from '../assets/images/tallBuilding.png';

const Obstacle = ({ body, size }) => {
  const { position } = body;
  const { width, height } = size;

  return (
    <Image 
      source={tallBuilding}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: width,
        height: height,
        // You can add resizeMode if needed, e.g., 'stretch', 'contain', etc.
      }} 
    />
  );
};

export default Obstacle;
