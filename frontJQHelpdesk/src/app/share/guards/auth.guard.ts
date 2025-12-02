import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/app/authentication.service';
import { NotificationService } from '../services/app/notification.service';
import { catchError, map, of, tap } from 'rxjs';
import { E_Role } from '../models/enums/role.enum';

// No necesitamos la clase UserGuard como tal para una CanActivateFn
// sino que la lógica se integra directamente en la función.

export const authGuard: CanActivateFn = (


  route: ActivatedRouteSnapshot
) => {
  console.log("GUARD EJECUTADO", route.routeConfig?.path);

  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const noti = inject(NotificationService);

  // Verifica token
  if (!authService.authenticated()) {
    noti.warning('Autorización', 'Debe iniciar sesión', 3000);
    return router.createUrlTree(['/Login']);
  }

  // Espera a que el perfil esté cargado
  return authService.getUserProfile().pipe(
    tap(user => {
      if (!user) {
        noti.warning('Autorización', 'Sesión inválida', 3000);
        authService.logout();
      }
    }),
    map(user => {
      if (!user) return router.createUrlTree(['/Login']);



      const userRole: E_Role = user.role as E_Role;

      const rolesAllowed: E_Role[] = route.data['roles'] as E_Role[] ?? [];

      if (rolesAllowed.length > 0 && !rolesAllowed.includes(userRole)) {
        noti.warning('Acceso Restringido', 'No tiene permisos', 3000);
        return router.createUrlTree(['/Inicio']);
      }


      return true;
    }),
    catchError(() => {
      authService.logout();
      return of(router.createUrlTree(['/Login']));
    })
  );
};
