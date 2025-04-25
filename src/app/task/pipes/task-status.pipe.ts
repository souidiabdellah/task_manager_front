// src/app/task/pipes/task-status.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {
  transform(value: string): string {
    const statusMap: { [key: string]: string } = {
      'pending': 'Pending',
      'in-progress': 'In Progress',
      'done': 'Done'
    };
    return statusMap[value] || value;
  }
}