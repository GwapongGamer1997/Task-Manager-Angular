import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskManagerComponent } from './task-manager/task-manager.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RoutingModule } from './shared/Modules/routing.module';

const routes: Routes = [
  {path: 'tasks', component: TaskManagerComponent},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
