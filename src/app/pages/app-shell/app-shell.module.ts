import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { ShellComponent } from './shell/shell.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppShellRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AppShellModule {}
