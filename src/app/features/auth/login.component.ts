import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    standalone:true,
    selector:'app-login',
    imports:[CommonModule,ReactiveFormsModule],
    template:`
    <div class="login-container">
        <form [formGroup]="form"(ngSubmit)="onSubmit()">
            <h2>Login</h2>
            <input type="text"placeholder="Username"formControlName="username"/>
            <input type="password"placeholder="Password"formControlName="password"/>
            <button type="submit" [disabled]="form.invalid||loading">
                {{loading?'loading...':'Login'}}
            </button>
            <p *ngif="error" class="error">{{error}}</p>
        </form>
    </div>`,
    styles:[`
    .login-container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 300px;
    }
    .error {
      color: red;
    }
    `]
})
export class LoginComponent{
    loading=false;
    error:string|null=null;
    form=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
    });
    constructor(
        private fb:FormBuilder,
        private authService:AuthService,
        private router:Router
    ){}
    onSubmit(){
        if(this.form.invalid)return;
        this.loading=true;
        this.error=null;
        this.authService.login(this.form.value as any).subscribe({
            next:()=>{
                this.router.navigate(['/game']);
            },
            error:()=>{
                this.error='Invalid credentials';
                this.loading=false;
            }
        });
    }
}