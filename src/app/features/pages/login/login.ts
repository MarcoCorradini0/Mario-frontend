import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

@Component({
    standalone:true,
    selector:'app-login',
    imports: [CommonModule, ReactiveFormsModule, Navbar, Footer],
    templateUrl:'./login.html',
    styleUrl:'./login.scss'
})
export class Login{
    loading=false;
    error:string|null=null;
    form:any;
    
    mouseMoveX = 0;
    mouseMoveY = 0;
    @HostListener('window:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        this.mouseMoveX = Number(((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        this.mouseMoveY = Number(((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    }

    constructor(
        private fb:FormBuilder,
        private authService:AuthService,
        private router:Router
    ){
        this.form=this.fb.group({
            username:['',Validators.required],
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