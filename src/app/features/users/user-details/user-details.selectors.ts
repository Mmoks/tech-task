import { createSelector } from '@ngrx/store';
import { getFeatureState } from '../reducers';

export const getUserDetailsState = createSelector(
  getFeatureState,
  state => state.userDetails
);

export const getUser = createSelector(
  getUserDetailsState,
  state => state.user
);

export const getLoading = createSelector(
  getUserDetailsState,
  state => state.loading
);
