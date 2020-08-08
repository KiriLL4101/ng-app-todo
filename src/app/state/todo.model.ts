import { ID } from '@datorama/akita'

export interface Todo {
  id: ID
  title: string
  completed: boolean
}


export function createTodo(params: Partial<Todo>):Todo {
  return {
    
  } as Todo
}
