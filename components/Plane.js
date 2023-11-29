// components/Plane.js
import React from 'react';
import { Image } from 'react-native';

const planeImage = require('../assets/images/bluePlane.png'); // Update the path as necessary

const Plane = ({ body }) => {
  const { position } = body;
  const width = 50;  // Adjust width as necessary
  const height = 50; // Adjust height as necessary

  return (
    <Image
      source={planeImage}
      style={{
        position: 'absolute',
        left: position.x - width / 2,
        top: position.y - height / 2,
        width: width,
        height: height,
      }}
    />
  );
};

export default Plane;
