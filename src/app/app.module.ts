import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { TaskListComponent } from './task-list/task-list.component';
import { AddTasksMainComponent } from './add-tasks-main/add-tasks-main.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { ExecuteTaskComponent } from './execute-task/execute-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTasksMainComponent,
    CreateTaskComponent,
    TaskSummaryComponent,
    ExecuteTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
