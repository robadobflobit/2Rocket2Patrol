class Title extends Phaser.Scene{
    constructor() {
        super('titleScene')
    }


    preload() {
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.image('titlescreen', './assets/titlescreen.png')
    }
    
    create() {
        keyFIRE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        this.titlescreen = this.add.tileSprite(0, 0, 640, 480, 'titlescreen').setOrigin(0,0)
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '50px',
            backgroundColor: '#000',
            color: '#00FF00',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, 'ROCKET PATROL', titleConfig).setOrigin(0.5)
        titleConfig.backgroundColor = '#F3B141'
        titleConfig.color = '#843605'
        titleConfig.fontSize = '28px'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize*5.5 + borderPadding, 'Press "F" to Start', titleConfig).setOrigin(0.5)

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyFIRE)) {
            this.sound.play('sfx-select')
            this.scene.start('menuScene')
        }
    }
}