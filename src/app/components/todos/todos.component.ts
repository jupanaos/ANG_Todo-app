import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  deleteTodo(todo: Todo) {
    this.todoService
    .deleteTodos(todo)
    .subscribe(
      () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
    );
  }
}
