import {Injectable} from '@angular/core';
import {AppSettings, defaults} from '../settings';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private options = defaults;
  private notice$ = new Subject<any>();

  constructor() {
  }

  getOptions(): AppSettings {
    return this.options;
  }

  setNavState(type: string, value: boolean) {
    this.notice$.next({type, value} as any);
  }
}
