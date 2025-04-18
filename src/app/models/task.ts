export interface Task {
    id?: number;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: Date;
    userId: number;
    createdAt?: Date;
  }
