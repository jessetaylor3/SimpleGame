// components/Obstacles.js
import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';

// Import obstacle image
import tallBuilding from '../assets/images/tallBuilding.png';

const Obstacle = ({ body, size }) => {
  // Check if body and size are defined
  if (!body || !size) {
    console.warn("Obstacle component received undefined body or size");
    return null; // Render nothing if body or size is undefined
  }
  
  const { position } = body;
  const { width, height } = size;

  return (
    <Image 
      source={tallBuilding}
      style={{
        position: 'absolute',
        left: props.position.x,
        top: props.position.y,
        width: props.size.width,
        height: props.size.height,
        zIndex: 1000,
        // Add resizeMode if needed
      }}
    />
  );
};


export default Obstacle;
