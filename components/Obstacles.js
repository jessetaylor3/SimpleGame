import React from 'react';
import { Image } from 'react-native';
import tallBuilding from '../assets/images/tallBuilding.png';

const Obstacle = ({ body }) => {
  const { position, size } = body;

  return (
    <Image 
      source={tallBuilding}
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
