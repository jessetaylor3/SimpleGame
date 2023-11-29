// systems/Physics.js
const Physics = (entities, { touches, time, dispatch }) => {
  let plane = entities.plane.body;

  // Apply gravity
  plane.velocity.y += 0.2; // Gravity
  plane.position.y += plane.velocity.y;

  // Plane jump on touch
  touches.filter(t => t.type === "press")
    .forEach(t => {
      plane.velocity.y = -5; // Jump strength
    });

  // Move obstacles and check for collisions
  Object.keys(entities).forEach(key => {
    if (key.startsWith("obstacle")) {
      let obstacle = entities[key];
      obstacle.body.position.x -= 2; // Obstacle speed

      // Check for collision with the plane
      if (checkCollision(plane, obstacle.body, obstacle.size)) {
        dispatch({ type: 'game-over' });
      }

      // Check if obstacle passed by the plane for scoring
      if (!obstacle.passed && plane.position.x > obstacle.body.position.x + obstacle.size.width) {
        obstacle.passed = true;
        dispatch({ type: 'score' });
      }
    }
  });

  return entities;
};

const checkCollision = (plane, obstacle, obstacleSize) => {
  let planeRect = {
    x: plane.position.x - 25,
    y: plane.position.y - 25,
    width: 50,
    height: 50
  };
  let obstacleRect = {
    x: obstacle.position.x,
    y: obstacle.position.y,
    width: obstacleSize.width,
    height: obstacleSize.height
  };

  if (planeRect.x < obstacleRect.x + obstacleRect.width &&
      planeRect.x + planeRect.width > obstacleRect.x &&
      planeRect.y < obstacleRect.y + obstacleRect.height &&
      planeRect.y + planeRect.height > obstacleRect.y) {
    return true;
  }
  return false;
};

export default Physics;
