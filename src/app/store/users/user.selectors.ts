 
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './user.reducer';

export const selectUserState = createFeatureSelector<fromUsers.UserState>(fromUsers.usersFeatureKey);

export const selectAllUsers = createSelector(selectUserState, fromUsers.selectAll);
export const selectUsersLoading = createSelector(selectUserState, state => state.loading);
export const selectUsersError = createSelector(selectUserState, state => state.error);
export const selectUserEntities = createSelector(selectUserState, fromUsers.selectEntities);
