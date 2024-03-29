import React from 'react';
import { Image } from 'react-native';
import tallBuilding from '../assets/images/tallBuilding.png';
import airplane from '../assets/images/airplane.png';
import newBuilding from '../assets/images/newBuilding.png';

const Obstacle = ({ body }) => {
  const { position, size, type } = body;

  const getImageSource = (obstacleType) => {
    switch (obstacleType) {
      case 'airplane':
        return airplane;
      case 'newBuilding':
        return newBuilding;
      case 'tallBuilding':
        return tallBuilding;
    }
  };

  return (
    <Image 
      source={getImageSource(type)}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
      }}
    />
  );
};

export default Obstacle;
