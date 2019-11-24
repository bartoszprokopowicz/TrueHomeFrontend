import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = localStorage.getItem('current_user');
        const tokenType = localStorage.getItem('token_type');
        const token = localStorage.getItem(tokenType);

        if (currentUser && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${tokenType} ${token}`
                }
            });
        }

        return next.handle(request);
    }
}