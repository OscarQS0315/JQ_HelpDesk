import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/app/notification.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private noti: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + request.url);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        console.log("Interceptor - Error capturado:", error);

        let message = '';

        // ❌ NO mostrar notificación si el error será manejado por el componente
        if ([400, 401, 403, 404, 409, 422].includes(error.status)) {
          return throwError(() => error);
        }

        // 🔥 Manejo REAL de errores de servidor
        switch (error.status) {
          case 0:
            message = 'Error de conexión con el servidor';
            break;
          case 500:
            message = 'Error interno del servidor';
            break;
          case 503:
            message = 'Servicio no disponible';
            break;
          default:
            message = error.message || 'Error desconocido';
        }

        // Mostramos notificación SOLO para errores reales
        this.noti.error(
          'Error ' + error.status,
          message,
          5000
        );

        return throwError(() => error);
      })
    );
  }
}
