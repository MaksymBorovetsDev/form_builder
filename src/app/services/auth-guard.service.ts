import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isAuthenticatedSelector } from '../reducers/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  auth = false

  constructor(public store: Store, public router: Router) {
    this.store.select(isAuthenticatedSelector).subscribe(data => {
      this.auth = data
    })
  }

  canActivate(): boolean {
    if (!this.auth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
