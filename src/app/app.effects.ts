import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map,tap} from 'rxjs/operators';
import { setIsAuthenticatedAction, setUserAction } from './reducers/user';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private router: Router) {}

  // updatedAt$ = createEffect(()=> this.actions$.pipe(
  //   ofType(increase, decrease,clear),
  //   map(() => changeUpdatedAt({updatedAt: Date.now()}))
  // ))

  isAuthenticated$ = createEffect(() => this.actions$.pipe( 
    ofType(setUserAction), 
    map(() => setIsAuthenticatedAction({isAuthenticated: true}))))


}
