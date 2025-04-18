// src/app/task/task.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskStatusPipe } from './pipes/task-status.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: TaskListComponent },
      { path: 'new', component: TaskFormComponent },
      { path: ':id', component: TaskDetailComponent },
      { path: ':id/edit', component: TaskFormComponent }
    ]),
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent,
    TaskStatusPipe
  ],
  exports: [TaskListComponent]
})
export class TaskModule { }