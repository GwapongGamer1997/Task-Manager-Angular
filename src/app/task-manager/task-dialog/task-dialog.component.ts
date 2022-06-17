import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { ITaskModel } from 'src/app/shared/models/task-model';
import { taskSeed } from 'src/app/task';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})

export class TaskDialogComponent implements OnInit {

  taskManagerFormGroup = new FormGroup({
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    status: new FormControl(0),
    tag: new FormControl([])
  });

  tagManagerFormGroup = new FormGroup({
    tag: new FormControl([]),
  });
  isLinear = false;

  constructor(private router: Router,
              private taskManagerService: TaskManagerService,
              private snackBar: MatSnackBar) { }// dialogref is use to close the dialog. <inside is the component you want to close.

  public dataSource: ITaskModel[] = JSON.parse(JSON.stringify(taskSeed))
  public dataContainer = new MatTableDataSource<ITaskModel>();

  ngOnInit(): void {
    this.refreshTaskList();
  }

  save(): void{
    let newTask =  this.taskManagerFormGroup.value;
    let tagsData = this.tagManagerFormGroup.controls['tag'].value as [];
    let tag = [];
    tag.push({"name": tagsData});
    newTask.tag = tag;

    this.openSnackBar('New task added.');
    // this.taskManagerService.addTask(newTask).subscribe(res => {
    //   this.cancel();
    // })
    this.saveTaskWithService(newTask);
  }

  saveTaskWithService(newTask: any){
    
    // Start: For unit testing
    this.dataSource.push(newTask);
    this.refreshTaskList();
    // End: For unit testing

    this.taskManagerService.addTask(newTask).subscribe(res => {
      this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/']);
    //this.openSnackBar('New task added.');
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
      //panelClass: ['white-snackbar']
    });
  }

  // Start: For unit testing
  refreshTaskList() {
        this.dataContainer.data = this.dataSource;
  }
  // End: For unit testing
}
