import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/modal/todo.modal';
import { TodoService } from 'src/app/services/todo.service';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit, OnDestroy {
    todoList: Todo[] = [];
    subscription: Subscription = new Subscription();

    constructor(private todoService: TodoService, private router: Router) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.getTodoList();
        const sub: Subscription = this.todoService.action.subscribe(action => {
            console.log(action);
        });
        this.subscription.add(sub);
    }

    onDeleteClick(todo: Todo) {
        const sub: Subscription = this.todoService.deleteTodo(todo.id).subscribe(() => {
            this.getTodoList();
        });
        this.subscription.add(sub);
    }

    getTodoList() {
        const sub: Subscription = this.todoService.getTodos().subscribe(todos => {
            this.todoList = todos;
        });
        this.subscription.add(sub);
    }

    navigate() {
        this.router.navigate(['/todos/action']);
    }
}
