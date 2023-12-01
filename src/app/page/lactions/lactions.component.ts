import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-lactions',
    templateUrl: './lactions.component.html',
    styleUrls: ['./lactions.component.css'],
})
export class LactionsComponent {
    constructor(private todoService: TodoService) {}

    action() {
      console.log("action")
      this.todoService.action.next('action from action Page');
    }
}
