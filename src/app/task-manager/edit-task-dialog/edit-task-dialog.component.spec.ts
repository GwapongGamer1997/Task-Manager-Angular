// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TaskManagerService } from 'src/app/services/task-manager.service';
// import { MockRouter } from 'src/app/shared/mock-test/mock-router';
// import { MockMatSnackBar } from 'src/app/shared/mock-test/mock-snackBar';
// import { MockTaskService } from 'src/app/shared/mock-test/mock-task-service';

// import { EditTaskDialogComponent } from './edit-task-dialog.component';

// describe('EditTaskDialogComponent', () => {
//   let component: EditTaskDialogComponent;
//   let fixture: ComponentFixture<EditTaskDialogComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ EditTaskDialogComponent ],
//       providers: [        
//         {
//             provide: TaskManagerService,
//             useClass: MockTaskService
//         },
//         {
//             provider: ActivatedRoute,
//             useValue: MockRouter
//         },
//         {
//           provide: Router,
//           useValue: MockRouter
//         },
//         {
//             provide: MatSnackBar,
//             useValue: MockMatSnackBar
//         }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditTaskDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Should update an existing task from the database', () => {
//     const task = {taskID: '2', taskName: 'Study C#', taskDescription: 'Studay the Unit testing', status: 1, dateCreated: new Date(), dateModified: new Date(),
//     tag: [{ tagId: 1, name: 'Sample'}]};

//     component.save();


//   });
// });
