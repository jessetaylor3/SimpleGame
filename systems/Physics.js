// systems/Physics.js
import { Dimensions } from 'react-native';

// systems/Physics.js
const Physics = (entities, { touches, time, dispatch }) => {
  let plane = entities.plane.body;
  const screenHeight = Dimensions.get('window').height;

  // Apply gravity
  plane.velocity.y += 0.2; // Gravity
  plane.position.y += plane.velocity.y;

  // Stop the plane at the bottom of the screen
  if (plane.position.y + plane.size.height > screenHeight) {
    plane.velocity.y = 0;
    plane.position.y = screenHeight - plane.size.height;
    // Optionally dispatch 'game-over' event
    // dispatch({ type: 'game-over' });
  }

  // Plane jump on touch
  touches.filter(t => t.type === 'press').forEach(t => {
    plane.velocity.y = -5; // Adjust the force of the jump
  });

  // Update scrollX for background scrolling
  if (entities.background) {
    entities.background.scrollX += 2; // Adjust the speed as necessary
  }

  return entities;
};

export default Physics;

