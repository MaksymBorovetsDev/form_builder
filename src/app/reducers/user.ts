import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const USER_KEY = 'user';

export const setUserAction = createAction(
  '[USER_KEY] authenticated user',
  props<{
    email: string;
    id: number;
    password: string;
    username: string;
  }>()
);

export const setIsAuthenticatedAction = createAction(
  '[USER_KEY] isAuthenticated',
  props<{
    isAuthenticated: boolean;
  }>()
);

export interface IUser {
  email: string;
  id: number;
  password: string;
  username: string;
  isAuthenticated: boolean;
}

export const initialState: IUser = {
  email: '',
  id: 0,
  username: '',
  password: '',
  isAuthenticated: false,
};

export const userReducer = createReducer(
  initialState,

  on(setUserAction, (state, action) => ({
    ...state,

    email: action.email,
    id: action.id,
    username: action.username,
    password: action.password,


  })),

  on(setIsAuthenticatedAction, (state, action) => ({
    ...state,
    isAuthenticated: action.isAuthenticated

  }))
);

export const featureSelector = createFeatureSelector<IUser>(
    USER_KEY
);

export const userSelector = createSelector(
  featureSelector,
  (state) => {state.email, state.id , state.password }
);

export const isAuthenticatedSelector = createSelector(
  featureSelector,
  (state) => state.isAuthenticated
);
