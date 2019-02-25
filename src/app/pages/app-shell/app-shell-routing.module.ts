import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'aplicacoes',
        loadChildren: 'src/app/modules/applications/applications.module#ApplicationsModule'
      },
      {
        path: 'servidores',
        loadChildren: 'src/app/modules/servers/servers.module#ServersModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule {}
