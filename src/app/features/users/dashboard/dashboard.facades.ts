import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared';
import { Store, select } from '@ngrx/store';
import { DashboardState, MetaData } from './dashboard.reducer';
import * as dashboardSelectors from './dashboard.selectors';
import * as dashboardActions from './dashboard.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacades {
  users$: Observable<User[]>;
  meta$: Observable<MetaData>;
  loading$: Observable<boolean>;

  constructor(private store$: Store<DashboardState>) {
    this.users$ = this.store$.pipe(select(dashboardSelectors.getAllUsers));
    this.meta$ = this.store$.pipe(select(dashboardSelectors.getUsersMeta));
    this.loading$ = this.store$.pipe(select(dashboardSelectors.getLoading));
  }

  loadUsers(page: number) {
    this.store$.dispatch(new dashboardActions.LoadUsers(page));
  }
}
