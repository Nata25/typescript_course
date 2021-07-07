import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  // isRunning?: boolean,
  respond: (events: Events) => void
}

interface AutonomousCarProps {
  isRunning?: boolean,
  steeringControl: Steering,
  speedControl: Speed
}

interface Events {
  [event: string]: boolean
}

interface Control {
  execute: (command: string) => void
}

type DirectionOptions = 'left' | 'right'
type SpeedOptions = 'up' | 'down'

interface Steering extends Control {
  turn: (direction: DirectionOptions) => void
}

interface Speed extends Control {
  speed: (speedLevel: SpeedOptions) => void
}

class Car implements AutonomousCar {
  isRunning: boolean;
  steeringControl: Steering;
  speedControl: Speed;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning ? props.isRunning : false
    this.steeringControl = props.steeringControl
    this.speedControl = props.speedControl
  }
  
  respond (events: Events) {
    if (!this.isRunning) {
      console.log('The car is off')
      return
    }
    Object.keys(events).forEach((eventKey: string) =>   {
      if (!events[eventKey]) return
      else console.log('EVENT:', eventKey)

      switch(eventKey) {
        case 'ObstacleLeft':
          this.steeringControl.turn('right')
          break
        case 'ObstacleRight':
          this.steeringControl.turn('left')
          break
        case 'PedestrianAhead':
          this.speedControl.speed('down')
          break
      }
    })
  }
}

class SteeringControl implements Steering {
  execute (command: string) {
    console.log('Executing: ' + command)
  }
  turn (direction: DirectionOptions) {
    this.execute(`turn ${direction}`)
  }
}

class SpeedControl implements Speed {
  execute (command: string) {
    console.log(`Change speed: ${command}`)
  }
  speed (speedLevel: SpeedOptions) {
    let command: string
    command = speedLevel === 'up' ? 'Speeding up' : 'Slowing down'
    this.execute(command)
  }
}

const steering = new SteeringControl()
const speed = new SpeedControl()

const autonomousCar = new Car({
  isRunning: true,
  steeringControl: steering,
  speedControl: speed
})
autonomousCar.respond(getObstacleEvents())
