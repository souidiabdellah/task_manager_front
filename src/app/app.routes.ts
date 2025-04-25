import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './user/auth.guard';

export const routes: Routes = [
  { 
    path: 'tasks',
    loadChildren: () => import('./task/task.routes').then(m => m.taskRoutes),canActivate: [AuthGuard]
  },
  {
    path : 'login', component : LoginComponent
  }
  ];