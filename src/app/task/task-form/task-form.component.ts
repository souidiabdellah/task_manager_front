// src/app/task/task-form/task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone: true,
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  isEditMode = false;
  taskId?: number;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['pending', Validators.required],
      dueDate: ['', Validators.required],
      userId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.taskId = +params['id'];
        this.loadTaskForEdit();
      }
    });
  }

  loadTaskForEdit(): void {
    if (this.taskId) {
      this.taskService.getTaskById(this.taskId).subscribe(task => {
        this.taskForm.patchValue({
          title: task.title,
          description: task.description,
          status: task.status,
          dueDate: new Date(task.dueDate).toISOString().substring(0, 10),
          userId: task.userId
        });
      });
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      taskData.dueDate = new Date(taskData.dueDate);

      const operation = this.isEditMode && this.taskId
        ? this.taskService.updateTask(this.taskId, taskData)
        : this.taskService.createTask(taskData);

      operation.subscribe({
        next: () => this.router.navigate(['/tasks']),
        error: err => console.error('Error saving task', err)
      });
    }
  }
}