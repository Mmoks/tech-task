import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared';
import { Store, select } from '@ngrx/store';
import { UserDetailsState } from './user-details.reducer';
import * as userDetailsSelectors from './user-details.selectors';
import * as userDetailsActions from './user-details.actions';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsFacades {
  user$: Observable<User>;
  loading$: Observable<boolean>;

  constructor(private store$: Store<UserDetailsState>) {
    this.user$ = this.store$.pipe(select(userDetailsSelectors.getUser));
    this.loading$ = this.store$.pipe(select(userDetailsSelectors.getLoading));
  }

  loadUser(id: number) {
    this.store$.dispatch(new userDetailsActions.LoadUser(id));
  }

  resetState() {
    this.store$.dispatch(new userDetailsActions.ResetState());
  }
}
