import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todosService.getTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todosService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() newTodo) {
    this.todosService.createTodo(newTodo);
  }
}
