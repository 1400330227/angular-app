import {Component, Input, OnInit} from '@angular/core';
import {Menu, MenuService} from '../../../core/services/menu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent implements OnInit {

  @Input() ripple = true;

  menus: Menu[] = this.menuService.getAll();

  constructor(private menuService: MenuService) {
  }

  // 删除数组空值
  filterStates(states: string[]): Array<string> {
    return states.filter(item => item && item.trim());
  }

  ngOnInit() {
  }

}
