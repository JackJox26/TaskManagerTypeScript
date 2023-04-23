import { Request, Response } from 'express'
import { GetTasksUseCase } from '../../use-cases'
import { ValidationError, validate } from 'jsonschema'
import { ValidatorResult } from 'jsonschema'
import { AddTasksUseCase } from '../../use-cases'
import { UpdateTasksUseCase } from '../../use-cases'
import { DeleteTasksUseCase } from '../../use-cases'

const taskCreateSchema={
  id: "/Task",
  type: "object",
  properties:{
    title:{
      type:"string"
    },
    priorite:{
      type:"int"
    },
  },
  required:["title","priorite"]
}
export class TaskController {
  constructor(
    private readonly getTaksUseCase: GetTasksUseCase,
    private readonly AddTasksUseCase: AddTasksUseCase,
    private readonly UpdateTasksUseCase: UpdateTasksUseCase,
    private readonly DeleteTasksUseCase: DeleteTasksUseCase
  ) { }

  async getTasks(req: Request, res: Response) {
    
    const tasks = await this.getTaksUseCase.execute(req.query)
    if (req.query['sort'] == 'priority') {
      tasks.sort(function (a, b) { return a.priorite - b.priorite; })
    }
    res.status(200).json(tasks)
  }

  async createTask(req: Request, res: Response) {
    const validatorResult: ValidatorResult = validate(req.body, taskCreateSchema)
    if (validatorResult.valid) {
      try { 
        const task = await this.AddTasksUseCase.execute(req.body)
        res.status(201).json(task)

      } catch (error) {
        res.status(500).json(error)
      }
    } else {
      res.status(400).json(validatorResult.errors)
    }
}

async getTaskById(req: Request, res: Response) {
     try {
      const task = await this.getTaksUseCase.getItemById(req.params.id)
      res.status(201).json(task)
    } catch (error) {
      res.status(500).json(error)
    }
}


async updateTask(req: Request, res: Response) {
  const validatorResult: ValidatorResult = validate(req.body, taskCreateSchema)
  if (validatorResult.valid) {
      const task = await this.UpdateTasksUseCase.execute(req.params.id,req.body )
      res.status(201).json(task)
  } else {
    res.status(400).json(validatorResult.errors)
  }
}

async deleteTask(req: Request, res: Response) {
  try {
    const task = await this.DeleteTasksUseCase.execute(req.params.id)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json(error)
  }

}
}