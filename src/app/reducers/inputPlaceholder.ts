import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const INPUT_PLACEHOLDER = 'inputPlaceholder';


export const inputPlaceholderAction = createAction(
  '[SELECTED_COMPONENT_STYLES] change changeUpdatedAt',
  props<{ inputPlaceholder : string }>()
);

export interface IInputPlaceholder {

inputPlaceholder: string,

}

export const initialState: IInputPlaceholder = {
  inputPlaceholder : '',

};


export const inputPlaceholderReducer = createReducer(
  initialState,

  on(inputPlaceholderAction, (state, action) => ({
    ...state,
    inputPlaceholder: action.inputPlaceholder
  })),

);

export const featureSelector = createFeatureSelector<IInputPlaceholder>(
  INPUT_PLACEHOLDER
);

export const selectedInputPlaceholder = createSelector(
  featureSelector,
  (state) => state.inputPlaceholder
);
