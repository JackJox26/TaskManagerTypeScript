import { Router } from 'express'
import { TaskController } from './controller'

export function taskRoutes(controller: TaskController): Router {
  const router = Router()

  router.get('/', controller.getTasks.bind(controller))
  
  router.get('/:id', controller.getTaskById.bind(controller))

  router.post('/', controller.createTask.bind(controller))

  router.patch('/:id', controller.updateTask.bind(controller))

  router.delete('/:id', controller.deleteTask.bind(controller))

  router.get('/sort', controller.getTasks.bind(controller))
  
  return router
}
