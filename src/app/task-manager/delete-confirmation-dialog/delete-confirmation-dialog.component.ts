import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogParemeter, ITaskModel } from 'src/app/shared/models/task-model';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  taskToBeDeleted: ITaskModel;

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: IDialogParemeter) 
              { 
                this.taskToBeDeleted = data.task;
              }

  ngOnInit(): void {
  }

  closeDialog(data?: any){
    this.dialogRef.close(data);
  }

  deleteTask(){
    let task = this.taskToBeDeleted.taskID;

    this.closeDialog(task);
  }

}
