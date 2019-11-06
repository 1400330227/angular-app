import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from '../../environments/environment';
import {AdminLayoutComponent} from '../theme/admin-layout/admin-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard', titleI18n: 'dashboard'},
      },
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
        data: {title: 'Design', titleI18n: 'design'},
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: environment.useHash,
  })],
  exports: [RouterModule]
})
export class RoutesRoutingModule {
}
