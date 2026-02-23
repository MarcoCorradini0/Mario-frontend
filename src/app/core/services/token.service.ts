import { Injectable } from "@angular/core";

interface JwtPayload{
    exp:number;
    sub:string;
    iat:number;
}
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
        if(!this.token)return false;
        const payload=this.decodeToken();
        if(!payload)return false;
        const now=Math.floor(Date.now()/1000);
        return payload.exp>now;
    }
    private decodeToken():JwtPayload|null{
        if(!this.token)return null;
        try{
            const payloadBase64=this.token.split('.')[1];
            const decoded=atob(payloadBase64);
            return JSON.parse(decoded);
        }catch{
            return null;
        }
    }
}