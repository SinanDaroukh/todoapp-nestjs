import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Wash the dishes',
      description: 'Help mom & dad to wash the dishes',
      done: true,
    },
    {
      id: 2,
      title: 'Take care of Rex',
      description: 'Groom the dog',
      done: false,
    },
    {
      id: 3,
      title: 'Drain the oil out of the car',
      done: false,
    },
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: string): Todo {
    return this.todos.find((todo) => todo.id === Number(id));
  }

  createTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
  }
}
