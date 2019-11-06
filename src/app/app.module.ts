import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutesModule} from './routes/routes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThemeModule} from './theme/theme.module';
import {StartupService} from './core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DefaultInterceptor} from './core/interceptors/default.interceptor';
import {SharedModule} from './shared';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ThemeModule,
    RoutesModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
