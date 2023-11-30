import React from 'react';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacles';

const ObstacleSystem = (entities, { time }) => {
  if (!entities.lastObstacleTime) {
      entities.lastObstacleTime = time.current;
  }

  const now = time.current;
  if (now - entities.lastObstacleTime > 2000 && Object.keys(entities).length < 10) { // For example, limit to 10 obstacles
      const newObstacleKey = `obstacle_${now}`;
      const body = { 
          position: { x: Math.random() * 300, y: Math.random() * 500 }, 
          size: { width: 100, height: 300 } 
      };
      entities[newObstacleKey] = {
          body: body,
          renderer: <Obstacle body={body} />,
      };
      entities.lastObstacleTime = now;
  }

  return entities;
};


export default ObstacleSystem;



// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// const ObstacleSystem = (entities) => {
  
//     if (!entities.obstacles) {
//         entities.obstacles = { bodies: [] };
//     }

//     // Define the body and size first
//     const body = { position: { x: 300, y: 300 }, size: { width: 1000, height: 1000 } };

//     const newObstacle = {
//         body: body,
//         renderer: <Obstacle body={body} size={body.size} />,
//     };

//     if (entities.obstacles.bodies.length == 0){
//       entities.obstacles.bodies.push(newObstacle);
//     }
   
//     return entities;
// };

// export default ObstacleSystem;
