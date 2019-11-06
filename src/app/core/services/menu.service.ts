import {Injectable} from '@angular/core';

export interface Tag {
  color: string; // Background Color
  value: string;
}

export interface ChildrenItem {
  state: string;
  name: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  children?: ChildrenItem[];
}

export interface Menu {
  state: string;
  name: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  icon: string;
  label?: Tag;
  badge?: Tag;
  children?: ChildrenItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: Menu[] = [];

  constructor() {
  }

  getAll(): Menu[] {
    return this.menu;
  }

  set(menus: Menu[]): Menu[] {
    this.menu = [...this.menu, ...menus];
    return this.menu;
  }
}
