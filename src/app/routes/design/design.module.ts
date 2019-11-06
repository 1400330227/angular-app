import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { ColorComponent } from './color/color.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [ColorComponent, IconComponent],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
