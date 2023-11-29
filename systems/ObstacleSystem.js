// systems/ObstacleSystem.js
import React from 'react';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacle'; // Make sure to import the Obstacle component

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

let lastObstacleTime = 0;
const obstacleInterval = 2000; // 2000 milliseconds (2 seconds)

const ObstacleSystem = (entities, { time }) => {
  let { obstacles } = entities;

  // Check if it's time to generate a new obstacle
  if (time.now - lastObstacleTime > obstacleInterval) {
    lastObstacleTime = time.now;
    const newObstacle = createNewObstacle();
    obstacles.bodies.push(newObstacle);
  }

  // Update the position of each obstacle
  obstacles.bodies.forEach(obstacle => {
    obstacle.body.position.x -= 5; // Move leftwards, adjust speed as necessary
  });

  // Remove obstacles that have moved off the screen
  obstacles.bodies = obstacles.bodies.filter(obstacle => {
    return obstacle.body.position.x > -obstacle.size.width;
  });

  // Return updated entities
  return {
    ...entities,
    obstacles: obstacles,
  };
};

const createNewObstacle = () => {
  // Your logic for creating a new obstacle
  // Example position and size:
  const position = { x: screenWidth, y: screenHeight - 100 };
  const size = { width: 50, height: 100 };

  return {
    body: { position: position, size: size },
    renderer: <Obstacle />,
  };
};

export default ObstacleSystem;
