// Robert Lai
// 2 Rocket 2 Patrol
// 
// 
// List: (Total: 20)
// Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
// Create a new title screen (e.g., new artwork, typography, layout) (3)
// Add your own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts) (1)
// Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
// Display the time remaining (in seconds) on the screen (3)
// Create 4 new explosion sound effects and randomize which one plays on impact (3)


// Citations:
// Phaser 3 Notes on Canvas - Timer and Clock sections
// Phaser 3 Docs - Timer, Clock, and Random Number Generator sections
// "Adding a Countdown Timer - Memory Match in Phaser 3 - Part 6" by ourcade on YouTube loosely
// 

// Side note, I did this 90% of this with my laptop connected to an external monitor with a refresh rate that is 3 times that of my laptop's. I'm doing the last 10% without that monitor while writing this and I'm seeing in real time how much slower the game functions and it's pretty funny.
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