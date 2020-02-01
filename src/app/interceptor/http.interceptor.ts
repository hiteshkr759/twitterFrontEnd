import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth token from the auth service and add it to header
        /*
            const authToken: Token = this._authenticationService.getAuthorizationToken();
                if (authToken != null) {
                    // Clone the request and replace the original headers with
                    // cloned headers, updated with the authorization.
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${authToken.access_token}`
                        }
                    });
                }
            // });
        */
        const currentUser = localStorage.getItem('currentUser');
        if(currentUser){
            const userDetail = JSON.parse(currentUser);
            request = request.clone({
                setHeaders: {
                    Authorization:`Bearer ${userDetail.token}`
                }
            });
        }
        
        return next.handle(request);
    }
}
