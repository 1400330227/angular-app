import {Injectable} from '@angular/core';
import {MenuService} from './menu.service';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class StartupService {
  constructor(private menuService: MenuService, private http: HttpClient) {
  }

  load(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get('assets/data/menu.json')
        .pipe(
          catchError(res => {
            reject();
            return res;
          })
        )
        .subscribe(
          (res: any) => {
            this.menuService.set(res.menu);
          },
          () => {},
          () => {
            resolve();
          }
        );
    });
  }
}
