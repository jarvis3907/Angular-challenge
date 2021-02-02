import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {
  @Input() taskData: Object;
  constructor() { }

  ngOnInit(): void {
  }

}
