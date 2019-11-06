import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './admin-layout/header/header.component';
import {SidebarComponent} from './admin-layout/sidebar/sidebar.component';
import {SidebarNoticeComponent} from './admin-layout/sidebar-notice/sidebar-notice.component';
import {SidemenuComponent} from './admin-layout/sidemenu/sidemenu.component';
import {TopmenuComponent} from './admin-layout/topmenu/topmenu.component';
import {SharedModule} from '../shared';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {UserPanelComponent} from './admin-layout/sidebar/user-panel.component';
import {AccordionLinkDirective} from './admin-layout/sidemenu/accordionlink.directive';
import {AccordionAnchorDirective} from './admin-layout/sidemenu/accordionanchor.directive';
import {AccordionDirective} from './admin-layout/sidemenu/accordion.directive';


@NgModule({
  declarations: [
    AccordionDirective,
    AccordionLinkDirective,
    AccordionAnchorDirective,
    HeaderComponent,
    SidebarComponent,
    SidebarNoticeComponent,
    SidemenuComponent,
    TopmenuComponent,
    AdminLayoutComponent,
    UserPanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ThemeModule {
}
