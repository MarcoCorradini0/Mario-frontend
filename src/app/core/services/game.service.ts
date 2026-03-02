import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface GameSession {
    id: number;
    playerOrUsername: string;
    status: string;
    validated: boolean;
    score: number;
    levelReached: number;
    durationSeconds: number;
    startedAt: string;
    endedAt?: string;
}

export interface EndGameRequest {
    score: number;
    levelReached: number;
    durationSeconds: number;
}

@Injectable({
    providedIn: 'root'
})
export class GameService {
    constructor(private apiService: ApiService) { }

    startGame(): Observable<GameSession> {
        return this.apiService.get<GameSession>('/game/start');
    }

    endGame(id: number, data: EndGameRequest): Observable<GameSession> {
        return this.apiService.post<GameSession>(`/game/end/${id}`, data);
    }
}
