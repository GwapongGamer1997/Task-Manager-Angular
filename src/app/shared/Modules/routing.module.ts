import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditTaskDialogComponent } from 'src/app/task-manager/edit-task-dialog/edit-task-dialog.component';
import { TaskDialogComponent } from 'src/app/task-manager/task-dialog/task-dialog.component';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'tasks/:id', component: EditTaskDialogComponent},
      {path: 'addTask', component: TaskDialogComponent}
    ])
  ]
})
export class RoutingModule { }
