import { isDevMode, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

import { App } from './app';
import { CoreModule } from './core/core-module';
import { ShareModule } from './share/share-module';
import { HomeModule } from './home/home-module';
import { AppRoutingModule } from './app-routing-module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxSonnerToaster } from 'ngx-sonner';
import { HttpErrorInterceptorService } from './share/interceptor/http-error-interceptor.service';
import { BreadcrumbBackComponent } from './share/components/breadcrumb-back/breadcrumb-back.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideTransloco, TranslocoModule } from '@jsverse/transloco';
import { availableLanguages, AvailableLanguages } from './transloco-config';
import { TranslocoHttpLoader } from './transloco-loader';
import { NotificacionesModule } from './notificaciones/notificaciones-module';
import { HttpAuthInterceptorService } from './share/interceptor/http-auth-interceptor.service';


registerLocaleData(localeEs);
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
    BreadcrumbBackComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    NotificacionesModule
  ],
  providers: [
    
    
    { provide: LOCALE_ID, useValue: 'es' },
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: AvailableLanguages,
        defaultLang: availableLanguages.ES,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true
    },
    
  ],
  bootstrap: [App]
})
export class AppModule { }
