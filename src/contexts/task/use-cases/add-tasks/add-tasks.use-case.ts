import { Task } from '../../domains'
import { ITaskRepository } from '../../infrastructure'

export class AddTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }
  async execute(task : Task): Promise<Task> {
     return await this.TaskRepository.createTask(task)
  }
}