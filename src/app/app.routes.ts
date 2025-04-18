import { Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';

export const routes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/new', component: TaskFormComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: '**', redirectTo: '/tasks' }
  ];