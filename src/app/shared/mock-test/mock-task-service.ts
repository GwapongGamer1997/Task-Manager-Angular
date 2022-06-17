import { Injectable } from '@angular/core';
import { ITaskModel } from '../models/task-model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { taskSeed } from 'src/app/task';
import { MatTableDataSource } from '@angular/material/table';

const headersDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'X-Skip-Interceptor': 'X-Skip-Interceptor'
};

@Injectable({
  providedIn: 'root'
})

export class MockTaskService {

  constructor() { }

  public dataSource: ITaskModel[] = JSON.parse(JSON.stringify(taskSeed));


  getTasksList(){
    return of (this.dataSource);
  }

  getTaskById(id: string){
    return of ([]);
  }

  searchTask(searchData: any){
    this.dataSource = this.dataSource.filter(t => t.taskName == searchData.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()));
    return of(this.dataSource);
}

  addTask(val: any){
    this.dataSource.push(val);
    return of (this.dataSource); 
  }

  updateTasK(task: ITaskModel, id: string){
    this.dataSource = this.dataSource.filter(task => task.taskID == id);
    return of(this.dataSource);
  }

  deleteTask(id: any){
    this.dataSource = this.dataSource.filter(task => task.taskID != id);
    return of(this.dataSource);
  }
}