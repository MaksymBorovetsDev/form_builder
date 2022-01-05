import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const SELECTED_COMPONENT_KEY = 'selectedComponent';

export const setSelectedConfigAction = createAction(
  '[SELECTED_COMPONENT_KEY] set selected component configs',
  props<{
    selectedId: string;
    selectedWidth: string;
    selectedHeight: string;
    selectedPlaceholder: string;
  }>()
);

export interface ISelectedConfigs {
  selectedId: string;
  selectedWidth: string;
  selectedHeight: string;
  selectedPlaceholder: string;
}

export const initialState: ISelectedConfigs = {
  selectedId: '',
  selectedWidth: '',
  selectedHeight: '',
  selectedPlaceholder: '',
};

export const selectedComponentReducer = createReducer(
  initialState,

  on(setSelectedConfigAction, (state, action) => ({
    ...state,

    selectedId: action.selectedId,
    selectedWidth: action.selectedWidth,
    selectedHeight: action.selectedHeight,
    selectedPlaceholder: action.selectedPlaceholder,
  }))
);

export const featureSelector = createFeatureSelector<ISelectedConfigs>(
  SELECTED_COMPONENT_KEY
);

export const selectedIDSelector = createSelector(
  featureSelector,
  (state) => state.selectedId
);

export const selectedWidthSelector = createSelector(
  featureSelector,
  (state) => state.selectedWidth
);

export const selectedHeightSelector = createSelector(
  featureSelector,
  (state) => state.selectedHeight
);

export const selectedPlaceholderSelector = createSelector(
  featureSelector,
  (state) => state.selectedPlaceholder
);
