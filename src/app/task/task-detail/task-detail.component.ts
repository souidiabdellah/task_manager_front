// src/app/task/task-detail/task-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task?: Task;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTaskById(+id).subscribe({
        next: task => {
          this.task = task;
          this.isLoading = false;
        },
        error: () => this.router.navigate(['/not-found'])
      });
    }
  }

  changeStatus(newStatus: 'pending' | 'in_progress' | 'done'): void {
    if (this.task) {
      this.taskService.updateTask(this.task.id!, { status: newStatus })
        .subscribe(updatedTask => {
          this.task = updatedTask;
        });
    }
  }
}