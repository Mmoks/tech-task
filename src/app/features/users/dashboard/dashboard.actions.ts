import { Action } from '@ngrx/store';
import { APIResponse, User } from '../../shared';

export enum DashboardActionTypes {
  LoadUsers = '[Dashboard] LoadUsers',
  UsersLoaded = '[Dashboard] UsersLoaded',
  LoadFail = '[Dashboard] LoadFail',
}

export class LoadUsers implements Action {
  readonly type = DashboardActionTypes.LoadUsers;
  constructor(public payload: number) {}
}

export class UsersLoaded implements Action {
  readonly type = DashboardActionTypes.UsersLoaded;

  constructor(public payload: APIResponse<User[]>) {}
}

export class LoadFail implements Action {
  readonly type = DashboardActionTypes.LoadFail;

  constructor(public payload: any) {}
}
export type DashboardActions = LoadUsers | UsersLoaded | LoadFail;
