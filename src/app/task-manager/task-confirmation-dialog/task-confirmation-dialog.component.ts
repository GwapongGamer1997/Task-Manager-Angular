import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-confirmation-dialog',
  templateUrl: './task-confirmation-dialog.component.html',
  styleUrls: ['./task-confirmation-dialog.component.scss']
})
export class TaskConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskConfirmationDialogComponent>) { }

  ngOnInit(): void {
  }

  okay(){
    this.dialogRef.close();
  }
}
