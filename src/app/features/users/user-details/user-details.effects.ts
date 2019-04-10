import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userDetailsActions from './user-details.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { APIResponse, User } from '../../shared';
import { UsersService } from '../services/users.service';
import { UserDetailsState } from './user-details.reducer';

@Injectable()
export class UserDetailsEffects {
  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<userDetailsActions.LoadUser>(
      userDetailsActions.UserDetailsActionTypes.LoadUser
    ),
    exhaustMap(action =>
      this.usersApiService.getUser(action.payload).pipe(
        map(
          (resp: APIResponse<User>) => new userDetailsActions.UserLoaded(resp)
        ),
        catchError(error => of(new userDetailsActions.LoadFail(error)))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private usersApiService: UsersService,
    private store$: Store<UserDetailsState>
  ) {}
}
