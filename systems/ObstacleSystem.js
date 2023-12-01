import React from 'react';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacles';

// Function to get random obstacle type
const getRandomObstacleType = () => {
  return Math.random() < 0.5 ? 'building' : 'airplane';
};

const ObstacleSystem = (entities, { time }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Time since last obstacle was added
  if (!entities.lastObstacleTime) {
    entities.lastObstacleTime = time.current;
  }

  // Add new obstacle
  const now = time.current;
  if (now - entities.lastObstacleTime > 2000 && Object.keys(entities).length < 10) {
    const newObstacleKey = `obstacle_${now}`;
    const type = getRandomObstacleType();
    let position, size;

    if (type === 'airplane') {
      position = { x: screenWidth + 100, y: screenHeight * 0.2}; // Airplane spawns in the sky
      size = { width: 100, height: 50 }; // Example size for airplane
    } else { // 'building'
      position = { x: screenWidth + 100, y: 400 }; // Building spawns on the ground
      size = { width: 100, height: 500 }; // Example size for building
    }

    entities[newObstacleKey] = {
      body: { position, size, type },
      renderer: <Obstacle body={{ position, size, type }} />,
    };
    entities.lastObstacleTime = now;
  }

  // Move each obstacle
  Object.keys(entities).forEach(key => {
    if (key.startsWith("obstacle_")) {
      const obstacle = entities[key];
      obstacle.body.position.x -= 3; // Move left by 3 pixels each frame

      // Remove obstacle if it moves off-screen to the left
      if (obstacle.body.position.x < -obstacle.body.size.width) {
        delete entities[key];
      }
    }
  });

  return entities;
};

export default ObstacleSystem;
