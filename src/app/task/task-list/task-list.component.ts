// src/app/task/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskStatusPipe } from '../pipes/task-status.pipe';
import { CommonModule } from '@angular/common';


@Component({
  imports:[FormsModule,RouterModule,TaskStatusPipe,CommonModule],
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  statusFilter: string = 'all';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.filterTasks();
    });
  }

  filterTasks(): void {
    this.filteredTasks = this.statusFilter === 'all' 
      ? this.tasks 
      : this.tasks.filter(task => task.status === this.statusFilter);
  }

  onStatusChange(newStatus: string): void {
    this.statusFilter = newStatus;
    this.filterTasks();
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.filterTasks();
      });
    }
  }
}