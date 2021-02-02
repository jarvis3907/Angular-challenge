import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTasksMainComponent } from './add-tasks-main/add-tasks-main.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ExecuteTaskComponent } from './execute-task/execute-task.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task/add', component: AddTasksMainComponent },
  { path: 'task/create', component: CreateTaskComponent },
  { path: 'task/execute', component: ExecuteTaskComponent },
  { path: 'task/summary', component: TaskSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
