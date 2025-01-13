import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (route, next) =>
  next(
    route.clone({
      url: route.url.includes('/assets')
        ? route.url
        : 'http://localhost:3000/' + route.url,
    }),
  );
