import Phaser from "phaser";

export class BootScene extends Phaser.Scene{
    constructor(){
        super('BootScene');
    }
    preload(){
        this.load.image('player','assets/player.png'); 
        this.load.image('background','assets/background.png');
    }
    create(){
        this.scene.start('MainScene');
    }
}