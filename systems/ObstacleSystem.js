import React from 'react';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacles';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ObstacleSystem = (entities) => {
    // Always create a new obstacle
    if (!entities.obstacles) {
      entities.obstacles = { bodies: [] };
    }
  
    const newObstacle = {
        body: { position: { x: 300, y: 300 }, size: { width: 100, height: 100 } },
        size: { width: 100, height: 100 },
        renderer: <Obstacle />,
    //   body: { 
    //     position: { x: 300, y: 300 }, // Set the initial position
    //     size: { width: 1000, height: 1000 } // Set the size
    //   },
    //   renderer: <Obstacle body={newObstacle.body} size={newObstacle.body.size} />, // Render the Obstacle component
    };

  
    // Add the new obstacle to the obstacles array
    entities.obstacles.bodies.push(newObstacle);

    // No need to update the position for now, we just want to see if it renders
    return entities;
  };
  
  export default ObstacleSystem;
  
