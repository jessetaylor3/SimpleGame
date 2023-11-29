// components/Obstacles.js
import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';

//Import obstacle image
import tallBuilding from '../assets/tallBuilding.png';

const Obstacle = ({ body, size, color }) => {
  const { position } = body;
  const { width, height } = size;

  return (
    <Image 
      source={buildingImage}
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

const Obstacles = ({ obstacles }) => {
  if (!obstacles || obstacles.length === 0) {
    return null;
  }

  return (
    <>
      {obstacles.map((obstacle, index) => (
        <Obstacle key={index} body={obstacle.body} size={obstacle.size} color={'green'} />
      ))}
    </>
  );
};

export default Obstacles;
