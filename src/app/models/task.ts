export interface Task {
    id?: number;
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'done';
    dueDate: Date;
    userId: number;
    createdAt?: Date;
  }
