import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AddTasksMainComponent } from './add-tasks-main/add-tasks-main.component';
import { AddTasksSummaryComponent } from './add-tasks-summary/add-tasks-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTasksMainComponent,
    AddTasksSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
