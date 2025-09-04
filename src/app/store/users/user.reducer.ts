 
import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as UserActions from './user.actions';
import { User } from 'src/app/models/user.model';

export const usersFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: any | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  loading: false,
  error: null
});

const _userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => adapter.setAll(users, { ...state, loading: false })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserActions.addUserSuccess, (state, { user }) => adapter.addOne(user, state)),
  on(UserActions.addUserFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.updateUserSuccess, (state, { user }) => adapter.upsertOne(user, state)),
  on(UserActions.updateUserFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.deleteUserSuccess, (state, { id }) => adapter.removeOne(id, state)),
  on(UserActions.deleteUserFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
