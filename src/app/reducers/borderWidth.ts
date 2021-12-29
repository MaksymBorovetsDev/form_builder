import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const BORDER_WIDTH_KEY = 'borderWidth';

export const borderWidthAction = createAction(
    '[BORDER_WIDTH_KEY] borderWidth',
    props<{ borderWidth : string }>()
  );

  export interface IBorderWidth {
    borderWidth : string,
}

export const initialState: IBorderWidth = {
  borderWidth : '',
};
  

  export const borderWidthReducer = createReducer(
    initialState,

    on(borderWidthAction, (state, action) => ({
      ...state,
      borderWidth: action.borderWidth + 'px'
    })),
  );



  export const featureSelector = createFeatureSelector<IBorderWidth>(
    BORDER_WIDTH_KEY
  );
  
  export const borderWidthSelector = createSelector(
    featureSelector,
    (state) => state.borderWidth
  );
  

  