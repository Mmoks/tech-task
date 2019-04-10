import { getFeatureState } from '../reducers';
import { createSelector } from '@ngrx/store';
import { usersAdapter } from './dashboard.reducer';

export const getDashboardState = createSelector(
  getFeatureState,
  state => state.dashboard
);

export const getUsersEntitiesState = createSelector(
  getDashboardState,
  state => state.users
);

export const getUsersMeta = createSelector(
  getDashboardState,
  state => state.meta
);

export const getLoading = createSelector(
  getDashboardState,
  state => state.loading
);

export const {
  selectIds: getUsersIds,
  selectEntities: getUsersEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers,
} = usersAdapter.getSelectors(getUsersEntitiesState);
