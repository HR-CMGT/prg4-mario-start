import { ImageSource, Sound, Resource, Loader, FontSource } from 'excalibur'

const Resources = {
    Background: new ImageSource('images/background.png'),
    Gameover: new ImageSource('images/gameover.png'),
    Coin: new ImageSource('images/coin.png'),
    Crate: new ImageSource('images/crate.png'),
    Ground: new ImageSource('images/ground.png'),
    Mario: new ImageSource('images/mario.png'),
    Platform: new ImageSource('images/platform.png'),
    CoinSound: new Sound('sounds/coin.mp3'),
    PixelFont: new FontSource('PressStart2P-Regular.ttf', 'PressStart')
}

const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Gameover,
    Resources.Coin,
    Resources.Crate,
    Resources.Ground,
    Resources.Mario,
    Resources.Platform,
    Resources.CoinSound,
    Resources.PixelFont
])

export { Resources, ResourceLoader }

