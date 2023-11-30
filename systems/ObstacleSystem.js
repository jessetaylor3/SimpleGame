import React from 'react';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacles';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ObstacleSystem = (entities) => {
  // Always create a new obstacle
  const newObstacle = {
    body: { 
      position: { x: screenWidth / 2, y: screenHeight / 2 }, 
      size: { width: 100, height: 100 } 
    },
    renderer: <Obstacle body={newObstacle.body} size={newObstacle.body.size} />,
  };

  // Set the obstacles directly to the new obstacle
  entities.obstacles = { bodies: [newObstacle] };

  // No need to update the position for now, we just want to see if it renders
  return entities;
};

export default ObstacleSystem;
