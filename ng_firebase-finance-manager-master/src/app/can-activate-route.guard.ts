import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable()

export class CanActivateRouteGuard implements CanActivate {
    
    constructor(private auth: AuthService) { }
    
    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
            return this.auth.isAuthenticated;
        }
    
}
