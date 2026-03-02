import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import Phaser from "phaser";
import { BootScene } from './scenes/BootScene';
import { MainScene } from './scenes/MainScene';
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    standalone:true,
    selector:'app-game',
    imports:[CommonModule],
    template:`
    <div #gameContainer class="game-wrapper">
        <button class="logout-btn" (click)="logout()">Logout</button>
    </div>
    `,
    styles:[`
    .game-wrapper {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative; 
    }
    .logout-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 10; 
        padding: 0.5rem 1rem;
        background-color: #ff3b30;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
    }
    .logout-btn:hover {
        background-color: #ff5757;
    }
    `]
})
export class GameComponent implements AfterViewInit{
    constructor(
        private authService: AuthService,
        private router: Router
      ) {}
      logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    @ViewChild('gameContainer',{static:true})
    container!:ElementRef;
    game!:Phaser.Game;
    ngAfterViewInit(): void {
        const config: Phaser.Types.Core.GameConfig ={
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
}