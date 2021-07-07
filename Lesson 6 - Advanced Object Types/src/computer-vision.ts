export function getObstacleEvents() {
  return { 
    'ObstacleLeft': Boolean(Math.random() > 0.5), 
    'ObstacleRight': Boolean(Math.random() > 0.5),
    'PedestrianAhead': true
  };
}