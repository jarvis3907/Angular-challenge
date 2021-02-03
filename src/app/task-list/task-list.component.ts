import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskShareService } from '../task.share.service';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskList: any[];


  constructor(private router: Router, private taskData: TaskShareService, private httpService: HttpService) {  }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList() {
    this.httpService.getTaskList().subscribe(
      (data) => {
        // console.log(data);
        this.taskList = data['tasks'];
      },
      error => {
        // console.log(error);
      }
    );
  }

  getTaskDetails(taskData) {
    this.taskData.setTaskData(taskData);
    this.router.navigate(['/task/add']);
  }

  addTaskList() {
    this.taskData.setTaskData({status: 'ADD TASK'});
    this.router.navigate(['/task/add']);
  }

  cancelTask(id) {
    // console.log('cancelling->', id);
    this.httpService.cancelTask(id).subscribe(
      () => {
        this.getTaskList();
      }
    );
  }

  deleteTask(id) {
    // console.log('deleting->', id);
    this.httpService.deleteTask(id).subscribe(
      () => this.getTaskList()
    )
  }
}
