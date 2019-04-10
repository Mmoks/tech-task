import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, catchError, withLatestFrom, map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import * as dashboardActions from './dashboard.actions';
import * as dashboardSelectors from './dashboard.selectors';
import { MetaData, DashboardState } from './dashboard.reducer';
import { APIResponse, User } from '../../shared';

@Injectable()
export class DashboardEffects {
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<dashboardActions.LoadUsers>(
      dashboardActions.DashboardActionTypes.LoadUsers
    ),
    withLatestFrom(this.store$.pipe(select(dashboardSelectors.getUsersMeta))),
    exhaustMap(([action, meta]: [dashboardActions.LoadUsers, MetaData]) =>
      this.usersApiService.getUsers(action.payload).pipe(
        map(
          (resp: APIResponse<User[]>) => new dashboardActions.UsersLoaded(resp)
        ),
        catchError(error => of(new dashboardActions.LoadFail(error)))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private usersApiService: UsersService,
    private store$: Store<DashboardState>
  ) {}
}
