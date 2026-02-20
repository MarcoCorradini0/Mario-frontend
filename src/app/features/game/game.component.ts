import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import Phaser from "phaser";
import { BootScene } from './scenes/BootScene';
import { MainScene } from './scenes/MainScene';

@Component({
    standalone:true,
    selector:'app-game',
    imports:[CommonModule],
    template:`
    <div #gmaeContainer class="game-wrapper"></div>
    `,
    styles:[`
    .game-wrapper{
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    `]
})
export class GameComponent implements AfterViewInit{
    @ViewChild('gameContainer',{static:true})
    container!:ElementRef;
    game!:Phaser.Game;
    ngAfterViewInit(): void {
        type:Phaser.AUTO,
        width:1280,
        height:720,
        parent:this.container.nativeElement,
        backgroundColor:'#121218',
        scene:[BootScene, MainScene],
        physics:{
            default:'arcade',
            arcade:{
                debug: false
            }
        }
    };
    this.game=new Phaser.Game(config);
}