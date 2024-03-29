import React from 'react';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacles';

// Function to get random obstacle type
const getRandomObstacleType = () => {
  const types = ['tallBuilding', 'airplane', 'newBuilding']; //Add more types as needed
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
};

// Function to check if plane and obstacle are colliding
const checkCollision = (plane, obstacle) => {
  return (
    plane.position.x < obstacle.position.x + obstacle.size.width &&
    plane.position.x + plane.size.width > obstacle.position.x &&
    plane.position.y < obstacle.position.y + obstacle.size.height &&
    plane.position.y + plane.size.height > obstacle.position.y
  );
};

const ObstacleSystem = (entities, { time, dispatch }) => {
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
    } else if (type == 'tallBuilding') { // 'building'
      size = { width: 100, height: 500 }; // Example size for building
      position = { x: screenWidth + 100, y: screenHeight - size.height }; // Building spawns on the ground
    } else if (type == 'newBuilding') {
      size = { width: 200, height: 500 }; // Example size for building
      position = { x: screenWidth + 100, y: screenHeight - size.height }; // Building spawns on the ground
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
        dispatch({ type: 'score' }); //Dispatch the score event
      }
    }
  });

  //Collision Detection
  const plane = entities.plane.body;
  Object.keys(entities).forEach(key => {
    if (key.startsWith("obstacle_")) {
      const obstacle = entities[key].body;
      if (checkCollision(plane, obstacle)) {
        dispatch({ type: 'game-over' }); // Dispatch game-over event
      }
    }
  });

  return entities;
};

export default ObstacleSystem;