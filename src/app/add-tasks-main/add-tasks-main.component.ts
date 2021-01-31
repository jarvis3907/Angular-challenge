import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tasks-main',
  templateUrl: './add-tasks-main.component.html',
  styleUrls: ['./add-tasks-main.component.css']
})
export class AddTasksMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    alert('creating a task');
  }

}
