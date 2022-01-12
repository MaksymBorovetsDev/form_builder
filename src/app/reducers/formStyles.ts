import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const FORM_STYLES_KEY = 'formStyles';

// ///////
export const setFormStylesAction = createAction(
  '[FORM_STYLES_KEY] set form styles ',
  props<{
    placeholder: string;
    fontSize: string;
    backgroundColor: string;
    textColor: string;

  }>()
);

export const setBorderStyleAction = createAction(
  '[FORM_STYLES_KEY] set form border style ',
  props<{
    borderStyle: string;
  }>()
);

export const setFontWeightAction = createAction(
  '[FORM_STYLES_KEY] set form font weight ',
  props<{
    fontWeight: string;
  }>()
);

export const setBorderRadiusAction = createAction(
  '[FORM_STYLES_KEY] set form border radius ',
  props<{
    borderRadius: string;
  }>()
);


// //////



export interface IFormStyles {
  placeholder: string;
  fontWeight: string;
  fontSize: string;
  backgroundColor: string;
  borderStyle: string;
  textColor: string;
  borderRadius: string;
}

export const initialState: IFormStyles = {
  placeholder: '',
  fontWeight: '',
  fontSize: '',
  backgroundColor: '',
  borderStyle: '',
  textColor: '',
  borderRadius: '',
};

export const formStylesReducer = createReducer(
  initialState,

  on(setFormStylesAction, (state, action) => ({
    ...state,

        placeholder: action.placeholder,
        fontSize: action.fontSize + 'px',
        backgroundColor: action.backgroundColor,
        textColor: action.textColor
  })),


  on(setBorderStyleAction, (state, action) => ({
    ...state,
    borderStyle: action.borderStyle
  })),


  on(setFontWeightAction, (state, action) => ({
    ...state,
    fontWeight: action.fontWeight
  })),

  on(setBorderRadiusAction, (state, action) => ({
    ...state,
    borderRadius: action.borderRadius
  }))





);

export const featureSelector = createFeatureSelector<IFormStyles>(FORM_STYLES_KEY);

export const formPlaceholderSelector = createSelector(
  featureSelector,
  (state) => state.placeholder
);

export const formTextSelector = createSelector(
  featureSelector,
  (state) => state.textColor
);

export const formBackgroundColorSelector = createSelector(
  featureSelector,
  (state) => state.backgroundColor
);

export const formFontSizeSelector = createSelector(
  featureSelector,
  (state) => state.fontSize
);

export const formBorderStyleSelector = createSelector(
  featureSelector,
  (state) => state.borderStyle
);

export const formFontWeightSelector = createSelector(
  featureSelector,
  (state) => state.fontWeight
);

export const formBorderRadiuselector = createSelector(
  featureSelector,
  (state) => state.borderRadius
);
