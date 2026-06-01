import { CollisionType, Actor, Vector, DegreeOfFreedom, Keys } from 'excalibur'
import { Coin } from "./coin.js"
import { Resources } from './resources.js'

export class Mario extends Actor {

    constructor() {
        super({ width: Resources.Mario.width, height: Resources.Mario.height }) // collision box!
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Mario.toSprite())
        this.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 3)
    }

    onCollisionStart(event, other){
        if(other.owner instanceof Coin) {
            Resources.CoinSound.play()
            other.owner.kill()
        }
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0
        if (engine.input.keyboard.wasPressed(Keys.W) || engine.input.keyboard.wasPressed(Keys.Up)) {
            this.vel.y = -200
        }
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = true
        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = false
        }
        this.vel = new Vector(xspeed, this.vel.y)

        // check out of bounds
        if(this.pos.y > 1200) {
            engine.goToScene('game-over')
        }
    }

}