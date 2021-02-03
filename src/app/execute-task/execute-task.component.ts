import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-execute-task',
  templateUrl: './execute-task.component.html',
  styleUrls: ['./execute-task.component.css']
})
export class ExecuteTaskComponent implements OnInit {

  @Input() taskData: Object;
  @Output() taskSummary = new EventEmitter<Object>();

  constructor( private httpService: HttpService, private router: Router) { }
  private looper = null;

  ngOnInit(): void {
    if (this.taskData['status'] === 'EXECUTING') {
      this.loopTaskById();
    }
  }

  executeTask() {
    // implement http call
    this.httpService.executeTaskRequest({
      id: this.taskData['id'],
      initialCount: this.taskData['initialCount'],
      finalCount: this.taskData['finalCount'],
    }).subscribe(() => {
      this.taskData['status'] = 'EXECUTING';
      // // console.log('td', this.taskData);
      this.loopTaskById();
    },
    err => {
      // console.log(err)
    })
  }

  loopTaskById() {
    // console.log('starting here');
    this.looper = setInterval(() => {
      this.httpService.getTaskById(this.taskData['id']).subscribe(
        (data) => {
          // // console.log(data);
          this.taskData = data;
          if (data && data['status'] === 'COMPLETED') {
            clearInterval(this.looper);
            this.taskSummary.emit(data);
          }
        },
        error => {
          // console.log(error);
        }
      );
    }, 1000);
  }

  goBack() {
    if (this.looper) {
      // console.log('stopping the interval');
      clearInterval(this.looper);
    }

    this.router.navigate(['/']);
  }

  cancelTask() {
    this.httpService.cancelTask(this.taskData['id']).subscribe(
      data => {
        // console.log('cancelled');
        clearInterval(this.looper);
        this.taskSummary.emit(data);
      },
      err => {
        // console.log('cancellation failed');
      }
    )
  }
}
