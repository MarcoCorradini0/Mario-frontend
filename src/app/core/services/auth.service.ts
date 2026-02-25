import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api = environment.apiUrl;
    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }
    login(credentials: { username: string; password: string }) {
        return this.http.post<{ token: string }>(
            `${this.api}/auth/login`,
            credentials
        ).pipe(
            tap(responce => {
                this.tokenService.setToken(responce.token);
            })
        );
    }
    register(data: { username: string, password: string }) {
        return this.http.post(
            `${this.api}/auth/register`,
            data
        );
    }
    logout(): void {
        this.tokenService.clear();
    }
    isAuthenticated(): boolean {
        return this.tokenService.isAuthenticated();
    }
    changePassword(oldPassword: string, newPassword: string) {
        return this.http.post(
            `${this.api}/player/change-password`,
            { oldPassword, newPassword }
        );
    }
}