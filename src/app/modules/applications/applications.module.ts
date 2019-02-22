import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationEditComponent } from './application-edit/application-edit.component';

@NgModule({
  declarations: [ApplicationsListComponent, ApplicationEditComponent],
  imports: [CommonModule, ApplicationsRoutingModule]
})
export class ApplicationsModule {}
