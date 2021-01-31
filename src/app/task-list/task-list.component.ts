import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskList: any[];
  constructor() {  }

  ngOnInit() {
    this.taskList = [
      {
        name: 'Generate sample project task',
        description: 'description text',
        status: 'Executing now..',
        running: true,
      },
      {
        name: 'Generate sample project task',
        description: 'description text',
        status: 'Task not configured yet',
        running: false,
      },
      {
        name: 'Generate sample project task',
        description: 'description text',
        status: 'Finished',
        running: false,
      },
      {
        name: 'Count from X to Y',
        description: 'description X-Y',
        status: 'Executing now',
        running: 'true',
      }
    ];
  }

}
