import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { GameComponent } from './features/game/game.component';
import { Home } from './features/pages/home/home';
import { Login } from './features/pages/login/login';
import { Register } from './features/pages/register/register';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'game',component:GameComponent,canActivate:[authGuard]},
    {path:'**',redirectTo:'game'},
];
