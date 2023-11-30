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
  //Testing
  console.log('Obstacle position:', body.position);
  console.log('Obstacle size:', size);

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
        height: 500,
        zIndex: 1000,
        // Add resizeMode if needed
      }} 
    />
  );
};


export default Obstacle;
