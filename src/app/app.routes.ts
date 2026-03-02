import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/auth/login.component';
import { GameComponent } from './features/game/game.component';

export const routes: Routes = [
    {path:'',redirectTo:'game',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'game',component:GameComponent,canActivate:[authGuard]},
    {path:'**',redirectTo:'game'},
];
