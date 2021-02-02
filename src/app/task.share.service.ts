import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskShareService {

  private taskData: Object = {};

  setTaskData(data) {
    this.taskData = data;
  }

  getTaskData() {
    return this.taskData;
  }
}
