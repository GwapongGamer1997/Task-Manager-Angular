import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { ITaskModel } from 'src/app/shared/models/task-model';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  taskManagerFormGroup = new FormGroup({
    taskID: new FormControl(null),
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    tag: new FormControl([]),
    dateCreated: new FormControl(null),
    dateModified: new FormControl(Date.now())
  });
  isLinear = false;

  //existingTaskToBeUpdated: ITaskModel;

  constructor(private taskService: TaskManagerService,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.taskService.getTaskById(this.route.snapshot.paramMap.get('id')).subscribe(res => {this.setValues(res)})
  }

  setValues(value: any){
    console.log('value--', value);
    this.taskManagerFormGroup.controls['taskID'].setValue(value.taskID);
    this.taskManagerFormGroup.controls['taskName'].setValue(value.taskName);
    this.taskManagerFormGroup.controls['taskDescription'].setValue(value.taskDescription);
    this.taskManagerFormGroup.controls['status'].setValue(value.status);
    this.taskManagerFormGroup.controls['tag'].setValue(value.tag);
    this.taskManagerFormGroup.controls['dateCreated'].setValue(value.dateCreated);
    this.taskManagerFormGroup.controls['dateModified'].setValue(value.dateModified);
    //console.log('Task Manager Form Group-- ', this.taskManagerFormGroup.value);
  }

  save(){
    //console.log('Task Manager Form Group version 2-- ', this.taskManagerFormGroup.value);
    this.taskService.updateTasK(this.taskManagerFormGroup.value, this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      this.router.navigate(['/'])
      }
    )
  }

  

  cancel(): void{
    this.router.navigate(['/'])
  }

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
