import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './task-list/task-list.component.html',
  styleUrls: ['./task-list/task-list.component.css'],
})
export class AppComponent extends TaskListComponent{
  title = 'angular-challenge';
}
