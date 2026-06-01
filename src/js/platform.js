import { CollisionType, Actor, Vector } from 'excalibur'
import { Resources } from './resources.js'

export class Platform extends Actor {

    constructor(x, y) {
        super({ width: Resources.Platform.width, height: Resources.Platform.height }) // collision box! 
        this.pos = new Vector(x,y)
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Platform.toSprite())
    }
}