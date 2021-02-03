import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'angular-challenge';

  onTaskDetails(data) {
    // console.log('received taskdetails', data);
  }
}
