// -- Start: Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// -- End: Imports

// --Components
import { TaskConfirmationDialogComponent } from './task-manager/task-confirmation-dialog/task-confirmation-dialog.component';
import { RatingComponent } from './shared/rating/rating.component';
import { TagsManagementComponent } from './tags-management/tags-management.component';
import { TaskManagerService } from './services/task-manager.service';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { TaskManagerModule } from './task-manager/task-manager.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskConfirmationDialogComponent,
    RatingComponent,
    TagsManagementComponent,
    PagenotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    TaskManagerModule
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
