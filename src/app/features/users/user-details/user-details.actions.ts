import { Action } from '@ngrx/store';
import { APIResponse, User } from '../../shared';

export enum UserDetailsActionTypes {
  LoadUser = '[UserDetails] LoadUser',
  UserLoaded = '[UserDetails] UserLoaded',
  ResetState = '[UserDetails] ResetState',
  LoadFail = '[UserDetails] LoadFail',
}

export class LoadUser implements Action {
  readonly type = UserDetailsActionTypes.LoadUser;

  constructor(public payload: number) {}
}

export class UserLoaded implements Action {
  readonly type = UserDetailsActionTypes.UserLoaded;

  constructor(public payload: APIResponse<User>) {}
}

export class ResetState implements Action {
  readonly type = UserDetailsActionTypes.ResetState;
}

export class LoadFail implements Action {
  readonly type = UserDetailsActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type UserDetailsActions = LoadUser | UserLoaded | LoadFail | ResetState;
