import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/modal/todo.modal';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todoItem: Todo = {} as Todo;
  @Output() deleteAction = new EventEmitter<Todo>();

  public deleteTodo() {
    this.deleteAction.emit(this.todoItem);
  }

}
