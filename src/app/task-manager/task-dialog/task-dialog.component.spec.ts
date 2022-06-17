import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { MockRouter } from 'src/app/shared/mock-test/mock-router';
import { MockMatSnackBar } from 'src/app/shared/mock-test/mock-snackBar';
import { MockTaskService } from 'src/app/shared/mock-test/mock-task-service';
import { taskSeed } from 'src/app/task';

import { TaskDialogComponent } from './task-dialog.component';

describe('TaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDialogComponent ],
      providers: [        
        {
            provide: Router,
            useValue: MockRouter
        },
        {
            provide: TaskManagerService,
            useClass: MockTaskService
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
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it("Should add new task to the database", () => {
    const task = {taskID: '3', taskName: 'Study Angular', taskDescription: 'Studay the Unit testing', status: 1, dateCreated: new Date(), dateModified: new Date(),
        tag: [{ tagId: 1, name: 'Sample'}]};

    component.saveTaskWithService(task);
    expect(component.dataContainer.data.length).toBeGreaterThan(taskSeed.length);
  });
});
