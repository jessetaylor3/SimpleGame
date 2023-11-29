// systems/Physics.js
const Physics = (entities, { touches, time }) => {
  let plane = entities.plane.body;

  // Apply gravity
  plane.velocity.y += 0.2;
  plane.position.y += plane.velocity.y;

  // Stop the plane at the bottom of the screen
  if (plane.position.y >= window.innerHeight - plane.size.height) {
    plane.velocity.y = 0;
    plane.position.y = window.innerHeight - plane.size.height;
    // Optionally dispatch 'game-over' event
    // dispatch({ type: 'game-over' });
  }

  // Plane jump on touch anywhere
  touches.filter(t => t.type === 'press').forEach(t => {
    plane.velocity.y = -7; // Adjust the force of the jump
  });

  return entities;
};

export default Physics;
