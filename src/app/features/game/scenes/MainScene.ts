import Phaser from "phaser";

export class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }
    create(){
        this.add.text(100,100,'Game Started',{color:'#00ff00'});
    }
}
