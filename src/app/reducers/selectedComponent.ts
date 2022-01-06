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
    fontSize: string;
    colorRGB: string;
    borderWidth: string;
    borderRadius: string;
    borderStyle: string;
  }>()
);

export interface ISelectedConfigs {
  selectedId: string;
  selectedWidth: string;
  selectedHeight: string;
  selectedPlaceholder: string;
  fontSize: string;
  colorRGB: string;
  borderWidth: string;
  borderRadius: string;
  borderStyle: string;
}

export const initialState: ISelectedConfigs = {
  selectedId: '',
  selectedWidth: '',
  selectedHeight: '',
  selectedPlaceholder: '',
  fontSize: '',
  colorRGB: '',
  borderWidth: '',
  borderRadius: '',
  borderStyle: '',
};

export const selectedComponentReducer = createReducer(
  initialState,

  on(setSelectedConfigAction, (state, action) => ({
    ...state,

    selectedId: action.selectedId,
    selectedWidth: action.selectedWidth,
    selectedHeight: action.selectedHeight,
    selectedPlaceholder: action.selectedPlaceholder,
    fontSize: action.fontSize,
    colorRGB: action.colorRGB,
    borderWidth: action.borderWidth,
    borderRadius: action.borderRadius,
    borderStyle: action.borderStyle,
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

export const selectedFontSizeSelector = createSelector(
  featureSelector,
  (state) => state.fontSize
);

export const selectedColorRGBSelector = createSelector(
  featureSelector,
  (state) => state.colorRGB
);

export const selectedBorderWidthSelector = createSelector(
  featureSelector,
  (state) => state.borderWidth
);

export const selectedBorderRadiusSelector = createSelector(
  featureSelector,
  (state) => state.borderRadius
);

export const selectedBorderStyleSelector = createSelector(
  featureSelector,
  (state) => state.borderStyle
);
