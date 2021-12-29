import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const FONT_WEIGHT_KEY = 'fontWeight';

export const fontWeightAction = createAction(
    '[FONT_WEIGHT_KEY] fontWeight',
    props<{ fontWeight : string }>()
  );

  export interface IFontWeight {
    fontWeight : string,
}

export const initialState: IFontWeight = {
    fontWeight : '',
};
  

  export const fontWeightReducer = createReducer(
    initialState,

    on(fontWeightAction, (state, action) => ({
      ...state,
      fontWeight: action.fontWeight 
    })),
  );



  export const featureSelector = createFeatureSelector<IFontWeight>(
    FONT_WEIGHT_KEY
  );
  
  export const selectedFontWeight = createSelector(
    featureSelector,
    (state) => state.fontWeight
  );
  

  