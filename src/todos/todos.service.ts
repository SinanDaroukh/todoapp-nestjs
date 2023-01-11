import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'Wash the dishes',
      description: 'Help mom & dad to wash the dishes',
    },
    {
      id: 2,
      title: 'Take care of Rex',
      description: 'Groom the dog',
    },
  ];

  getTodos(): any[] {
    return this.todos;
  }
}
