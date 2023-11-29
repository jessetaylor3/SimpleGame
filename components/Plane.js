// components/Plane.js
import React from 'react';

import { Image } from 'react-native';

const planeImage = require('../assets/images/bluePlane.png'); 

const Plane = ({ body }) => {
  console.log('Plane component is rendered');
  const { position } = body;
  const width = 100;
  const height = 100;

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
