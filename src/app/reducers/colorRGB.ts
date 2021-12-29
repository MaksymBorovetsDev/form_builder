import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const COLOR_RGB_KEY = 'selectedColorRGB';

export const colorRGBAction = createAction(
    '[COLOR_RGB_KEY] colorRGB',
    props<{ colorRGB : string }>()
  );

  export interface IColorRGB {
    colorRGB : string,
}

export const initialState: IColorRGB = {
  colorRGB : '',
  };
  

  export const colorRGBReducer = createReducer(
    initialState,

    on(colorRGBAction, (state, action) => ({
      ...state,
      colorRGB:  action.colorRGB
    })),
  );



  export const featureSelector = createFeatureSelector<IColorRGB>(
    COLOR_RGB_KEY
  );
  
  export const selectedColorRGB = createSelector(
    featureSelector,
    (state) => state.colorRGB
  );
  