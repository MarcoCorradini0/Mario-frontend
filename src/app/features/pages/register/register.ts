import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    standalone:true,
    selector:'app-register',
    imports:[CommonModule,ReactiveFormsModule],
    templateUrl:`./register.html`,
    styleUrls:[`./register.scss`]
})
export class Register{
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
