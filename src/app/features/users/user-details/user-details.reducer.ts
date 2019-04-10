import * as userDetailsActions from './user-details.actions';
import { User } from '../../shared';

export interface UserDetailsState {
  user: User;
  loading: boolean;
}

const emptyUser: User = {
  id: null,
  first_name: null,
  last_name: null,
  avatar: null,
};

const initialState: UserDetailsState = {
  user: emptyUser,
  loading: false,
};

export function userDetailsReducer(
  state = initialState,
  action: userDetailsActions.UserDetailsActions
): UserDetailsState {
  switch (action.type) {
    case userDetailsActions.UserDetailsActionTypes.LoadUser: {
      return {
        ...state,
        loading: true,
      };
    }

    case userDetailsActions.UserDetailsActionTypes.UserLoaded: {
      return {
        ...state,
        user: action.payload.data,
        loading: false,
      };
    }

    case userDetailsActions.UserDetailsActionTypes.ResetState: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
