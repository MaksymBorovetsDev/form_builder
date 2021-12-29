import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const BORDER_STYLE_KEY = 'borderStyle';

export const borderStyleAction = createAction(
    '[BORDER_STYLE_KEY] borderStyle',
    props<{ borderStyle : string }>()
  );

  export interface IBorderStyle {
    borderStyle : string,
}

export const initialState: IBorderStyle = {
  borderStyle : '',
};
  

  export const borderStyleReducer = createReducer(
    initialState,

    on(borderStyleAction, (state, action) => ({
      ...state,
      borderStyle: action.borderStyle
    })),
  );



  export const featureSelector = createFeatureSelector<IBorderStyle>(
    BORDER_STYLE_KEY
  );
  
  export const borderStyleSelector = createSelector(
    featureSelector,
    (state) => state.borderStyle
  );
  

  