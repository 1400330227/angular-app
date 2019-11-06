import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import {SettingsService} from '../../core/services/settings.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  @ViewChild('content', {static: true}) content: MatSidenavContent;

  options = this.settings.getOptions();

  constructor(private settings: SettingsService) {
  }

  private isMobileScreen = false;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  sidenavOpenedChange(isOpened: boolean) {
    this.options.sidenavOpened = isOpened;
    this.settings.setNavState('opened', isOpened);
  }

  toggleCollapsed() {
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
    setTimeout(() => {
      this.settings.setNavState('collapsed', this.options.sidenavCollapsed);
    }, timer);
  }

  ngOnInit() {
  }

}
