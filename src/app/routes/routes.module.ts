import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutesRoutingModule} from './routes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule {
}
