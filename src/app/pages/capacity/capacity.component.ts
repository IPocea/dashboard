import { Component, OnInit } from '@angular/core';
import { IHoursPerDay, ITask, ITotalHours } from '@interfaces';
import { EmployeeService } from '@services';
import { add } from '@utils';
import { finalize } from 'rxjs';
import { take } from 'rxjs';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss'],
})
export class CapacityComponent implements OnInit {
  data: ITask[] = [];
  tags: string[] = [];
  dates: string[] = [];
  totalHours: ITotalHours = null;
  hoursPerDay: IHoursPerDay[] = [];
  isLoading: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(): void {
    this.isLoading = true;
    this.employeeService
      .getEmployee()
      .pipe(
        take(1),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (tasks: ITask[]) => {
          this.data = tasks.sort((a, b) => b.estimateAmount - a.estimateAmount);
          this.getTagsAndDates();
          this.getTotalHours();
          this.getHoursPerDay();
          this.hoursPerDay.sort((a, b) => (a.date < b.date ? -1 : 1));
        },
        error: (err) => {},
      });
  }

  private getTotalHours(): void {
    const totalHrs = {};
    for (const tag of this.tags) {
      totalHrs[`${tag.toLowerCase()}`] = 0;
      for (const task of this.data) {
        if (task.tag === tag) {
          totalHrs[`${tag.toLowerCase()}`] = add(
            totalHrs[`${tag.toLowerCase()}`],
            task.duration
          );
        }
      }
    }
    this.totalHours = totalHrs as ITotalHours;
  }

  private getHoursPerDay() {
    for (let i = 0; i < this.dates.length; i++) {
      this.hoursPerDay.push({
        date: this.dates[i],
        totalHours: {} as ITotalHours,
      });
      for (const tag of this.tags) {
        this.hoursPerDay[i].totalHours[`${tag.toLowerCase()}`] = 0;
        for (const task of this.data) {
          if (
            task.date === this.dates[i] &&
            task.tag.toLowerCase() === tag.toLowerCase()
          ) {
            this.hoursPerDay[i].totalHours[`${tag.toLowerCase()}`] = add(
              this.hoursPerDay[i].totalHours[`${tag.toLowerCase()}`],
              task.duration
            );
          }
        }
      }
    }
  }

  private getTagsAndDates(): void {
    this.tags = [];
    this.dates = [];
    for (const task of this.data) {
      if (!this.tags.includes(task.tag)) {
        this.tags.push(task.tag);
      }
      if (!this.dates.includes(task.date)) {
        this.dates.push(task.date);
      }
    }
    this.dates.sort();
  }
}
