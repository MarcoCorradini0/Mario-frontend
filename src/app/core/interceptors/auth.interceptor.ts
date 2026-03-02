import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenService } from "../services/token.service";
import { catchError, throwError } from "rxjs";
import { Router } from "@angular/router";

export const authInterceptor:HttpInterceptorFn=(req,next)=>{
    const tokenService=inject(TokenService);
    const router=inject(Router);
    const token=tokenService.getToken();
    const clonedReq=token?req.clone({setHeaders:{Authorization:`Bearer ${token}`}}):req;
    return next(clonedReq).pipe(
        catchError((error: HttpErrorResponse)=>{
            if(error.status==401){
                tokenService.clear();
                router.navigate(['/login']);
            }
            return throwError(()=>error);
        })
    );
};