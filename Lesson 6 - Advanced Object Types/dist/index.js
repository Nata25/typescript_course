"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.isRunning = props.isRunning ? props.isRunning : false;
        this.steeringControl = props.steeringControl;
        this.speedControl = props.speedControl;
    }
    respond(events) {
        if (!this.isRunning) {
            console.log('The car is off');
            return;
        }
        Object.keys(events).forEach((eventKey) => {
            if (!events[eventKey])
                return;
            else
                console.log('EVENT:', eventKey);
            switch (eventKey) {
                case 'ObstacleLeft':
                    this.steeringControl.turn('right');
                    break;
                case 'ObstacleRight':
                    this.steeringControl.turn('left');
                    break;
                case 'PedestrianAhead':
                    this.speedControl.speed('down');
                    break;
            }
        });
    }
}
class SteeringControl {
    execute(command) {
        console.log('Executing: ' + command);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
class SpeedControl {
    execute(command) {
        console.log(`Change speed: ${command}`);
    }
    speed(speedLevel) {
        let command;
        command = speedLevel === 'up' ? 'Speeding up' : 'Slowing down';
        this.execute(command);
    }
}
const steering = new SteeringControl();
const speed = new SpeedControl();
const autonomousCar = new Car({
    isRunning: true,
    steeringControl: steering,
    speedControl: speed
});
autonomousCar.respond(computer_vision_1.getObstacleEvents());
