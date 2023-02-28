import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '@interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<ITask[]> {
    return this.http.get<ITask[]>('assets/data.json');
  }
}
