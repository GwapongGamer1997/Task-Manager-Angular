import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskManagerService } from '../services/task-manager.service';
import { MockChangeDetectorRef } from '../shared/mock-test/mock-changeDetect';
import { ModalService } from '../shared/mock-test/mock-dialog';
import { MockRouter } from '../shared/mock-test/mock-router';
import { MockMatSnackBar } from '../shared/mock-test/mock-snackBar';
import { MockTaskService } from '../shared/mock-test/mock-task-service';
import { taskSeed } from '../task';

import { TaskManagerComponent } from './task-manager.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ TaskManagerComponent ],
      providers: [
        {
          provide: MatDialog,
          useValue: new ModalService()
        },
        {
          provide: TaskManagerService,
          useClass: MockTaskService
        },
        {
          provide: Router,
          useValue: MockRouter
        },
        {
          provide: ChangeDetectorRef,
          useValue: MockChangeDetectorRef
        },
        {
          provide: MatSnackBar,
          useValue: MockMatSnackBar
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should retreive all tasks from the database", () => {
    component.refreshTaskList()
    console.log('Should retreive all tasks from the database. Datasource: ', component.dataSource.data.length);
    console.log('Should retreive all tasks from the database. TaskSeed: ', taskSeed.length);
    expect(component.dataSource.data.length).toEqual(taskSeed.length)
  });

  it("Should search a task from the database", () => {
    component.taskFilter= "Movie"
    component.searchTaskWithService();

    expect(component.dataSource.data.length).toBeGreaterThanOrEqual(taskSeed.filter(t => t.taskName.includes(component.taskFilter.toLowerCase())).length);
  });

  it("Should delete a task from the database", () => {
    const data = 2;
    component.deleteWithService(data);

    expect(component.dataSource.data.length).toBeLessThan(taskSeed.length);
  });
});
