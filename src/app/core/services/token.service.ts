import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TokenService{
    private token: string|null=null;
    setToken(token:string):void{
        this.token=token;
    }
    getToken():string|null{
        return this.token;
    }
    clear():void{
        this.token=null;
    }
    isAuthenticated():boolean{
        return !!this.token;
    }
}