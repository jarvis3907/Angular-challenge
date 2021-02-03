import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private http: HttpService) { 

  }

  fromNumber: Number;
  toNumber: Number;
  @Input() taskDetails: Object = {};
  @Output() executeTask = new EventEmitter<Object>();

  ngOnInit(): void {
    // console.log('create task d', this.taskDetails);
    if (this.taskDetails && this.taskDetails['initialCount']) {
      this.fromNumber = this.taskDetails['initialCount'] || 0;
      this.toNumber = this.taskDetails['finalCount'] || 0;
    }
  }

  taskFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(1000),
  ]);

  createTask() {
    if (this.taskDetails && this.taskDetails['id'] && this.taskDetails['id'].length > 0) {
      const data = this.taskDetails;

      data['initialCount'] = this.fromNumber; 
      data['finalCount'] = this.toNumber; 
      this.executeTask.emit(data);
    } else {
      this.http.createTaskRequest({
        initialCount: this.fromNumber,
        finalCount: this.toNumber,
        taskId: this.taskDetails['taskType']
      }).subscribe(
        data => {
          // console.log('successful', data);
          this.taskDetails = data;
          // this.router.navigateByUrl('/task/execute');
          this.executeTask.emit(data);
        },
        error => {
          // console.log('error', error);
        }
      );
    }
  }

}
