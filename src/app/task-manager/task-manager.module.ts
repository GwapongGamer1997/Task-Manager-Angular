import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { SharedModule } from '../shared/Modules/shared.module';



@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskDialogComponent,
    EditTaskDialogComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TaskManagerModule { }
