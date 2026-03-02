import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { GameSession } from './game.service';

export interface PlayerLeaderboardResponse {
    rank: number;
    sessions: GameSession[];
}

@Injectable({
    providedIn: 'root'
})
export class LeaderboardService {
    constructor(private apiService: ApiService) { }

    getTopScores(): Observable<GameSession[]> {
        return this.apiService.get<GameSession[]>('/leaderboard');
    }

    getMyLeaderboard(): Observable<PlayerLeaderboardResponse> {
        return this.apiService.get<PlayerLeaderboardResponse>('/leaderboard/me');
    }

    getGlobalLeaderboard(): Observable<PlayerLeaderboardResponse[]> {
        return this.apiService.get<PlayerLeaderboardResponse[]>('/leaderboard/global');
    }
}
