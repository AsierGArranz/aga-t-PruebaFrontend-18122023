import { CanActivateFn } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  //aqui pondria la autentificacion y chekeo del token pero no me da tiempo
  if (sessionStorage.getItem('auth-token')) {
    return true;
  } else {
    console.log('El token no está guardado');
    return false;
  }
};
