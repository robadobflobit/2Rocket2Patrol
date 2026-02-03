// Robert Lai
// 2 Rocket 2 Patrol
// 
// 
// List: (Total: 8)
// Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
// Create a new title screen (e.g., new artwork, typography, layout) (3)


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Title, Menu, Play]
}
let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3