import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { faCircleXmark, faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  faCircleXmark = faCircleXmark;
  faCircle = faCircle;

  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: any) {
    this.onDeleteTodo.emit(todo);
  }
}
