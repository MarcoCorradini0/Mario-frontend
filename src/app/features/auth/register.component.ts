import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    standalone:true,
    selector:'app-register',
    imports:[CommonModule,ReactiveFormsModule],
    template:`
    <div class="register-container">
        <form [formGroup]="form"(ngSubmit)="onSubmit()">
            <h2>Register</h2>
            <input type="text"placeholder="Username"formControlName="username"/>
            <input type="email"placeholder="Email"formControlName="email"/>
            <input type="password"placeholder="Password"formControlName="password"/>
            <button type="submit" [disabled]="form.invalid||loading">
                {{loading?'loading...':'Register'}}
            </button>
            <p *ngif="error" class="error">{{error}}</p>
        </form>
    </div>`,
    styles:[`
    .register-container {
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
export class RegisterComponent{
    loading=false;
    error:string|null=null;
    form:any;
    constructor(
        private fb:FormBuilder,
        private authService:AuthService,
        private router:Router
    ){
        this.form=this.fb.group({
            username:['',Validators.required],
            email:['',Validators.required],
            password:['',Validators.required]
        })
        if(this.authService.isAuthenticated()){
            this.router.navigate(['/game']);
        }
    }
    onSubmit(){
        if(this.form.invalid)return;
        this.loading=true;
        this.error=null;
        this.authService.register(this.form.value as any).subscribe({
            next:()=>{
                this.router.navigate(['/game']);
            },
            error:()=>{
                this.error='Registration failed';
                this.loading=false;
            }
        });
    }
}
