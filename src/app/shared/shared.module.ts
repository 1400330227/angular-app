import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

const THIRD_MODULES: Array<any> = [MaterialModule, FlexLayoutModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, RouterModule, ...THIRD_MODULES],
  exports: [CommonModule, FormsModule, RouterModule, ...THIRD_MODULES]
})
export class SharedModule {
}
