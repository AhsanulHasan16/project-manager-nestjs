export class CreateTaskDto {
  title: string;
  description: string;
  status: string;
  assignedTo: number; // User ID
}