import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { LactionsComponent } from './page/lactions/lactions.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoItemComponent,
    LactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
