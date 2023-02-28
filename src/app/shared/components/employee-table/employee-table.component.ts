import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '@interfaces';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  @Input() data: ITask[];
  constructor() { }

  ngOnInit(): void {
  }

}
