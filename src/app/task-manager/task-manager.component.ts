import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { ITaskModel } from '../shared/models/task-model';
import { TaskManagerService } from '../services/task-manager.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})

export class TaskManagerComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  taskFilter: string = "";

  constructor(private dialog: MatDialog,
              private taskService:TaskManagerService,
              private changeDetect: ChangeDetectorRef,
              private router: Router,
              private snackBar: MatSnackBar) { }

// Start: Table variable declaration
  displayedColumns: string[] = ['taskName', 'taskDescription', 'dateModified', 'dateCreated', "tag", "status", "action"];
  dataSource = new MatTableDataSource<ITaskModel>();
// End: Table variable declaration

  ngOnInit(): void {
    this.refreshTaskList();
  }

  // Start: Add/Edit task dialog
  addNewTask(){
    this.router.navigate(['addTask']);
  }
  // End: Add/Edit task dialog

  // Start: Refresh the task list
  refreshTaskList() {
    this.taskService.getTasksList().subscribe(data => {
      if(data)
      {
        this.dataSource.data = data;
        this.changeDetect.detectChanges();
      }
    });
  }
  // End: Refresh the task list

  searchTask(event: Event){
    this.taskFilter = (event.target as HTMLInputElement).value;
    this.searchTaskWithService();
  }

  searchTaskWithService(){
    let inputText = this.taskFilter.trim();
    inputText = inputText.toLowerCase();
    //this.refreshTaskList();
    this.taskService.searchTask(inputText).subscribe( (data: any) => {
      if(data)
      {
        this.taskService.searchTask(data).subscribe(res => {
          this.dataSource.data = data;
          this.changeDetect.detectChanges();
        })}
      });
  }

  searchTaskById(id: string){
    let foundTaskById = this.taskService.getTaskById(id);
    //console.log('Found Task By ID-- ', foundTaskById);
    return foundTaskById;
  }

  editTask(existingTask: ITaskModel){
    this.router.navigate(['tasks', existingTask.taskID]);
  }

  deleteTask(existingTask: any){
    this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {
        task: existingTask
      }
    }).afterClosed().subscribe((data: any) => {
      if(data){
        this.deleteWithService(data);
        this.changeDetect.detectChanges();
        this.openSnackBar('Task removed.');
      }
    })
  }

  deleteWithService(data: any){
    this.taskService.deleteTask(data).subscribe(res => {
      this.refreshTaskList();
    })
  }
  
  // Start: Paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
// End: Paginator

horizontalPosition: MatSnackBarHorizontalPosition = 'start';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';
openSnackBar(message: string) {
  this.snackBar.open(message, 'Ok', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 2000
  });
}

}
