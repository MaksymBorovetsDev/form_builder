import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const SELECTED_COMPONENT_STYLES_KEY = 'selectedComponentStyles';
export const setSelectedAction = createAction('[SELECTED_COMPONENT_STYLES] setSelectedAction');

export const inputPayload = createAction(
  '[SELECTED_COMPONENT_STYLES] change changeUpdatedAt',
  props<{ inputPlaceholder : string }>()
);

export interface SelectedComponentState {
selected: boolean,
id: number,
inputPlaceholder: string,
}

export const initialState: SelectedComponentState = {
  selected: false,
  id: 1,
  inputPlaceholder : ''
};


export const selectedComponentStylesReducer = createReducer(
  initialState,
  on(setSelectedAction, (state) => ({
    ...state,
    selected: true, 
    id: state.id + 1 
  })),
  on(inputPayload, (state, action) => ({
    ...state,
    inputPlaceholder: action.inputPlaceholder
  })),
);

export const featureSelector = createFeatureSelector<SelectedComponentState>(
  SELECTED_COMPONENT_STYLES_KEY
);
export const selectedSelector = createSelector(
  featureSelector,
  (state) => state.id
);
export const selectedInputPlaceholder = createSelector(
  featureSelector,
  (state) => state.inputPlaceholder
);
