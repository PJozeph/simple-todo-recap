import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LactionsComponent } from './page/lactions/lactions.component';
import { TodoPageComponent } from './page/todo-page/todo-page.component';

const routes: Routes = [
  { path: 'todos', component: TodoPageComponent },
  { path: 'todos/action', component: LactionsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
