import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'tasks',
    loadChildren: () => import('./task/task.routes').then(m => m.taskRoutes)
  }
  ];