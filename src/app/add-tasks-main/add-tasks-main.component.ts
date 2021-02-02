import { Component, OnInit } from '@angular/core';
import { TaskShareService } from '../task.share.service';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-add-tasks-main',
  templateUrl: './add-tasks-main.component.html',
  styleUrls: ['./add-tasks-main.component.css']
})
export class AddTasksMainComponent implements OnInit {

  taskStep : String = 'addList';
  taskDetails: Object;
  taskType: any[];
  constructor(public taskData: TaskShareService, private httpService: HttpService) { }

  ngOnInit(): void {
    console.log('taskshare details', this.taskData.getTaskData());
    // TODO: Make taskByID call
    this.taskDetails = this.taskData.getTaskData();
    this.mapTaskStep(this.taskDetails['status']);
    if(this.taskStep === 'addList'){
      this.httpService.getTaskType().subscribe(
        data => {
          this.taskType = data['taskType'];
          console.log(data);
        }
      )
    }
  }

  addTask() {
    alert('creating a task');
  }

  showView(taskView: String , taskId: Number) {
    if(taskId === 2){
    this.taskStep = taskView;
    this.taskDetails['taskType'] = taskId;
    }else{
      alert('Not configured');
    }
  }

  onExecuteTask(data: Object) {
    console.log('executed task->',data);
    this.taskDetails = data;
    this.taskStep = 'executeTask';
  }

  onTaskSummary(data) {
    console.log('received task summary event on MAIN---------------')
    this.taskDetails = data;
    this.mapTaskStep(data['status']);
  }

  mapTaskStep(status) {
    switch (status) {
      case 'NOT CONFIGURED':
          this.taskStep = 'addTask';
        break;
      case 'EXECUTING':
          this.taskStep = 'executeTask';
        break;
      case 'COMPLETED':
        this.taskStep = 'summary';
        break;
      case 'CANCELLED':
        this.taskStep = 'summary';
        break;
      case 'ADD TASK':
        this.taskStep = 'addList';
        break;
    
      default:
        break;
    }
  }
}
