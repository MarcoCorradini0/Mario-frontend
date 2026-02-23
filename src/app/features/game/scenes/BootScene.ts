import Phaser from "phaser";

export class BootScene extends Phaser.Scene{
    constructor(){
        super('BootScene');
    }
    preload(){
        //assets
    }
    create(){
        this.scene.start('MainScene');
    }
}
