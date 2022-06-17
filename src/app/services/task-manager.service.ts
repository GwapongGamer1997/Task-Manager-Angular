import { Injectable } from '@angular/core';
import { ITaskModel } from '../shared/models/task-model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const headersDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'X-Skip-Interceptor': 'X-Skip-Interceptor'
};

const requesterOpt = {
  headers: new HttpHeaders(headersDict),
}

@Injectable({
  providedIn: 'root'
})

export class TaskManagerService {

  
  taskDataSource = this.http.get<ITaskModel[]>(this.getEndPoint('GET'), requesterOpt);
  //this.taskDataSource.status = if(this.taskDataSource.status == 0){'New'} else

  constructor(private http: HttpClient) { }

  // Start: API methods
  getTasksList(): Observable<ITaskModel[]>{
    return this.taskDataSource;
  }

  getTaskById(id: string): Observable<ITaskModel[]>{
    let url = this.getEndPoint('GET-BY-ID', id);
    return this.http.get<ITaskModel[]>(url, requesterOpt);
  }

  searchTask(task: string): Observable<ITaskModel[]>{
    let filterValue = task;

    return this.taskDataSource.pipe(
      map(tasks => tasks.filter(t => { 
        return t.taskName.toLowerCase().includes(filterValue) ||
              t.taskDescription.toLowerCase().includes(filterValue)}
      )));
  }

  addTask(val: any): Observable<ITaskModel[]> {
    const data = this.http.post<ITaskModel[]>(this.getEndPoint('POST'), val);
    console.log('data', data);
    return data;
  }

  updateTasK(task: ITaskModel, id: string): Observable<ITaskModel[]> {
    return this.http.put<ITaskModel[]>(this.getEndPoint('PUT', id), task);
  }

  deleteTask(id: any): Observable<ITaskModel[]> {
    console.log('ID to be delete-- ', id);
    return this.http.delete<ITaskModel[]>(this.getEndPoint('DELETE', id), requesterOpt);
  }

  private getEndPoint(keyword: string, parameter?: string): any{
    switch(keyword){
      case 'GET': return environment.api;
      case 'POST': return environment.api;
      case 'GET-BY-ID': return environment.api + parameter;
      case 'PUT': return environment.api + parameter;
      case 'DELETE': return environment.api + parameter;
      default: return "";
    }
  }
}