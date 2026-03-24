import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  items = [
    {
      icon: "<img src='icons/play.svg' alt='Play'>", title: 'Real-Time Action', 
      description: 'Experience fast-paced competitive gameplay with zero lag'
    },
    {
      icon: "<img src='icons/play.svg' alt='Play'>", title: 'Global Leaderboard', 
      description: 'Compete with players worldwide and climb the ranks'
    },
    {
      icon: "<img src='icons/play.svg' alt='Play'>", title: 'Secure Authentication', 
      description: 'JWT RS256 encryption keeps your account protected'
    },
    {
      icon: "<img src='icons/play.svg' alt='Play'>", title: 'Active Community', 
      description: 'Join thousands of competitive players'
    },
    {
      icon: "<img src='icons/play.svg' alt='Play'>", title: 'Skill-Based Ranking', 
      description: 'Fair matchmaking based on your performance'
    },
    {
      icon: "<img src='icons/play.svg' alt='Play'>", title: 'Cross-Platform', 
      description: 'Play on any device with a modern browser'
    }
  ];
}
