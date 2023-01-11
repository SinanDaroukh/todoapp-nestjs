import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './createTodo.dto';
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

  createTodo(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
  }

  updateTodo(id: string, todo: Todo) {
    const todoToUpdate = this.getTodoById(id);
    if (!todoToUpdate) {
      return new NotFoundException('ID not existing !');
    }
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }

    const updateTodos = this.todos.map((t) =>
      t.id !== +id ? t : todoToUpdate,
    );
    this.todos = [...updateTodos];

    return { updatedTodo: 1, todo: updateTodos };
  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter((t) => t.id !== +id)];
    if (this.todos.length < nbOfTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }
  }
}
