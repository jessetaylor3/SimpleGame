// components/Plane.js
import React from 'react';

import { Image } from 'react-native';

const planeImage = require('../assets/images/bluePlane.png'); 

const Plane = ({ body, planeImage }) => {
  const { position } = body;
  const width = 50;
  const height = 50;

  return (

    <Image
      source={planeImage}
      style={{
        position: 'absolute',
        left: position.x - width / 2,
        top: position.y - height / 2,
        width: width,
        height: height,
        zIndex: 999,
      }}
    />
  );
};

export default Plane;
