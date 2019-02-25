import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationEditComponent } from './application-edit/application-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsListComponent
  },
  {
    path: 'edit',
    component: ApplicationEditComponent
  },
  {
    path: 'edit/:id',
    component: ApplicationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {}
