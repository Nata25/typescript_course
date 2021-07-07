"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getObstacleEvents() {
    return {
        'ObstacleLeft': Boolean(Math.random() > 0.5),
        'ObstacleRight': Boolean(Math.random() > 0.5),
        'PedestrianAhead': true
    };
}
exports.getObstacleEvents = getObstacleEvents;
