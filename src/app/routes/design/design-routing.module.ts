import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ColorComponent} from './color/color.component';
import {IconComponent} from './icon/icon.component';


const routes: Routes = [
  {path: 'colors', component: ColorComponent, data: {title: 'Material Colors'}},
  {path: 'icon', component: IconComponent, data: {title: 'Material Icons'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule {
}
