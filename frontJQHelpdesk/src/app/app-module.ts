import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { App } from './app';
import { CoreModule } from './core/core-module';
import { ShareModule } from './share/share-module';
import { HomeModule } from './home/home-module';
import { AppRoutingModule } from './app-routing-module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxSonnerToaster } from 'ngx-sonner';
import { HttpErrorInterceptorService } from './share/interceptor/http-error-interceptor.service';



@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    NgxSonnerToaster,
    CoreModule,
    ShareModule,
    HomeModule,
    AppRoutingModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
