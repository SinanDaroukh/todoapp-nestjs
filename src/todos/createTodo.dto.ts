export class CreateTodoDto {
  id: number;
  readonly title: string;
  readonly description?: string;
  readonly done: boolean;
}
