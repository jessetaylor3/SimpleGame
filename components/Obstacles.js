// components/Obstacles.js
import React from 'react';
import { View } from 'react-native';

const Obstacle = ({ body, size, color }) => {
  const { position } = body;
  const { width, height } = size;

  return (
    <View style={{
      position: 'absolute',
      left: position.x,
      top: position.y,
      width: width,
      height: height,
      backgroundColor: color,
    }} />
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
