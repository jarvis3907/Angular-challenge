import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  createTaskRequest(data: Object): Observable<Object> {
    return this.http.post('/api/tasks', data);
  }

  executeTaskRequest(data: Object): Observable<Object> {
    return this.http.post(`/api/tasks/execute`, data);
  }

  getTaskList(): Observable<Object> {
    return this.http.get('/api/tasks');
  }

  getTaskById(id): Observable<Object> {
    return this.http.get(`/api/tasks/${id}`);
  }

  cancelTask(id): Observable<Object> {
    return this.http.put(`/api/tasks/`, {id, status: 'Cancelled'});
  }

  deleteTask(id): Observable<Object> {
    return this.http.delete(`/api/tasks/${id}`);
  }
}
