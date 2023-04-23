import { Router } from 'express'
import { TaskRepository, RelationalDatabase } from '../../../infrastructure/database'
import { taskRoutes } from './task.routes'
import { TaskController } from './controller'
import { GetTasksUseCase } from '../use-cases'
import { AddTasksUseCase } from '../use-cases'
import { UpdateTasksUseCase } from '../use-cases'
import { DeleteTasksUseCase } from '../use-cases'

export type TaskExternalDependencies = {
  database: RelationalDatabase
}

export const taskInjector = (externalDependencies: TaskExternalDependencies): Router => {
  const taskRepository = new TaskRepository(externalDependencies.database)

  const getTasksUseCase = new GetTasksUseCase(taskRepository);
  const addTasksUseCase = new AddTasksUseCase(taskRepository);
  const updateTasksUseCase = new UpdateTasksUseCase(taskRepository);
  const deleteTasksUseCase = new DeleteTasksUseCase(taskRepository);

  const taskController = new TaskController(
    getTasksUseCase,
    addTasksUseCase,
    updateTasksUseCase,
    deleteTasksUseCase
  )

  return taskRoutes(taskController)
}