// components/Plane.js
import React from 'react';
import { Image } from 'react-native';
import PlaneContext from '../systems/PlaneContext';

const Plane = ({ body }) => {
  const { planeIndex } = React.useContext(PlaneContext);
  
  const planeImages = {
    1 : require('../assets/images/bluePlane.png'), //Index 1
    2 : require('../assets/images/redPlane.png'), //Index 2
    3 : require('../assets/images/purplePlane.png'), //Index 3
  };

  // Default to the first image if index is out of range
  const planeImage = planeImages[planeIndex] || planeImages[2]; // Default to index 1 if not found

  //Destructure angle from body of plane
  const { position, angle } = body;
  const width = 50;
  const height = 50;

  // const planeImage = require('../assets/images/bluePlane.png');
  return (

    <Image
      source={planeImage}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: width,
        height: height,
        transform: [{ rotate: `${angle}deg` }], // Add rotation
        zIndex: 1001,
      }}
    />
  );
};

export default Plane;
