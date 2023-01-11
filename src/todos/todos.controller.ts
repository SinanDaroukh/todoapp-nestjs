import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTodoDto } from './createTodo.dto';
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
  createTodo(@Body() newTodo: CreateTodoDto) {
    this.todosService.createTodo(newTodo);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todoUpdated: CreateTodoDto) {
    return this.todosService.updateTodo(id, todoUpdated);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
