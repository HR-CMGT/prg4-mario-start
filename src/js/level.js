import { Actor, Engine, Vector, ParallaxComponent, Scene } from 'excalibur'
import { Resources } from "./resources.js"
import { Mario } from "./mario.js"
import { Platform } from "./platform.js"
import { Crate } from "./crate.js"
import { Coin } from "./coin.js"

export class Level extends Scene {

    mario

    onInitialize(engine) {
        console.log("I am a level")
        const bg = new Actor()
        bg.graphics.use(Resources.Background.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        bg.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(bg)

        this.addPlatforms()

        this.mario = new Mario()
        this.add(this.mario)
        //this.camera.strategy.lockToActor(this.mario)
        //this.camera.strategy.elasticToActor(this.mario, 0.2, 0.6)
    }
    
    addPlatforms(){
        // platforms
        let positions = [
            { "x": 400, "y": 570 },
            { "x": 500, "y": 400 },
            { "x": 900, "y": 350 }
        ]
        for (let pos of positions) {
            this.add(new Platform(pos.x, pos.y))
        }
        // crates and coins
        for (let i = 0; i < 8; i++) {
            this.add(new Crate())
            this.add(new Coin())
        }
    }
}